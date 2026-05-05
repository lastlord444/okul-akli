# Okul Aklı - AI Agent Sözleşmesi

Bu repo AI agent kontrollü geliştirilir. Her AI ajanı (Roo, Antigravity, Cline, GPT vb.) çalışmaya başlamadan önce zorunlu olarak şu dosyaları okumakla mükelleftir:

1. `.project-os/AI_OPERATING_CONTRACT.md` (Ana Proje ve Çalışma Sözleşmesi)
2. `.project-os/protocols/STARTUP_PROTOCOL.md` (Oturum Başlangıç Protokolü)

## Kritik Kurallar:
- **Kodlamadan Önce 4 Başlık Üret:** Repo truth summary, Domain ownership confirmation, File change plan, Risks.
- **Protected Core:** Yetki, auth, tenant, payment gibi korunan çekirdek alanlara izinsiz dokunulamaz.
- **Test ve Kanıt:** Test yoksa veya drift audit yapılmadıysa başarı iddiasında bulunulamaz.
- **Gerçeklik (Repo Truth):** Ajanın ürettiği rapor değil, reponun gerçeği esastır.
- **Scope Creep Yasak:** Görev kapsamı dışına çıkılamaz, "madem buradayım" diyerek refactor yapılamaz.
- **Hafıza:** İşlemlerden sonra `session-handoff.md` ve ilgili memory dosyaları güncellenmelidir.
