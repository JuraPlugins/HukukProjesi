import { Hero } from "@/components/Hero";
import { PracticeAreas } from "@/components/PracticeAreas";
import { FirmValues } from "@/components/FirmValues";
import { ContactTeaser } from "@/components/ContactTeaser";
import { ScrollDownButton } from "@/components/ScrollDownButton";

export default function HomePage() {
  return (
    <>
      <Hero />
  <PracticeAreas />
      {/* About section before firm values */}
      <section id="hakkimizda" className="section scroll-mt-24">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Hakkımızda</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Alkan Hukuk, müvekkillerinin güvenini temel alan, şeffaflık ve gizliliği esas kabul eden bir hukuk bürosudur.
            Her dosyada titiz bir hazırlık süreci yürütür, hukuki belirsizliği sadeleştirerek anlaşılır ve uygulanabilir çözümler üretiriz.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Aile, ticaret, iş, ceza, icra-iflas ve gayrimenkul başta olmak üzere geniş bir alanda danışmanlık ve dava takibi hizmeti sunarız.
            Amacımız, ihtiyaç duyduğunuz her an yanınızda olarak, somut veriler ve güçlü bir stratejiyle en doğru sonuca ulaşmaktır.
          </p>
        </div>
  </section>
      <FirmValues />
  <ContactTeaser />
    </>
  );
}
