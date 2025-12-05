import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToInquiry = () => {
    const element = document.getElementById('inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0e27]">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E]/95 via-[#1E1E1E]/75 to-[#1E1E1E]/60"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#F57C00] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-orb-1"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#007BFF] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-orb-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#F57C00] rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-glow"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E1E1E]/20 to-[#1E1E1E]/40"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F57C00] to-transparent opacity-0 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-2 flex items-center gap-3 md:gap-0">
            <div className="hidden md:block w-1 h-12 bg-gradient-to-b from-[#F57C00] to-transparent"></div>
            <span className="text-[#F57C00] font-bold text-sm uppercase tracking-widest">Индустриално строителство</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            {t('buildingFuture')}<br />
            <span className="bg-gradient-to-r from-[#F57C00] via-[#FFB000] to-[#F57C00] text-transparent bg-clip-text animate-pulse">
              {t('futureOfIndustry')}
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-200 mb-10 max-w-2xl transform transition-all duration-1000 delay-300 leading-relaxed ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {t('premierSolutions')}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <button
              onClick={scrollToInquiry}
              className="group bg-gradient-to-r from-[#F57C00] to-[#E06900] hover:from-[#FFB000] hover:to-[#F57C00] text-white px-8 py-4 text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative">{t('requestQuote')}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform relative" size={20} />
            </button>

            <button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group border-2 border-[#F57C00] text-white px-8 py-4 text-lg font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-[#F57C00] hover:text-[#1E1E1E] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#F57C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <span className="relative">Научи повече</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#F57C00] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#F57C00] rounded-full animate-float"></div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#F57C00] rounded-full opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#007BFF] rounded-full opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#F57C00] rounded-full opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#007BFF] rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
