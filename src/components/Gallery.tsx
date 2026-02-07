import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Project {
  const COMPLETED_PROJECT_COUNT = 600;
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Villa Bahçe Peyzaj Düzenlemesi',
    description: 'Modern villa için özel tasarlanmış doğal taş peyzaj projesi',
    category: 'Peyzaj',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Bu projede müşterimizin villası için kapsamlı bir peyzaj düzenlemesi gerçekleştirdik. Doğal taş yürüyüş yolları, dekoratif taş duvarlar ve modern bahçe aydınlatması ile estetik ve fonksiyonel bir dış mekan oluşturduk. Proje 45 gün içinde tamamlandı.'
  },
  {
    id: 2,
    title: 'Doğal Taş Duvar Kaplama',
    description: 'Rustik görünümlü doğal taş ile duvar kaplama uygulaması',
    category: 'Taş İşçiliği',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Özel olarak seçilmiş doğal taşlarla gerçekleştirdiğimiz bu duvar kaplama projesi, yapıya hem estetik hem de dayanıklılık kazandırdı. Her taş özenle yerleştirildi ve modern mimari ile doğal güzellik bir araya getirildi. Isı yalıtımı özelliği de sağlandı.'
  },
  {
    id: 3,
    title: 'Havuz Kenarı Taş Döşeme',
    description: 'Kaymazlık özellikli doğal taş ile havuz çevresi düzenlemesi',
    category: 'Peyzaj & Taş',
    image: 'https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Havuz kenarları için özel olarak seçilen kaymaz özellikli doğal taşlarla güvenli ve şık bir alan oluşturduk. Su ile uyumlu, UV dayanımlı taşlar kullanıldı. Drenaj sistemi ile birlikte tasarlanan proje, hem güvenli hem de bakımı kolay bir çözüm sunuyor.'
  },
  {
    id: 4,
    title: 'Taş Bahçe Duvarı',
    description: 'Dekoratif ve fonksiyonel taş bahçe duvarı yapımı',
    category: 'Taş İşçiliği',
    image: 'https://images.pexels.com/photos/2510067/pexels-photo-2510067.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Bahçe sınırlarını belirlemek ve estetik bir görünüm kazandırmak için inşa ettiğimiz taş duvar projesi. Yerel taşlar kullanılarak doğal çevre ile uyumlu bir tasarım oluşturuldu. Duvar yapımında depreme dayanıklı özel teknikler uygulandı.'
  },
  {
    id: 5,
    title: 'Bahçe Yürüyüş Yolu',
    description: 'Doğal taş ile estetik bahçe yürüyüş yolu tasarımı',
    category: 'Peyzaj',
    image: 'https://images.pexels.com/photos/1438844/pexels-photo-1438844.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Bahçenizde dolaşmayı keyifli hale getiren doğal taş yürüyüş yolu projesi. Düzensiz biçimli doğal taşlar kullanılarak organik bir görünüm sağlandı. Su geçirgenliği yüksek malzemeler ile yağmur suyu birikimi önlendi.'
  },
  {
    id: 6,
    title: 'Teras Taş Kaplama',
    description: 'Modern teras için özel kesim doğal taş uygulama',
    category: 'Taş İşçiliği',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Teras alanı için özel olarak kesilen ve işlenen kaliteli doğal taşlarla yapılan zemin kaplama projesi. Renk tonları özenle seçilerek modern ve şık bir görünüm elde edildi. Anti-statik ve kaymaz yüzey özellikleri ile güvenli kullanım sağlandı.'
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Portfolyo
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Tamamlanan Projelerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  {COMPLETED_PROJECT_COUNT}+ başarılı proje ile doğal taş ve peyzaj alanında güven inşa ediyoruz
</p>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden group">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {currentProject.category}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-amber-500 font-semibold text-sm">
                    Proje {currentIndex + 1} / {projects.length}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {currentProject.title}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Proje Detayları</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {currentProject.details}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <button
                    onClick={prevSlide}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label="Önceki proje"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <div className="flex space-x-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'w-8 bg-amber-500'
                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`${index + 1}. projeye git`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label="Sonraki proje"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
            >
              Sizin İçin de Proje Yapalım
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
