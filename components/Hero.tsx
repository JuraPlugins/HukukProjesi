"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollDownButton } from "@/components/ScrollDownButton";

export function Hero() {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
  <section className="section relative pb-20">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-6xl leading-tight"
            >
              Güven, Şeffaflık ve Sonuç Odaklı Hukuk Hizmetleri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600"
            >
              Alkan Hukuk, bireysel ve kurumsal müvekkillerine itina ile hukuki danışmanlık ve dava takibi sunar.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToId("iletisim")}
                  className="btn btn-primary"
                >
                  İletişime Geçin
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToId("uzmanlik")}
                  className="btn btn-primary"
                >
                  Hizmetlerimiz
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToId("hakkimizda")}
                  className="btn btn-primary"
                >
                  Hakkımızda
                </motion.button>
            </motion.div>
            {/* Removed inline scroll-down buttons per request */}
            <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div>
                <div className="text-2xl font-semibold text-black dark:text-white">10+</div>
                Yıl Tecrübe
              </div>
              <div>
                <div className="text-2xl font-semibold text-black dark:text-white">200+</div>
                Dava ve Dosya
              </div>
              <div>
                <div className="text-2xl font-semibold text-black dark:text-white">%98</div>
                Memnuniyet
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="aspect-[4/3] relative rounded-2xl overflow-hidden border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <Image
                src="/images/hero.jpg"
                alt="Adalet terazisi ve tokmak"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Centered bottom scroll-down button */}
      <ScrollDownButton targetId="uzmanlik" floating />
    </section>
  );
}
