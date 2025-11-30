import { useState, useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'modernIndustrial',
    category: 'Industrial Halls',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'modernIndustrialDesc'
  },
  {
    id: '2',
    title: 'luxuryWinter',
    category: 'Winter Gardens',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'luxuryWinterDesc'
  },
  {
    id: '3',
    title: 'corporateHpl',
    category: 'HPL Facades',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'corporateHplDesc'
  },
  {
    id: '4',
    title: 'industrialSecurity',
    category: 'Metal Doors & Fences',
    image: 'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'industrialSecurityDesc'
  },
  {
    id: '5',
    title: 'ceramicFacade',
    category: 'Ceramic Facades',
    image: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'ceramicFacadeDesc'
  },
  {
    id: '6',
    title: 'parkingCanopy',
    category: 'Canopies & Shelters',
    image: 'https://images.pexels.com/photos/681368/pexels-photo-681368.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'parkingCanopyDesc'
  }
];

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleProjects((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    projectsRef.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            {t('featuredProjects')}
          </h2>
          <div className="w-24 h-1 bg-[#F57C00] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('projectsExplore')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectsRef.current[index] = el)}
              className={`group relative overflow-hidden bg-[#1E1E1E] cursor-pointer transform transition-all duration-700 ${
                visibleProjects.has(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[#F57C00] text-sm font-semibold uppercase tracking-wide mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t(project.title as any)}
                </h3>
                <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm mr-2">{t('viewDetails')}</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-slideUp">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-[#F57C00] text-white p-2 hover:bg-[#E06900] transition-colors"
            >
              <X size={24} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-96 object-cover"
            />

            <div className="p-8">
              <div className="text-[#F57C00] text-sm font-semibold uppercase tracking-wide mb-2">
                {selectedProject.category}
              </div>
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
                {t(selectedProject.title as any)}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t(selectedProject.description as any)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
