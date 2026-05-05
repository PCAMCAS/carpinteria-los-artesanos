# Análisis técnico del proyecto

## Resumen
- Proyecto web de carpintería construido con **Next.js 16 (App Router)**, React 19, TypeScript y Tailwind CSS 4.
- Arquitectura simple, bien separada por dominios (`app`, `components`, `lib`, `data`).
- El código es claro y legible, con buen uso de metadatos SEO y rutas estáticas para catálogo de proyectos.

## Fortalezas
1. **Estructura ordenada del App Router**
   - Rutas y segmentos bien organizados (`/`, `/proyectos`, `/proyectos/[slug]`, `/contacto`).
   - Se usan convenciones de `loading.tsx`, `error.tsx` y `not-found.tsx`.

2. **SEO y metadata sólidos**
   - `layout.tsx` define `metadataBase`, `openGraph`, `keywords`, `robots` y títulos templados.
   - Las páginas dinámicas generan metadata por proyecto.

3. **UX básica bien cuidada**
   - Formulario de contacto con validación del lado servidor y feedback de errores/correcto.
   - Estados de carga en la UI (`isPending`, `loading.tsx`).

4. **Buenas prácticas de seguridad HTTP**
   - `middleware.ts` añade cabeceras útiles (`X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`).

## Riesgos y oportunidades de mejora
1. **Validación de email demasiado básica**
   - Actualmente se valida con `includes("@")`, lo cual acepta formatos inválidos.
   - Recomendación: validar con regex robusta o librería de validación.

2. **Formulario sin integración real de envío**
   - La action devuelve éxito, pero no persiste ni envía mensaje (email/CRM/base de datos).
   - Recomendación: integrar proveedor (Resend/SMTP/API interna) y trazabilidad.

3. **Datos de proyectos hardcoded**
   - `src/data/projects.ts` estático; escalará mal para contenido frecuente.
   - Recomendación: migrar a CMS o fuente externa tipada.

4. **Internacionalización no preparada**
   - Sitio en español, pero sin i18n enrutado.
   - Recomendación: evaluar i18n nativo de Next si habrá multilenguaje.

5. **Cobertura de pruebas no visible**
   - No hay scripts de test en `package.json`.
   - Recomendación: agregar pruebas unitarias de utilidades y tests de componentes/rutas críticas.

## Prioridades recomendadas (orden)
1. Endurecer validaciones y sanitización de input en `contacto/actions.ts`.
2. Implementar flujo real de contacto (envío + manejo de errores observables).
3. Definir modelo de datos de proyectos y fuente administrable.
4. Añadir pruebas automatizadas y CI de calidad mínima (`lint + test + build`).

## Conclusión
El proyecto está en un **buen punto de partida para MVP**: ordenado, consistente y con una base moderna de Next.js 16. La principal deuda está en robustez operativa (validación, persistencia e integración del formulario) y en escalabilidad del contenido.
