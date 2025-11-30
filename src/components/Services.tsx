import { useEffect, useRef, useState } from 'react';
import { Factory, Home, DoorOpen, Umbrella, Layers, Building2, Square, MoveUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Home,
  DoorOpen,
  Umbrella,
  Layers,
  Building2,
  Square,
  MoveUpRight
};

const servicesData = [
  { id: 'winter-gardens', icon: 'Home', nameKey: 'winterGardens', descKey: 'winterGardensDesc' },
  { id: 'industrial-halls', icon: 'Factory', nameKey: 'industrialHalls', descKey: 'industrialHallsDesc' },
  { id: 'metal-doors', icon: 'DoorOpen', nameKey: 'metalDoors', descKey: 'metalDoorsDesc' },
  { id: 'canopies', icon: 'Umbrella', nameKey: 'canopies', descKey: 'canopiesDesc' },
  { id: 'hpl-facades', icon: 'Layers', nameKey: 'hplFacades', descKey: 'hplFacadesDesc' },
  { id: 'bond-facades', icon: 'Building2', nameKey: 'bondFacades', descKey: 'bondFacadesDesc' },
  { id: 'ceramic-facades', icon: 'Square', nameKey: 'ceramicFacades', descKey: 'ceramicFacadesDesc' },
  { id: 'metal-staircases', icon: 'MoveUpRight', nameKey: 'metalStaircases', descKey: 'metalStaircasesDesc' }
];

const servicesImages = {
  'winter-gardens': 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  'industrial-halls': 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
  'metal-doors': 'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=800',
  'canopies': 'https://images.pexels.com/photos/681368/pexels-photo-681368.jpeg?auto=compress&cs=tinysrgb&w=800',
  'hpl-facades': 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  'bond-facades': 'https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=800',
  'ceramic-facades': 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800',
  'metal-staircases': 'https://images.pexels.com/photos/1662770/pexels-photo-1662770.jpeg?auto=compress&cs=tinysrgb&w=800'
};

const Services = () => {
  const { t } = useLanguage();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            {t('ourServices')}
          </h2>
          <div className="w-24 h-1 bg-[#F57C00] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('comprehensiveServices')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group bg-white rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  visibleCards.has(index)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={servicesImages[service.id as keyof typeof servicesImages]}
                    alt={t(service.nameKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Icon size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 group-hover:text-[#F57C00] transition-colors">
                    {t(service.nameKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
