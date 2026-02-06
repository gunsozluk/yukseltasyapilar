import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="/img_20260117_212000.jpg"
              alt="Yüksel Taş Yapılar"
              className="h-20 w-auto object-contain bg-white p-2 rounded-lg"
            />
            <p className="text-gray-400 leading-relaxed">
              Doğal taş işçiliği ve peyzaj düzenlemesinde kaliteli hizmet anlayışıyla
              Antalya'da faaliyet gösteriyoruz.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-500">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300 inline-block"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300 inline-block"
                >
                  Projelerimiz
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300 inline-block"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-500">Hizmetlerimiz</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Doğal Taş İşçiliği</li>
              <li>Peyzaj Düzenlemesi</li>
              <li>Taş Duvar Kaplama</li>
              <li>Bahçe Tasarımı</li>
              <li>Havuz Kenarı Düzenlemesi</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-500">İletişim Bilgileri</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Telefon</p>
                  <a
                    href="tel:+905331655399"
                    className="text-white hover:text-amber-500 transition-colors duration-300 font-semibold text-lg"
                  >
                    0533 165 53 99
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 text-sm mb-1">E-posta</p>
                  <a
                    href="mailto:info@yuksel-tas.com"
                    className="text-white hover:text-amber-500 transition-colors duration-300"
                  >
                    info@yuksel-tas.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Adres</p>
                  <p className="text-white">Gündoğmuş, Antalya</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Çalışma Saatleri</p>
                  <p className="text-white">Pzt-Cmt: 08:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Yüksel Taş Yapılar. Tüm hakları saklıdır.
            </p>
            <div className="text-gray-400 text-center md:text-right">
              <p className="font-semibold">Mustafa Kemal Yüksel</p>
              <p className="text-sm">İnşaat & Peyzaj Uzmanı</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-white">
            <a
              href="tel:+905331655399"
              className="flex items-center space-x-2 hover:underline font-semibold"
            >
              <Phone size={18} />
              <span>0533 165 53 99</span>
            </a>
            <span className="hidden sm:inline text-white/50">|</span>
            <p className="text-center">
              Ücretsiz Keşif ve Fiyat Teklifi İçin Hemen Arayın!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
