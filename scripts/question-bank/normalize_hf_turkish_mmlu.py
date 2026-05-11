import os
import sys
import json
import argparse
from datasets import load_dataset

def main():
    parser = argparse.ArgumentParser(description="Normalize Hugging Face turkish_mmlu dataset.")
    parser.add_argument("--limit", type=int, default=50000, help="Maximum number of valid rows to process.")
    args = parser.parse_args()

    hf_token = os.environ.get("HF_TOKEN")
    if not hf_token:
        print("ERROR: HF_TOKEN environment variable is not set.", file=sys.stderr)
        sys.exit(1)

    print("Loading dataset alibayram/turkish_mmlu...", file=sys.stderr)
    try:
        ds = load_dataset("alibayram/turkish_mmlu", split="train", token=hf_token)
    except Exception as e:
        print(f"ERROR: Failed to load dataset. {e}", file=sys.stderr)
        sys.exit(1)

    output_dir = ".local-data/question-bank"
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, "alibayram-turkish-mmlu-normalized-50k.jsonl")

    total_rows_seen = 0
    valid_rows_written = 0
    invalid_rows = 0
    subjects_count = {}
    topics_count = {}
    first_five_samples = []
    rejected_reason_summary = {}

    def reject(reason):
        nonlocal invalid_rows
        invalid_rows += 1
        rejected_reason_summary[reason] = rejected_reason_summary.get(reason, 0) + 1

    with open(output_path, "w", encoding="utf-8") as f:
        for row in ds:
            total_rows_seen += 1
            if valid_rows_written >= args.limit:
                break
            
            # Validation
            soru = row.get("soru")
            if not soru or not isinstance(soru, str) or not soru.strip():
                reject("empty_question")
                continue
                
            secenekler = row.get("secenekler")
            if not isinstance(secenekler, list):
                reject("options_not_list")
                continue
                
            if len(secenekler) < 2:
                reject("options_less_than_2")
                continue
                
            empty_option = False
            for opt in secenekler:
                if not isinstance(opt, str) or not opt.strip():
                    empty_option = True
                    break
            if empty_option:
                reject("empty_option_text")
                continue
                
            cevap = row.get("cevap")
            if not isinstance(cevap, int):
                reject("answer_not_int")
                continue
                
            if cevap < 0 or cevap >= len(secenekler):
                reject("answer_out_of_bounds")
                continue

            # Mapping
            bolum = row.get("bolum", "")
            konu = row.get("konu", "")
            aciklama = row.get("aciklama", None)

            # Option labels A, B, C, D, E...
            labels = ["A", "B", "C", "D", "E", "F", "G"]
            options_mapped = []
            for i, opt in enumerate(secenekler):
                label = labels[i] if i < len(labels) else str(i)
                options_mapped.append({"label": label, "text": opt})
                
            correct_label = labels[cevap] if cevap < len(labels) else str(cevap)

            normalized = {
                "externalId": f"alibayram-turkish-mmlu:{total_rows_seen-1}",
                "sourceName": "alibayram/turkish_mmlu",
                "sourceUrl": "https://huggingface.co/datasets/alibayram/turkish_mmlu",
                "license": "cc-by-nc-nd-4.0",
                "gradeLevel": None,
                "subject": bolum,
                "topic": konu,
                "questionText": soru,
                "options": options_mapped,
                "correctOptionLabel": correct_label,
                "explanation": aciklama,
                "difficulty": None,
                "devOnly": True
            }

            # Write to file
            f.write(json.dumps(normalized, ensure_ascii=False) + "\n")
            valid_rows_written += 1

            # Stats
            subjects_count[bolum] = subjects_count.get(bolum, 0) + 1
            topics_count[konu] = topics_count.get(konu, 0) + 1
            
            if len(first_five_samples) < 5:
                first_five_samples.append(normalized)

    print("\n--- SCRIPT REPORT ---")
    print(f"totalRowsSeen: {total_rows_seen}")
    print(f"validRowsWritten: {valid_rows_written}")
    print(f"invalidRows: {invalid_rows}")
    print(f"subjectsCount: {len(subjects_count)}")
    print(f"topicsCount: {len(topics_count)}")
    print(f"rejectedReasonSummary: {json.dumps(rejected_reason_summary)}")
    print(f"outputPath: {output_path}")
    print("firstFiveSamples:")
    print(json.dumps(first_five_samples, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
