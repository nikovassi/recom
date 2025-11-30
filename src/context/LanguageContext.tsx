import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'BG' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored as Language) || 'EN';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.EN] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const translations = {
  EN: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    contacts: 'Contacts',
    requestQuote: 'Request a Quote',
    buildingFuture: 'Building the',
    futureOfIndustry: 'Future of Industry',
    premierSolutions: 'Premier industrial construction and metal fabrication solutions across Bulgaria',
    ourServices: 'Our Services',
    comprehensiveServices: 'Comprehensive industrial construction solutions delivered with precision and expertise',
    winterGardens: 'Winter Gardens',
    winterGardensDesc: 'Premium glass structures that seamlessly blend indoor comfort with outdoor beauty, creating elegant year-round living spaces.',
    industrialHalls: 'Industrial Halls',
    industrialHallsDesc: 'Heavy-duty steel construction for manufacturing facilities, warehouses, and large-scale industrial operations.',
    metalDoors: 'Metal Doors & Fences',
    metalDoorsDesc: 'High-security entrance solutions and perimeter protection with modern aesthetics and robust engineering.',
    canopies: 'Canopies & Shelters',
    canopiesDesc: 'Weather-resistant coverage solutions for parking, entrances, and outdoor areas with architectural appeal.',
    hplFacades: 'HPL Facades & Cladding',
    hplFacadesDesc: 'High-pressure laminate panels offering superior durability, weather resistance, and contemporary design versatility.',
    bondFacades: 'Bond Facades & Cladding',
    bondFacadesDesc: 'Advanced composite panel systems delivering exceptional thermal performance and striking visual impact.',
    ceramicFacades: 'Ceramic (Laminam) Facades',
    ceramicFacadesDesc: 'Premium large-format ceramic surfaces with outstanding aesthetics, durability, and minimal maintenance requirements.',
    metalStaircases: 'Metal Staircases & Railings',
    metalStaircasesDesc: 'Custom-fabricated steel stairs and railings combining structural integrity with architectural elegance.',
    aboutRecom: 'About Recom Group Ltd.',
    aboutText1: 'Since our establishment, Recom Group Ltd. has been at the forefront of industrial construction excellence in Bulgaria. We specialize in comprehensive metal fabrication, structural engineering, and architectural solutions.',
    aboutText2: 'Our team of experienced engineers and craftsmen deliver turnkey projects from initial design through final installation, ensuring every detail meets the highest standards of quality and precision.',
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Completed',
    activeClients: 'Active Clients',
    qualityGuarantee: 'Quality Guarantee',
    featuredProjects: 'Featured Projects',
    projectsExplore: 'Explore our portfolio of successfully delivered industrial construction projects',
    modernIndustrial: 'Modern Industrial Facility',
    modernIndustrialDesc: 'Complete steel structure fabrication and installation for a 5,000 sqm manufacturing facility with crane systems.',
    luxuryWinter: 'Luxury Winter Garden',
    luxuryWinterDesc: 'Premium glass structure with automated climate control for a residential property in Sofia.',
    corporateHpl: 'Corporate HPL Facade',
    corporateHplDesc: 'Contemporary facade renovation using high-pressure laminate panels for a commercial office building.',
    industrialSecurity: 'Industrial Security Gates',
    industrialSecurityDesc: 'Custom security entrance system with automated access control for logistics center.',
    ceramicFacade: 'Ceramic Facade System',
    ceramicFacadeDesc: 'Large-format Laminam ceramic installation on high-rise residential development.',
    parkingCanopy: 'Parking Canopy Structure',
    parkingCanopyDesc: 'Multi-level steel canopy system protecting 200+ parking spaces at business park.',
    startProject: 'Start Your Project',
    startProjectDesc: 'Get in touch with our team to discuss your industrial construction needs',
    fullName: 'Full Name',
    phoneNumber: 'Phone Number',
    emailAddress: 'Email Address',
    projectDetails: 'Project Details',
    sendInquiry: 'Send Inquiry',
    sending: 'Sending...',
    thankYou: 'Thank You!',
    thankYouDesc: 'We\'ll get back to you within 24 hours.',
    contactUs: 'Contact Us',
    contactDesc: 'Reach out to discuss your industrial construction project',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    sofiaAddress: 'Sofia, Krasna Polyana District',
    buildingAddress: 'Bl. 15, Entrance A, Floor 4',
    viewDetails: 'View Details',
    allRightsReserved: 'All rights reserved.',
    quickLinks: 'Quick Links',
    contactInformation: 'Contact Information',
  },
  BG: {
    home: 'Начало',
    about: 'За нас',
    services: 'Услуги',
    projects: 'Проекти',
    contacts: 'Контакти',
    requestQuote: 'Поискай оферта',
    buildingFuture: 'Изграждаме',
    futureOfIndustry: 'Бъдещето на индустрията',
    premierSolutions: 'Висококачествени решения за индустриално строителство и металообработка в България',
    ourServices: 'Нашите услуги',
    comprehensiveServices: 'Комплексни решения за индустриално строителство, доставени с прецизност и експертиза',
    winterGardens: 'Зимни градини',
    winterGardensDesc: 'Премиум стъклени конструкции, които гладко комбинират вътрешния комфорт с външната красота, създавайки елегантни преживяния през цялата година.',
    industrialHalls: 'Индустриални халета',
    industrialHallsDesc: 'Тежко стоманено строителство за производствени съоръжения, складове и крупномащабни индустриални операции.',
    metalDoors: 'Метални врати и огради',
    metalDoorsDesc: 'Решения за високо сигурни входове и периметрална защита с модерна естетика и надежно инженерство.',
    canopies: 'Навесни конструкции и прикрития',
    canopiesDesc: 'Решения за защита от неблагоприятни метеорни условия за паркинги, входове и външни пространства с архитектурна привлекателност.',
    hplFacades: 'HPL фасади и облицовки',
    hplFacadesDesc: 'Панели от висок натиск, предлагащи превъзходна издържливост, устойчивост на време и разнообразие на дизайна.',
    bondFacades: 'Bond фасади и облицовки',
    bondFacadesDesc: 'Напредналисистеми от композитни панели с изключително топлинна ефективност и поразително визуално въздействие.',
    ceramicFacades: 'Керамични (Laminam) фасади',
    ceramicFacadesDesc: 'Премиум керамични повърхности с голям формат, извънредна естетика, издържливост и минимални нужди за поддръжка.',
    metalStaircases: 'Метални стълби и парапети',
    metalStaircasesDesc: 'Персонализирани стоманени стълби и парапети, комбиниращи конструкционната интегралност с архитектурната елегантност.',
    aboutRecom: 'За Recom Group Ltd.',
    aboutText1: 'От своето основаване Recom Group Ltd. е в авангарда на индустриалното строителство в България. Специализираме се в комплексна металообработка, конструкционно инженерство и архитектурни решения.',
    aboutText2: 'Нашият екип от опитни инженери и майстори доставя проекти от начално проектиране до окончателна инсталация, гарантирайки, че всеки детайл отговаря на най-високите стандарти на качество и прецизност.',
    yearsExperience: 'Години опит',
    projectsCompleted: 'Завършени проекти',
    activeClients: 'Активни клиенти',
    qualityGuarantee: 'Гаранция за качество',
    featuredProjects: 'Избрани проекти',
    projectsExplore: 'Разгледайте портфолиото на нашите успешно завършени проекти за индустриално строителство',
    modernIndustrial: 'Модерно индустриално съоръжение',
    modernIndustrialDesc: 'Пълна фабрикация и инсталация на стоманена конструкция за производствено съоръжение с площ 5000 кв.м с кранови системи.',
    luxuryWinter: 'Луксозна зимна градина',
    luxuryWinterDesc: 'Премиум стъклена конструкция с автоматизирана система за контрол на климата за жилищен имот в София.',
    corporateHpl: 'Корпоративна HPL фасада',
    corporateHplDesc: 'Съвременна реновация на фасада с използване на панели от висок натиск за комерсиално офис сграда.',
    industrialSecurity: 'Индустриални охранни врати',
    industrialSecurityDesc: 'Персонализирана система за охранен вход с автоматизиран контрол на достъпа за логистичен център.',
    ceramicFacade: 'Система от керамични фасади',
    ceramicFacadeDesc: 'Монтаж на керамични плочи Laminam с голям формат на жилищна сграда с многоетажност.',
    parkingCanopy: 'Структура на паркинга на навес',
    parkingCanopyDesc: 'Многостепенна стоманена навесна система, защитаваща над 200 паркоместа на бизнес парк.',
    startProject: 'Начнете вашия проект',
    startProjectDesc: 'Свържете се с нашия екип, за да обсудите нуждите на вашия индустриален проект',
    fullName: 'Пълно име',
    phoneNumber: 'Телефонен номер',
    emailAddress: 'Имейл адрес',
    projectDetails: 'Детайли на проекта',
    sendInquiry: 'Изпрати запитване',
    sending: 'Изпращане...',
    thankYou: 'Благодарим!',
    thankYouDesc: 'Ще се свържем с вас в течение на 24 часа.',
    contactUs: 'Свържете се с нас',
    contactDesc: 'Свържете се, за да обсудите вашия индустриален конструкционен проект',
    address: 'Адрес',
    phone: 'Телефон',
    email: 'Имейл',
    sofiaAddress: 'София, квартал Красна поляна',
    buildingAddress: 'Бл. 15, Вход А, Етаж 4',
    viewDetails: 'Виж детайли',
    allRightsReserved: 'Всички права запазени.',
    quickLinks: 'Бързи връзки',
    contactInformation: 'Контактна информация',
  }
};
