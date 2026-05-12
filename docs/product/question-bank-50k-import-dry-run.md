# Question Bank 50k Import Dry-Run Report

- DB import performed: no
- Raw JSONL committed: no
- Duplicate questionText is a warning, not a hard invalid
- Import recommendation: "Proceed with limited DB import smoke after review, starting with 500 rows."

## Overview
- **Total Rows Seen**: 50000
- **Importable Rows**: 50000
- **Hard Invalid Rows**: 0
- **Warning Rows**: 14513
- **Duplicate externalId count**: 0
- **Duplicate questionText warning count**: 14513

## Aggregations (from importable rows)

### Option Count Distribution
- 5 options: 50000

### Correct Label Distribution
- E: 10208
- B: 9833
- A: 10221
- C: 9889
- D: 9849

### Top 20 Subjects
- **Adalet**: 43200
- **Bankacılık ve Sigortacılık**: 6800

### Top 20 Topics
- **Adalet > İnsan Hakları ve Kamu Özgürlükleri**: 2854
- **Adalet > İngilizce I**: 2032
- **Adalet > İngilizce II**: 1867
- **Adalet > Medeni Hukuk I**: 1794
- **Adalet > İdari Yargı**: 1758
- **Adalet > Temel Bilgi Teknolojileri I**: 1714
- **Adalet > Temel Bilgi Teknolojileri II**: 1689
- **Adalet > İdare Hukukuna Giriş**: 1664
- **Adalet > Hukukun Temel Kavramları**: 1624
- **Adalet > Hukuk Dili ve Adli Yazışmalar**: 1446
- **Adalet > Adalet Meslek Etiği**: 1376
- **Adalet > Kalem Mevzuatı**: 1318
- **Adalet > Almanca II**: 1308
- **Adalet > Halkla İlişkiler ve İletişim**: 1228
- **Adalet > Ticaret Hukuku**: 1198
- **Adalet > Türk Anayasa Hukuku**: 1164
- **Adalet > Ulusal Yargı Ağı Projesi II**: 1144
- **Adalet > Medeni Hukuk II**: 1096
- **Adalet > Büro Teknolojileri**: 988
- **Adalet > Atatürk İlke ve İnkilap Tarihi II**: 980

## Rejected Reason Summary (across all rows)


## First 5 Valid Samples
```json
[
  {
    "externalId": "alibayram-turkish-mmlu:0",
    "sourceName": "alibayram/turkish_mmlu",
    "sourceUrl": "https://huggingface.co/datasets/alibayram/turkish_mmlu",
    "license": "cc-by-nc-nd-4.0",
    "gradeLevel": null,
    "subject": "Adalet",
    "topic": "Adalet Meslek Etiği",
    "questionText": "[redacted sample question]",
    "options": [
      {
        "label": "A",
        "text": "[redacted]"
      },
      {
        "label": "B",
        "text": "[redacted]"
      },
      {
        "label": "C",
        "text": "[redacted]"
      },
      {
        "label": "D",
        "text": "[redacted]"
      },
      {
        "label": "E",
        "text": "[redacted]"
      }
    ],
    "correctOptionLabel": "E",
    "explanation": null,
    "difficulty": null,
    "devOnly": true
  },
  {
    "externalId": "alibayram-turkish-mmlu:1",
    "sourceName": "alibayram/turkish_mmlu",
    "sourceUrl": "https://huggingface.co/datasets/alibayram/turkish_mmlu",
    "license": "cc-by-nc-nd-4.0",
    "gradeLevel": null,
    "subject": "Adalet",
    "topic": "Adalet Meslek Etiği",
    "questionText": "[redacted sample question]",
    "options": [
      {
        "label": "A",
        "text": "[redacted]"
      },
      {
        "label": "B",
        "text": "[redacted]"
      },
      {
        "label": "C",
        "text": "[redacted]"
      },
      {
        "label": "D",
        "text": "[redacted]"
      },
      {
        "label": "E",
        "text": "[redacted]"
      }
    ],
    "correctOptionLabel": "B",
    "explanation": null,
    "difficulty": null,
    "devOnly": true
  },
  {
    "externalId": "alibayram-turkish-mmlu:2",
    "sourceName": "alibayram/turkish_mmlu",
    "sourceUrl": "https://huggingface.co/datasets/alibayram/turkish_mmlu",
    "license": "cc-by-nc-nd-4.0",
    "gradeLevel": null,
    "subject": "Adalet",
    "topic": "Adalet Meslek Etiği",
    "questionText": "[redacted sample question]",
    "options": [
      {
        "label": "A",
        "text": "[redacted]"
      },
      {
        "label": "B",
        "text": "[redacted]"
      },
      {
        "label": "C",
        "text": "[redacted]"
      },
      {
        "label": "D",
        "text": "[redacted]"
      },
      {
        "label": "E",
        "text": "[redacted]"
      }
    ],
    "correctOptionLabel": "A",
    "explanation": null,
    "difficulty": null,
    "devOnly": true
  },
  {
    "externalId": "alibayram-turkish-mmlu:3",
    "sourceName": "alibayram/turkish_mmlu",
    "sourceUrl": "https://huggingface.co/datasets/alibayram/turkish_mmlu",
    "license": "cc-by-nc-nd-4.0",
    "gradeLevel": null,
    "subject": "Adalet",
    "topic": "Adalet Meslek Etiği",
    "questionText": "[redacted sample question]",
    "options": [
      {
        "label": "A",
        "text": "[redacted]"
      },
      {
        "label": "B",
        "text": "[redacted]"
      },
      {
        "label": "C",
        "text": "[redacted]"
      },
      {
        "label": "D",
        "text": "[redacted]"
      },
      {
        "label": "E",
        "text": "[redacted]"
      }
    ],
    "correctOptionLabel": "E",
    "explanation": null,
    "difficulty": null,
    "devOnly": true
  },
  {
    "externalId": "alibayram-turkish-mmlu:4",
    "sourceName": "alibayram/turkish_mmlu",
    "sourceUrl": "https://huggingface.co/datasets/alibayram/turkish_mmlu",
    "license": "cc-by-nc-nd-4.0",
    "gradeLevel": null,
    "subject": "Adalet",
    "topic": "Adalet Meslek Etiği",
    "questionText": "[redacted sample question]",
    "options": [
      {
        "label": "A",
        "text": "[redacted]"
      },
      {
        "label": "B",
        "text": "[redacted]"
      },
      {
        "label": "C",
        "text": "[redacted]"
      },
      {
        "label": "D",
        "text": "[redacted]"
      },
      {
        "label": "E",
        "text": "[redacted]"
      }
    ],
    "correctOptionLabel": "E",
    "explanation": null,
    "difficulty": null,
    "devOnly": true
  }
]
```

## First 5 Invalid Samples
```json
[]
```
