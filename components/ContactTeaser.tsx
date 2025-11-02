"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ContactTeaser() {
  return (
    <section id="iletisim" className="section scroll-mt-24">
      <div className="container">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 bg-white dark:bg-neutral-900">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl">Sorunuz mu var? Yanınızdayız.</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">İlk danışma için randevu talep edin; dosyanızı birlikte değerlendirelim.</p>
            </div>
            <div className="shrink-0">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("randevu-formu")?.scrollIntoView({ behavior: "smooth" })}
                className="btn btn-primary"
              >
                Randevu Alın
              </motion.button>
            </div>
          </div>
          {/* Contact details */}
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="text-sm text-gray-500">Çalışma Saatleri</div>
              <div className="mt-2 text-gray-800 dark:text-gray-200">
                <div>Hafta içi: 09:00 – 18:00</div>
                <div>Cumartesi: 10:00 – 14:00</div>
                <div>Pazar: Kapalı</div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5">
              <div className="text-sm text-gray-500 dark:text-gray-400">Adres</div>
              <div className="mt-2 text-gray-800 dark:text-gray-200">
                <div>Alkan Hukuk Bürosu</div>
                <div>Örnek Mah. Adalet Cad. No:10 D:5</div>
                <div>İstanbul</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905555555555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=Alkan%20Hukuk%20B%C3%BCrosu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  Google Maps
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
              <iframe
                title="Harita"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24312.650000000003!2d28.9795306!3d41.0151376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1str!2str!4v0000000000000"
              />
            </div>
          </div>
          {/* optional anchor target for smooth scroll CTA */}
          <div id="randevu-formu" className="mt-10">
            {/* Buraya istersen ContactForm'u ekleyebiliriz */}
          </div>
        </div>
      </div>
    </section>
  );
}
