import { ScrollDownButton } from "@/components/ScrollDownButton";

export function FirmValues() {
  const values = [
    { title: "Şeffaflık", desc: "Sürecin her aşamasında açık iletişim ve bilgilendirme." },
    { title: "Gizlilik", desc: "Müvekkil bilgilerinin hassasiyetle korunması." },
    { title: "Titizlik", desc: "Her dosyada ayrıntılara önem veren sistemli çalışma." },
  ];
  return (
    <section className="section pt-4">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map(v => (
            <div key={v.title} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-neutral-900">
              <div className="text-lg font-medium">{v.title}</div>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
        {/* Thin gold separator placed below the values */}
        <div className="mx-auto mt-8 h-px w-24 bg-brand-gold/70" />
        {/* Scroll down button to İletişim below separator */}
        <ScrollDownButton targetId="iletisim" label="Bize Ulaşın" />
      </div>
    </section>
  );
}
