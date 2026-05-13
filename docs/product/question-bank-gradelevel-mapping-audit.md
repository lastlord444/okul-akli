# Question Bank GradeLevel Mapping Audit

## Context
- **Dataset**: `alibayram-turkish-mmlu-normalized-50k.jsonl`
- **Total Rows**: 50,000
- **Purpose**: Analyze the risk of `gradeLevel: null` in the dataset and determine the best mitigation strategy before deciding to proceed with the full 50,000 row database import.

## Dataset Sample Analysis
A sample analysis of the normalized dataset reveals the following:
1. **Null Count**: `50,000 / 50,000` rows have `gradeLevel: null`.
2. **Subjects Observed**: "Adalet", "Bankacılık ve Sigortacılık", etc.
3. **Topics Observed**: "İdare Hukukuna Giriş", "Medeni Hukuk I", "Türk Anayasa Hukuku", "Adalet Meslek Etiği", etc.
4. **Conclusion**: The dataset heavily consists of Higher Education (University / AÖF), Public Personnel Selection Exam (KPSS), or general knowledge topics. **It is not a K-12 curriculum dataset.**

## Mapping Options and Risk Assessment

### Option A: Continue with `Unspecified` Fallback (Current Strategy)
- **Description**: Any topic with a `null` grade level gets assigned to a dynamically created `Unspecified` GradeLevel in the database.
- **Risks**:
  - **Data Quality**: High integrity. It accurately reflects that these questions do not belong to a standard K-12 grade.
  - **Misclassification**: Low. It prevents forcing university-level content into "12. Sınıf".
  - **Production Filtering**: Medium. The UI will have a massive "Unspecified" bucket. The client application must handle filtering primarily by Subject/Topic for this bucket.
  - **Schema Changes**: None required.
  - **Timing**: Valid before and after 50k import.

### Option B: Manual Subject-Based Mapping
- **Description**: Hardcode a mapping inside the import script to assign specific grade levels to topics based on heuristics.
- **Risks**:
  - **Data Quality**: Poor. Mapping "Medeni Hukuk I" to a high school grade is factually incorrect.
  - **Misclassification**: High.
  - **Production Filtering**: High negative impact. K-12 students filtering by their grade would encounter irrelevant university questions.
  - **Schema Changes**: None, but pollutes the script with dataset-specific hacks.
  - **Timing**: Would block the 50k import until the map is built.

### Option C: Dataset Enrichment Script (LLM / NLP)
- **Description**: Pass the dataset through an LLM to infer the grade level before importing.
- **Risks**:
  - **Data Quality**: Dependent on LLM accuracy.
  - **Misclassification**: Medium. 
  - **Production Filtering**: Medium.
  - **Schema Changes**: None, but introduces a massive delay and cost for API inference. The LLM would likely classify them as "University" anyway, which essentially behaves just like "Unspecified" in a K-12 app.
  - **Timing**: Blocks the 50k import.

### Option D: Enforce `gradeLevel` Field at Import
- **Description**: Reject any row where `gradeLevel` is `null`.
- **Risks**:
  - **Data Quality**: High strictness.
  - **Misclassification**: None.
  - **Production Filtering**: Fatal for this dataset.
  - **Schema Changes**: None.
  - **Timing**: Blocks the 50k import completely, as 100% of the dataset would be rejected.

## Recommended Decision
- Recommended mapping decision: Proceed with Option A (`Unspecified` fallback).
- 50k readiness decision: Conditionally proceed to a guarded 50k runbook/planning slice, not direct import.
- Explicitly state:
  - Full 50k import has not been approved/executed in this PR.
  - This PR only removes GradeLevel mapping as a blocker.

The `Unspecified` fallback is logically the most accurate mapping for the Turkish MMLU dataset. Since the content is predominantly Higher Education/General Knowledge, creating a fake K-12 grade mapping would severely pollute the application's domain truth. 

**Conclusion for 50k Readiness**: GradeLevel mapping does not block a controlled 50k import readiness step. Proceeding with Unspecified fallback is the safest option for this dataset. Full 50k execution still requires a separate guarded run plan because the script limit guard currently blocks imports above 15,000 and full-scale DB behavior has not yet been validated. The UI/Mobile teams should be advised to handle `Unspecified` grade levels gracefully by prioritizing Subject and Topic filters.
