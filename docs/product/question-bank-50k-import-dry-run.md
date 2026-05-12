# Question Bank 50k Import Dry-Run Report

## Overview
- **Total Rows Seen**: 50000
- **Valid Rows**: 35487
- **Invalid Rows**: 14513
- **Duplicate externalId count**: 0
- **Duplicate questionText count**: 14513

## Aggregations (from valid rows)

### Option Count Distribution
- 5 options: 35487

### Correct Label Distribution
- E: 7207
- B: 6932
- A: 7340
- C: 7031
- D: 6977

### Top 20 Subjects
- **Adalet**: 29413
- **Bankacılık ve Sigortacılık**: 6074

### Top 20 Topics
- **Adalet > İngilizce II**: 1776
- **Adalet > İnsan Hakları ve Kamu Özgürlükleri**: 1377
- **Adalet > Temel Bilgi Teknolojileri II**: 1197
- **Adalet > Ticaret Hukuku**: 1097
- **Adalet > Ulusal Yargı Ağı Projesi II**: 1046
- **Adalet > Medeni Hukuk II**: 998
- **Adalet > İngilizce I**: 993
- **Adalet > Memur Hukuku**: 926
- **Adalet > Büro Teknolojileri**: 925
- **Adalet > Türk Dili II**: 902
- **Adalet > Atatürk İlke ve İnkilap Tarihi II**: 895
- **Adalet > Ulusal Yargı Ağı Projesi I**: 871
- **Adalet > Damga Vergisi ve Harçlar Bilgisi**: 864
- **Adalet > Medeni Hukuk I**: 836
- **Adalet > Medeni Usul Hukuku**: 836
- **Adalet > Temel Bilgi Teknolojileri I**: 833
- **Adalet > İdari Yargı**: 828
- **Adalet > Atatürk İlkeleri ve İnkilap Tarihi I**: 823
- **Adalet > Türk Dili I**: 780
- **Adalet > İdare Hukukuna Giriş**: 774

