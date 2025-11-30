import { Factory } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const navItems = ['home', 'about', 'services', 'projects', 'contacts'];

  return (
    <footer className="bg-[#1E1E1E] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Factory size={32} className="text-[#F57C00]" />
              <h3 className="text-2xl font-bold">RECOM GROUP</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('premierSolutions')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#F57C00]">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-[#F57C00] transition-colors"
                  >
                    {t(item)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#F57C00]">{t('contactInformation')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{t('sofiaAddress')}</li>
              <li>{t('buildingAddress')}</li>
              <li>
                <a href="tel:0888527137" className="hover:text-[#F57C00] transition-colors">
                  0888 527 137
                </a>
              </li>
              <li>
                <a href="mailto:office@recom.bg" className="hover:text-[#F57C00] transition-colors">
                  office@recom.bg
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Recom Group Ltd. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
