import { motion } from "framer-motion";
import { ScrollDownButton } from "@/components/ScrollDownButton";

export function PracticeAreas() {
  const areas = [
    { title: "Aile Hukuku", desc: "Boşanma, velayet, nafaka ve mal paylaşımı süreçlerinde uzman destek." },
    { title: "Ticaret Hukuku", desc: "Sözleşmeler, şirketler hukuku ve ticari uyuşmazlıkların çözümü." },
    { title: "İş Hukuku", desc: "İşe iade, kıdem/ihbar tazminatı ve iş kazaları davaları." },
    { title: "Ceza Hukuku", desc: "Soruşturma ve kovuşturma aşamalarında etkin müdafilik." },
    { title: "İcra ve İflas", desc: "Alacakların tahsili, haciz ve icra takip süreçlerinin yürütülmesi." },
    { title: "Gayrimenkul Hukuku", desc: "Kira, tapu iptal/tescil, ortaklığın giderilmesi davaları." },
    { title: "Tazminat Hukuku", desc: "Maddi-manevi tazminat, sigorta uyuşmazlıkları ve trafik kazaları." },
    { title: "Bilişim Hukuku", desc: "KVKK, siber suçlar ve içerik kaldırma süreçleri." },
    { title: "Miras Hukuku", desc: "Miras paylaşımı, tenkis ve vasiyetnamenin iptali davaları." },
  ];

  return (
    <section id="uzmanlik" className="section bg-gradient-to-b from-white to-brand-light/20 dark:from-[#0B0B0B] dark:to-[#0B0B0B] scroll-mt-24 relative pt-12">
      <div className="container pb-24">
        <h2 className="font-serif text-3xl md:text-4xl">Uzmanlık Alanlarımız</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">Kurumsal ve bireysel müvekkillerimize ihtiyaçlarına uygun, sonuç odaklı çözümler sunuyoruz.</p>
        {/* Small scroll cue above cards */}
        <div className="mt-6 flex items-center justify-center" aria-hidden>
          <div className="h-px w-24 bg-brand-gold/60" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mx-2 text-brand-gold">
            <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="h-px w-24 bg-brand-gold/60" />
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div key={a.title} className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="text-xl font-medium">{a.title}</div>
                <div className="h-2 w-2 rounded-full bg-[var(--fg)] group-hover:bg-brand-gold transition-colors" />
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{a.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                Detaylı bilgi
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* Section bottom scroll-down to About */}
        <ScrollDownButton targetId="hakkimizda" />
      </div>
    </section>
  );
}
