import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="/img_20260117_212000.jpg"
              alt="Yüksel Taş Yapılar"
              className="h-16 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-800 hover:text-amber-500 font-medium transition-colors duration-300"
            >
              Ana Sayfa
            </a>
            <a
              href="#gallery"
              className="text-gray-800 hover:text-amber-500 font-medium transition-colors duration-300"
            >
              Projelerimiz
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-amber-500 font-medium transition-colors duration-300"
            >
              İletişim
            </a>
            <a
              href="tel:+905331655399"
              className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Hemen Ara
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-amber-500 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#home"
              className="block px-3 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-500 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Ana Sayfa
            </a>
            <a
              href="#gallery"
              className="block px-3 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-500 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projelerimiz
            </a>
            <a
              href="#contact"
              className="block px-3 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-500 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </a>
            <a
              href="tel:+905331655399"
              className="block text-center bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Hemen Ara
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
