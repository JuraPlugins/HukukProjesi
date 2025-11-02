import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-24">
      <div className="container py-10 text-sm text-gray-600 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <div className="font-serif text-lg text-black">Alkan Hukuk</div>
          <div className="text-gray-500">Avukatlık ve Danışmanlık</div>
        </div>
        <nav className="flex gap-6">
          <Link href="#hakkimizda" className="hover:text-black">Hakkımızda</Link>
          <Link href="#uzmanlik" className="hover:text-black">Hizmetler</Link>
          <Link href="#iletisim" className="hover:text-black">İletişim</Link>
        </nav>
        <div className="text-gray-400">© {new Date().getFullYear()} Alkan Hukuk</div>
      </div>
    </footer>
  );
}
