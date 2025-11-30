import { useEffect, useRef, useState } from 'react';
import { Award, Users, Building, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const statsData = [
  { icon: Award, value: '15+', labelKey: 'yearsExperience' },
  { icon: Users, value: '500+', labelKey: 'projectsCompleted' },
  { icon: Building, value: '50+', labelKey: 'activeClients' },
  { icon: TrendingUp, value: '100%', labelKey: 'qualityGuarantee' }
];

const About = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt={t('aboutRecom')}
                className="w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#F57C00] -z-10"></div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
              {t('aboutRecom')}
            </h2>
            <div className="w-24 h-1 bg-[#F57C00] mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('aboutText1')}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('aboutText2')}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-[#F5F5F5] p-6 transform transition-all duration-700 hover:bg-[#F57C00] hover:text-white group ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <stat.icon className="mb-3 text-[#F57C00] group-hover:text-white transition-colors" size={32} />
                  <div className="text-3xl font-bold text-[#1E1E1E] group-hover:text-white mb-2 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-white uppercase tracking-wide transition-colors">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
