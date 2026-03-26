# Portafolio de Juan Manuel Rodriguez Perez

Portafolio profesional construido con Vue 3, TypeScript, Vite, Tailwind CSS v4 y GSAP. El sitio presenta experiencia, stack tecnico, proyectos destacados y canales de contacto en una sola pagina optimizada para desktop y mobile.

## Stack

- Vue 3 + TypeScript
- Vite
- Tailwind CSS v4
- GSAP + ScrollTrigger
- ESLint + Prettier

## Scripts

- `npm run dev`: inicia el entorno local
- `npm run build`: ejecuta type check y genera la build de produccion
- `npm run preview`: previsualiza la build local
- `npm run typecheck`: valida tipos sin compilar
- `npm run lint`: revisa el codigo con ESLint
- `npm run format`: formatea el proyecto con Prettier

## Estructura principal

- `src/data/portfolio.ts`: datos generales del perfil
- `src/data/projects.ts`: proyectos destacados
- `src/data/skills.ts`: stack tecnico
- `src/data/contact.ts`: enlaces y datos de contacto
- `src/components/sections`: secciones visibles del portafolio
- `src/components/ui`: componentes reutilizables

## Actualizar contenido

1. Edita `src/data/portfolio.ts` para nombre, resumen, rol y ubicacion.
2. Edita `src/data/projects.ts` para agregar o actualizar proyectos.
3. Edita `src/data/skills.ts` para modificar tecnologias.
4. Edita `src/data/contact.ts` para actualizar email o redes.
5. Reemplaza imagenes en `public/images` manteniendo nombres o actualizando sus rutas.

## Deploy

El proyecto esta listo para desplegarse en plataformas estaticas como Netlify o Vercel usando el comando:

```bash
npm run build
```
