import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InquiryForm } from '../types';

const Inquiry = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<InquiryForm>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="inquiry" ref={sectionRef} className="py-24 bg-[#1E1E1E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F57C00] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F57C00] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('startProject')}
          </h2>
          <div className="w-24 h-1 bg-[#F57C00] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            {t('startProjectDesc')}
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-green-500 text-white p-8 rounded-none text-center animate-slideUp">
            <CheckCircle size={64} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{t('thankYou')}</h3>
            <p className="text-lg">{t('thankYouDesc')}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`bg-white p-8 md:p-12 shadow-2xl transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1E1E1E] mb-2 uppercase tracking-wide">
                  {t('fullName')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#F57C00] outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1E1E1E] mb-2 uppercase tracking-wide">
                  {t('phoneNumber')} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#F57C00] outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-[#1E1E1E] mb-2 uppercase tracking-wide">
                {t('emailAddress')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#F57C00] outline-none transition-colors"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-[#1E1E1E] mb-2 uppercase tracking-wide">
                {t('projectDetails')} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#F57C00] outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F57C00] hover:bg-[#E06900] text-white px-8 py-4 text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                t('sending')
              ) : (
                <>
                  {t('sendInquiry')}
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Inquiry;
