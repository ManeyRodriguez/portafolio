import type { PortfolioData } from "../types/portfolio";


export const portfolioData: PortfolioData = {
  name: 'Ing. Juan Manuel Rodríguez Pérez',
  role: 'Software Developer',
  summary:
    'Desarrollador e ingeniero de software con 2 años de experiencia en el mercado, enfocado en la construcción de soluciones frontend y backend con Vue, TypeScript, GraphQL, Quasar y tecnologías orientadas a entornos empresariales.',
  about:
    'Me especializo en construir interfaces modernas, sistemas escalables y experiencias orientadas a negocio. Disfruto trabajar con arquitecturas limpias, buenas prácticas y soluciones bien estructuradas.',
  location: 'Moca, República Dominicana',
  profileImage: '/images/profile/foto_portafolio_juan_manuel.png',
  skills: [
    'Vue 3',
    'TypeScript',
    'JavaScript',
    'Quasar',
    'Pinia',
    'GraphQL',
    'Node.js',
    'NestJS',
    'TypeORM',
    'MySQL',
    'Git',
      'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Sass',
    'GSAP',
    'Responsive Design',
  ],
  projects: [
    {
      title: 'BillHub',
      description:
        'Plataforma de facturación electrónica con gestión de documentos, reportes, permisos, auditoría y certificados digitales.',
      technologies: ['Vue 3', 'Quasar', 'GraphQL', 'Node.js', 'TypeORM'],
      image: '/images/projects/billhub_sin_texto.png',
      demoUrl: '',
      repoUrl: '',
    },
    {
      title: 'Sistema de Gestión Académica',
      description:
        'Aplicación para la gestión de procesos académicos, formularios administrativos y módulos operativos.',
      technologies: ['React', 'TypeScript', 'NestJS', 'SQL'],
      image: '/images/projects/sistema_academico_sin_texto.png',
      demoUrl: '',
      repoUrl: '',
    },
  ],
contact: {
    email: 'maneyrodriguez@gmail.com',
    github: 'https://github.com/ManeyRodriguez',
    linkedin: 'https://www.linkedin.com/in/juan-manuel-rodriguez-perez-08a09665/',
  },
};