## Rejected Reason Summary (across all rows)
- **Duplicate questionText**: 14513

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
    "questionText": "Katma Protokol’de düzenlenen temel konular arasında aşağıdakilerden hangisi yer almaz?",
    "options": [
      {
        "label": "A",
        "text": "İş gücünün serbest dolaşımı"
      },
      {
        "label": "B",
        "text": "Yabancı sermaye"
      },
      {
        "label": "C",
        "text": "Yerleşme serbestisi"
      },
      {
        "label": "D",
        "text": "Rekabet ve devlet yardımları"
      },
      {
        "label": "E",
        "text": "Siyasal birlik"
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
    "questionText": "Ankara Anlaşması’nın temel ve nihai amacı aşağıdakilerden hangisidir?",
    "options": [
      {
        "label": "A",
        "text": "Türkiye’yi siyasi olarak güçlendirmek"
      },
      {
        "label": "B",
        "text": "Türkiye’nin Avrupa Topluluğu’na entegras-yonunu sağlamak"
      },
      {
        "label": "C",
        "text": "Kültürel işbirliğini geliştirmek"
      },
      {
        "label": "D",
        "text": "Türkiye açısından güvenliği artırmak"
      },
      {
        "label": "E",
        "text": "Taraflar arasında ticari işbirliğini sağlamak"
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
    "questionText": "Türkiye-AB Ortaklığı’nda kömür ve çelik ürünleri aşağıdakilerden hangisi kapsamında işlem görür?",
    "options": [
      {
        "label": "A",
        "text": "Serbest ticaret anlaşması"
      },
      {
        "label": "B",
        "text": "Entegrasyon rejimi"
      },
      {
        "label": "C",
        "text": "Denetim rejimi"
      },
      {
        "label": "D",
        "text": "Gümrük birliği rejimi"
      },
      {
        "label": "E",
        "text": "Tercihli ticaret anlaşması"
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
    "questionText": "Aşağıdakilerden hangisi Gümrük Birliği’nin dinamik etkileri arasında yer almaz?",
    "options": [
      {
        "label": "A",
        "text": "Teknolojik ilerleme etkisi"
      },
      {
        "label": "B",
        "text": "Ölçek ekonomileri etkisi"
      },
      {
        "label": "C",
        "text": "Dışsal ekonomiler etkisi"
      },
      {
        "label": "D",
        "text": "Yatırımları özendirici etki"
      },
      {
        "label": "E",
        "text": "Ticaret yaratıcı etki"
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
    "questionText": "Aşağıdakilerden hangisi Gümrük Birliği’ne ör-nek oluşturmaz?",
    "options": [
      {
        "label": "A",
        "text": "Andean Topluluğu"
      },
      {
        "label": "B",
        "text": "Doğu Afrika Topluluğu"
      },
      {
        "label": "C",
        "text": "AB-San Marino"
      },
      {
        "label": "D",
        "text": "İsviçre-Lihtenştayn"
      },
      {
        "label": "E",
        "text": "EFTA"
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
[
  {
    "data": {
      "externalId": "alibayram-turkish-mmlu:55",
      "sourceName": "alibayram/turkish_mmlu",
      "sourceUrl": "https://huggingface.co/datasets/alibayram/turkish_mmlu",
      "license": "cc-by-nc-nd-4.0",
      "gradeLevel": null,
      "subject": "Adalet",
      "topic": "Adalet Meslek Etiği",
      "questionText": "Aşağıdakilerden hangisi hisse senedi değer kavramlarından biri değildir?",
      "options": [
        {
          "label": "A",
          "text": "Tadilat değeri"
        },
        {
          "label": "B",
          "text": "işleyen teşebbüs değeri"
        },
        {
          "label": "C",
          "text": "Tasfiye değeri"
        },
        {
          "label": "D",
          "text": "Piyasa değeri"
        },
        {
          "label": "E",
          "text": "Defter değeri "
        }
      ],
      "correctOptionLabel": "A",
      "explanation": null,
      "difficulty": null,
      "devOnly": true
    },
    "reasons": [
      "Duplicate questionText"
    ]
  },
  {
    "data": {
      "externalId": "alibayram-turkish-mmlu:243",
      "sourceName": "alibayram/turkish_mmlu",
      "sourceUrl": "https://huggingface.co/datasets/alibayram/turkish_mmlu",
      "license": "cc-by-nc-nd-4.0",
      "gradeLevel": null,
      "subject": "Adalet",
      "topic": "Adalet Meslek Etiği",
      "questionText": "Aşağıdakilerden hangisi hakkaniyete uygun yargılanma hakkının unsurlarından biri değildir?",
      "options": [
        {
          "label": "A",
          "text": "Susma hakkı"
        },
        {
          "label": "B",
          "text": "Avukat ile temsil hakkı"
        },
        {
          "label": "C",
          "text": "Yargıya müdahale edilmesi"
        },
        {
          "label": "D",
          "text": "Gerekçeli karar hakkı"
        },
        {
          "label": "E",
          "text": "Duruşmada bulunma hakkı"
        }
      ],
      "correctOptionLabel": "C",
      "explanation": null,
      "difficulty": null,
      "devOnly": true
    },
    "reasons": [
      "Duplicate questionText"
    ]
  },
  {
    "data": {
      "externalId": "alibayram-turkish-mmlu:332",
      "sourceName": "alibayram/turkish_mmlu",
      "sourceUrl": "https://huggingface.co/datasets/alibayram/turkish_mmlu",
      "license": "cc-by-nc-nd-4.0",
      "gradeLevel": null,
      "subject": "Adalet",
      "topic": "Adalet Meslek Etiği",
      "questionText": "Aşağıdakilerden hangisi birinci düzey gerekçelendirme sınıflarından biridir?",
      "options": [
        {
          "label": "A",
          "text": "Sonuçları dikkate alma"
        },
        {
          "label": "B",
          "text": "Ödeve uygun eylemde bulunma"
        },
        {
          "label": "C",
          "text": "Kendi çıkarı peşinde koşma"
        },
        {
          "label": "D",
          "text": "Duygularla gerekçelendirme"
        },
        {
          "label": "E",
          "text": "Erdemli olma"
        }
      ],
      "correctOptionLabel": "D",
      "explanation": null,
      "difficulty": null,
      "devOnly": true
    },
    "reasons": [
      "Duplicate questionText"
    ]
  },
  {
    "data": {
      "externalId": "alibayram-turkish-mmlu:342",
      "sourceName": "alibayram/turkish_mmlu",
      "sourceUrl": "https://huggingface.co/datasets/alibayram/turkish_mmlu",
      "license": "cc-by-nc-nd-4.0",
      "gradeLevel": null,
      "subject": "Adalet",
      "topic": "Adalet Meslek Etiği",
      "questionText": "Aşağıdakilerden hangisi hakkaniyete uygun yargılanma hakkının unsurlarından biri değildir?",
      "options": [
        {
          "label": "A",
          "text": "Susma hakkı"
        },
        {
          "label": "B",
          "text": "Duruşmada bulunma hakkı"
        },
        {
          "label": "C",
          "text": "Avukat ile temsil hakkı"
        },
        {
          "label": "D",
          "text": "Gerekçeli karar hakkı"
        },
        {
          "label": "E",
          "text": "Makul sürede yargılanma"
        }
      ],
      "correctOptionLabel": "E",
      "explanation": null,
      "difficulty": null,
      "devOnly": true
    },
    "reasons": [
      "Duplicate questionText"
    ]
  },
  {
    "data": {
      "externalId": "alibayram-turkish-mmlu:373",
      "sourceName": "alibayram/turkish_mmlu",
      "sourceUrl": "https://huggingface.co/datasets/alibayram/turkish_mmlu",
      "license": "cc-by-nc-nd-4.0",
      "gradeLevel": null,
      "subject": "Adalet",
      "topic": "Adalet Meslek Etiği",
      "questionText": "Aşağıdakilerden hangisi iyinin gerçekleştirilmesiyle ilgili görüşlerden biridir?",
      "options": [
        {
          "label": "A",
          "text": "Hedonizm"
        },
        {
          "label": "B",
          "text": "Kültürel görelilik"
        },
        {
          "label": "C",
          "text": "Belirlenimcilik"
        },
        {
          "label": "D",
          "text": "Öznelcilik"
        },
        {
          "label": "E",
          "text": "Evrenselcilik"
        }
      ],
      "correctOptionLabel": "A",
      "explanation": null,
      "difficulty": null,
      "devOnly": true
    },
    "reasons": [
      "Duplicate questionText"
    ]
  }
]
```
