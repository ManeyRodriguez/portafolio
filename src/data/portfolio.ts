import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: 'Juan Manuel Rodríguez Pérez',
  role: 'Software Developer',
  summary:
    'Desarrollador e ingeniero de software con 2 años de experiencia en el mercado, enfocado en la construcción de soluciones frontend y backend con Vue, TypeScript, GraphQL, Quasar y tecnologías orientadas a entornos empresariales.',
  about:
    'Me especializo en construir interfaces modernas, sistemas escalables y experiencias orientadas a negocio. Disfruto trabajar con arquitecturas limpias, buenas prácticas y productos que aporten valor real.',
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
    'Vite',
  ],
  projects: [
    {
      title: 'BillHub',
      description:
        'Plataforma de facturación electrónica con gestión de documentos, reportes, permisos, auditoría y certificados digitales.',
      technologies: ['Vue 3', 'Quasar', 'GraphQL', 'Node.js', 'TypeORM'],
      demoUrl: '',
      repoUrl: '',
      image: '/images/projects/billhub_sin_texto.png',
    },
    {
      title: 'Sistema de Gestión Académica',
      description:
        'Aplicación para la gestión de procesos académicos, formularios administrativos y módulos operativos.',
      technologies: ['React', 'TypeScript', 'NestJS', 'SQL'],
      demoUrl: '',
      repoUrl: '',
      image: '/images/projects/sistema_academico_sin_texto.png',
    },
  ],
  experience: [
    {
      company: 'Alliance Ingeniería en Software',
      role: 'Software Developer',
      period: '2025 - Actualidad',
      description:
        'Desarrollo de soluciones empresariales, interfaces modernas y módulos funcionales con Vue, Quasar y backend con tecnologías modernas.',
    },
    {
      company: 'Ethics Code',
      role: 'Desarrollador de Software',
      period: '2024 - 2025',
      description:
        'Participación en desarrollo web, implementación de funcionalidades de negocio y mantenimiento de sistemas.',
    },
  ],
  contact: {
    email: 'maneyrodriguez@gmail.com',
    github: 'https://github.com/ManeyRodriguez',
    linkedin: 'https://www.linkedin.com/in/juan-manuel-rodriguez-perez-08a09665/',
  },
};