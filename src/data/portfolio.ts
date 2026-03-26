import type { PortfolioData } from '../types/portfolio';
import { contact } from './contact';
import { projects } from './projects';
import { skills } from './skills';

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
  profileImageWidth: 562,
  profileImageHeight: 727,
  skills: [...skills],
  projects,
  contact,
};
