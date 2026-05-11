# Question Bank Dataset Normalization

This folder contains scripts to download and normalize public datasets from Hugging Face for the Okul Aklı Question Bank MVP. These scripts are strictly for local development and are not part of the application runtime.

## Turkish MMLU Dataset Spike

This script downloads up to 50,000 valid questions from `alibayram/turkish_mmlu` and normalizes them into JSONL format suitable for local seeding and testing. 

The output is written to `.local-data/question-bank/alibayram-turkish-mmlu-normalized-50k.jsonl`. This directory is explicitly ignored in `.gitignore` to prevent raw/normalized data from leaking into the repository.

### Setup and Usage

You must provide a Hugging Face token with read access to the dataset.

**Windows PowerShell:**
```powershell
$env:HF_TOKEN="BURAYA_TOKEN"
python -m pip install -U datasets pandas pyarrow huggingface_hub
python scripts/question-bank/normalize_hf_turkish_mmlu.py --limit 50000
```

**Linux/macOS:**
```bash
export HF_TOKEN="BURAYA_TOKEN"
python -m pip install -U datasets pandas pyarrow huggingface_hub
python scripts/question-bank/normalize_hf_turkish_mmlu.py --limit 50000
```

### Important Security Note
- **DO NOT** hardcode the `HF_TOKEN` in any script or commit it.
- **DO NOT** commit the `.local-data` directory.
- This script does not interact with the Prisma database or open any endpoints.
