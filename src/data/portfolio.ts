import type { PortfolioData } from "../types/portfolio";

 const skills = [
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
];


export const portfolioData: PortfolioData = {
  name: 'Ing. Juan Manuel Rodríguez Pérez',
  abreviatedName: '{JMRP}',
  alias: 'Maney Rodríguez',
  role: 'Software Developer',
  summary:
    'Desarrollador e ingeniero de software con 2 años de experiencia en el mercado, enfocado en la construcción de soluciones frontend y backend con Vue, TypeScript, GraphQL, Quasar y tecnologías orientadas a entornos empresariales.',
  about:
    'Me especializo en construir interfaces modernas, sistemas escalables y experiencias orientadas a negocio. Disfruto trabajar con arquitecturas limpias, buenas prácticas y soluciones bien estructuradas.',
  location: 'Moca, República Dominicana',
  profileImage: '/images/profile/foto_portafolio_juan_manuel.png',
  skills: [...skills],  
  projects: [
    {
      title: 'BillHub',
      description:
        'Plataforma de facturación electrónica con gestión de documentos, reportes, permisos, auditoría y certificados digitales.',
      technologies: ['Vue 3', 'Quasar', 'GraphQL', 'Node.js', 'TypeORM', 'MySQL'],
      image: '/images/projects/billhub_sin_texto.png',
      demoUrl: 'https://www.billhub.do',
      repoUrl: '',
    },
    {
      title: 'Sistema de Gestión Académica (SIGESCAL)',
      description:
        'Aplicación realizada en grupo de pasantía donde formamos parte del equipo de desarrollo para la gestión de procesos académicos, formularios administrativos y módulos operativos para la Universidad UAPA.',
      technologies: ['React', 'TypeScript', 'NestJS', 'MySQL'],
      image: '/images/projects/sistema_academico_sin_texto.png',
      demoUrl: 'https://sigescal.gotransport.app/auth/login',
      repoUrl: '',
    },
  ],
contact: {
    email: 'maneyrodriguez@gmail.com',
    github: 'https://github.com/ManeyRodriguez',
    linkedin: 'https://www.linkedin.com/in/juan-manuel-rodriguez-perez-08a09665/',
  },
};



export const iconSkills: Record<string, string> = {
  'Vue 3': 'fa-brands fa-vuejs',
  TypeScript: 'fa-solid fa-code',
  JavaScript: 'fa-brands fa-js',
  Quasar: 'fa-solid fa-bolt',
  Pinia: 'fa-solid fa-box-open',
  GraphQL: 'fa-solid fa-diagram-project',
  'Node.js': 'fa-brands fa-node-js',
  NestJS: 'fa-solid fa-layer-group',
  TypeORM: 'fa-solid fa-database',
  MySQL: 'fa-solid fa-database',
  Git: 'fa-brands fa-git-alt',
  HTML5: 'fa-brands fa-html5',
  CSS3: 'fa-brands fa-css3-alt',
  'Tailwind CSS': 'fa-brands fa-tailwind-css',
  Sass: 'fa-brands fa-sass',
  GSAP: 'fa-solid fa-wand-magic-sparkles',
  'Responsive Design': 'fa-solid fa-mobile-screen-button',
  React: 'fa-brands fa-react',
};