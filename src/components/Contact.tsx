import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contacts" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            {t('contactUs')}
          </h2>
          <div className="w-24 h-1 bg-[#F57C00] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contactDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F57C00] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">{t('address')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('sofiaAddress')}<br />
              {t('buildingAddress')}
            </p>
          </div>

          <div className="bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F57C00] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">{t('phone')}</h3>
            <a href="tel:0888527137" className="text-gray-600 hover:text-[#F57C00] transition-colors text-lg">
              0888 527 137
            </a>
          </div>

          <div className="bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F57C00] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">{t('email')}</h3>
            <a href="mailto:office@recom.bg" className="text-gray-600 hover:text-[#F57C00] transition-colors text-lg">
              office@recom.bg
            </a>
          </div>
        </div>

        <div className="bg-white p-8 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.5420892864797!2d23.3786!3d42.6977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQxJzUxLjciTiAyM8KwMjInNDMuMCJF!5e0!3m2!1sen!2sbg!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
