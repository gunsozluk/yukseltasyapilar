import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
                Antalya / Gündoğmuş
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hayalinizdeki
              <span className="text-amber-500"> Taş Yapıyı</span> İnşa Ediyoruz
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Yüksel Taş Yapılar olarak, doğal taş işçiliği ve peyzaj düzenlemesinde
              uzman ekibimizle kaliteli ve estetik projeler sunuyoruz.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-amber-500 flex-shrink-0" size={24} />
                <span className="text-gray-700 text-lg">Profesyonel Taş İşçiliği</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-amber-500 flex-shrink-0" size={24} />
                <span className="text-gray-700 text-lg">Modern Peyzaj Düzenlemesi</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-amber-500 flex-shrink-0" size={24} />
                <span className="text-gray-700 text-lg">Kaliteli ve Güvenilir Hizmet</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg group"
              >
                Projelerimizi İnceleyin
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-gray-800 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg border-2 border-gray-200"
              >
                İletişime Geçin
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Taş Yapı Projesi"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-2xl font-bold">Doğal Taş Duvar Uygulaması</p>
                <p className="text-sm mt-2 opacity-90">Modern mimari ve doğal estetik bir arada</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <CheckCircle className="text-amber-500" size={28} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">100+</p>
                  <p className="text-gray-600 text-sm">Tamamlanan Proje</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
