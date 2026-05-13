# Question Bank 5k Import Benchmark

- **DB import performed:** yes, local only
- **Import limit:** 5000
- **First run:**
  - 5000 created
  - 25000 options
  - duration ~71s
  - throughput ~70 rows/sec
- **Second run:**
  - 0 created
  - 5000 updated
  - 25000 options
  - duration ~64s
  - throughput ~77 rows/sec
- **Idempotency verified**
- **Full 50k import performed:** no
- **Raw JSONL committed:** no
- **Token/.env committed:** no
- **GradeLevel fallback:**
  Dataset gradeLevel null olduğu için Topic için Unspecified fallback kullanıldı.
- **Risk:**
  50k öncesi batch/transaction optimizasyonu değerlendirilmeli.
- **Next recommendation:**
  50k controlled import öncesi import script performance optimization audit
