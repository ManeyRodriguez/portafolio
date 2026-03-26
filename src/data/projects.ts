import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    title: 'BillHub',
    description:
      'Plataforma de facturacion electronica con gestion de documentos, reportes, permisos, auditoria y certificados digitales.',
    technologies: ['Vue 3', 'Quasar', 'GraphQL', 'Node.js', 'TypeORM', 'MySQL'],
    image: '/images/projects/billhub_sin_texto.png',
    imageWidth: 256,
    imageHeight: 256,
    demoUrl: 'https://www.billhub.do',
    repoUrl: '',
  },
  {
    title: 'Mediturno',
    description:
      'Sistema de gestion medica para la administracion de pacientes, doctores y visitas, con priorizacion por triaje, colas de atencion en tiempo real y automatizacion de procesos clinicos.',
    technologies: [
      'Vue 3',
      'Vite',
      'TypeScript',
      'Pinia',
      'Vue Router',
      'Tailwind CSS',
      'Zod',
      'Node.js',
      'Express',
      'Prisma ORM',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'WebSocket',
    ],
    image: '/images/projects/mediturno.png',
    imageWidth: 1024,
    imageHeight: 1024,
    demoUrl: 'https://extraordinary-cactus-9e936a.netlify.app/',
    repoUrl: '',
  },
  {
    title: 'Sistema de Gestion Academica (SIGESCAL)',
    description:
      'Aplicacion realizada en grupo de pasantia donde forme parte del equipo de desarrollo para la gestion de procesos academicos, formularios administrativos y modulos operativos para la Universidad UAPA.',
    technologies: ['React', 'TypeScript', 'NestJS', 'MySQL'],
    image: '/images/projects/sistema_academico_sin_texto.png',
    imageWidth: 640,
    imageHeight: 390,
    demoUrl: 'https://sigescal.gotransport.app/auth/login',
    repoUrl: '',
  },
];
