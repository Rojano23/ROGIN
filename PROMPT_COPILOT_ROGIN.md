# PROMPT PARA COPILOT AGENT — ADAPTAR PLANTILLA MTVS A CONSTRUCTORA ROGIN

Voy a copiar la carpeta completa del proyecto MTVS para crear un nuevo proyecto destinado a:

**CONSTRUCTORA ROGIN S.A. DE C.V.**

Quiero que reutilices la arquitectura, componentes, responsive, navegación y filosofía de configuración de la plantilla MTVS, pero que sustituyas COMPLETAMENTE la identidad, contenido, imágenes y secciones para ROGIN.

## REGLAS IMPORTANTES

1. NO reconstruyas la aplicación desde cero.
2. Primero inspecciona:
   - package.json
   - src/App.tsx
   - src/data
   - componentes de navbar/footer
   - HomePage
   - CSS/tokens/theme
   - assets
3. Reutiliza componentes existentes siempre que sea razonable.
4. Elimina TODAS las referencias visibles o internas a MTVS, MORE THAN VALVS, capacitación, cursos, especialista y clientes de MTVS.
5. No inventes certificaciones, contratos, teléfonos, WhatsApp, redes sociales ni reconocimientos.
6. Mantén React + Vite y evita dependencias nuevas.
7. Mantén responsive desktop/tablet/mobile.
8. Usa datos/configuración para servicios, proyectos, valores y organizaciones.
9. Ejecuta npm run build al finalizar.

---

# 1. IDENTIDAD

Nombre corporativo:
**CONSTRUCTORA ROGIN S.A. DE C.V.**

Sector:
**Construcción · Infraestructura · Mantenimiento**

Posicionamiento sugerido para web:
**Soluciones de construcción e infraestructura con calidad, seguridad y experiencia.**

Texto corto de Hero:
**Construimos infraestructura que genera valor**

Subtítulo:
**Experiencia en obra civil, edificación, infraestructura hidráulica, pavimentación, mantenimiento e instalaciones para instituciones públicas, municipios y clientes particulares.**

CTA principal:
**Conoce nuestros proyectos**

CTA secundario:
**Solicitar información**

---

# 2. LOGO Y ASSETS

Voy a colocar los recursos en una carpeta similar a:

`src/assets/client/ROGIN/`

Archivos disponibles:

- rogin_logo_original.png
- rogin_logo_web.png
- hero_infraestructura_xalapa.jpg
- infraestructura_redes_xalapa.jpg
- hospital_comunidad_mantenimiento.jpg
- css_cordoba_fachada.jpg
- css_cordoba_edificio.jpg
- hgz32_minatitlan_dietologia.jpg
- hgz32_minatitlan_interiores.jpg
- areas_residenciales_medicas_2025.jpg
- hemodialisis_hgz8_cordoba.jpg
- hemodialisis_hgz8_detalle.jpg
- cisternas_imss_2025.jpg

IMPORTANTE:
El logotipo ROGIN es cuadrado. No lo deformes para ocupar un espacio horizontal.
En navbar:
- usar `rogin_logo_web.png` como emblema,
- mantener `height: auto`,
- acompañarlo con texto HTML:
  **CONSTRUCTORA ROGIN**
  y debajo, si ayuda visualmente:
  **S.A. DE C.V.**
No repetir texto si visualmente queda redundante.

---

# 3. PALETA DE COLORES

Usar esta paleta derivada del logotipo y del currículum:

```css
:root {
  --rogin-green: #07572D;
  --rogin-blue: #333B75;
  --rogin-blue-gray: #67688F;
  --rogin-gray: #999CAB;
  --rogin-gold: #DEA300;
  --rogin-charcoal: #202733;
  --rogin-off-white: #F5F7F8;
  --rogin-white: #FFFFFF;
}
```

Dirección visual:
- verde institucional como identificador principal;
- azul profundo para títulos, cards o fondos corporativos;
- dorado como acento fino, líneas, badges o detalles;
- fondos blancos/off-white;
- evitar saturación de verde y dorado.

La web debe sentirse:
- técnica,
- institucional,
- confiable,
- constructiva,
- profesional,
- más cercana a infraestructura/obra pública que a un template genérico.

---

# 4. NAVEGACIÓN

Sustituir menú MTVS por:

- Inicio
- Nosotros
- Servicios
- Proyectos
- Experiencia
- Contacto

CTA:
**Solicitar cotización**

Si existe menú móvil, actualizarlo también.

---

# 5. HERO

Usar:
`hero_infraestructura_xalapa.jpg`

Título:
**Construimos infraestructura que genera valor**

Subtítulo:
**Experiencia en obra civil, edificación, infraestructura hidráulica, pavimentación, mantenimiento e instalaciones para instituciones públicas, municipios y clientes particulares.**

Claims opcionales:
- **Obra civil e infraestructura**
- **Experiencia documentada desde 2014**
- **Calidad · Seguridad · Cumplimiento**

CTA:
- **Ver proyectos**
- **Contactar**

No usar métricas inventadas.

---

# 6. QUIÉNES SOMOS

Título:
**Quiénes somos**

Texto base para web, derivado del currículum:

**Constructora ROGIN S.A. de C.V. cuenta con experiencia en distintas áreas de la construcción y el mantenimiento, atendiendo proyectos para dependencias gubernamentales, municipios y clientes particulares. Nuestra operación integra capacidad técnica y administrativa con personal especializado en obra civil, edificación, infraestructura hidráulica, pavimentación, instalaciones y mantenimiento.**

Segundo párrafo:

**A lo largo de su trayectoria, ROGIN ha participado en proyectos de infraestructura urbana, educativa, hospitalaria, hidráulica y residencial, desarrollando soluciones orientadas al cumplimiento de alcance, calidad, tiempo y costo.**

Indicadores/badges:
- Obra pública y privada
- Infraestructura urbana
- Edificación y mantenimiento
- Capacidad técnica y administrativa

---

# 7. MISIÓN Y VISIÓN

Usar una sección equivalente a MissionVisionSection del proyecto MTVS, adaptada a ROGIN.

## Misión
Versión web con corrección editorial mínima del currículum:

**Somos una organización que promueve, contrata y realiza la construcción de proyectos de infraestructura con calidad, en tiempo y costo, cumpliendo con las expectativas de satisfacción y rentabilidad de nuestros usuarios, clientes y accionistas.**

## Visión
**Consolidar e incrementar nuestra participación en los servicios de infraestructura con tecnología, confiabilidad, calidad y personal calificado, preservando el medio ambiente para contribuir al bienestar de la sociedad.**

Usar una fotografía de infraestructura en lugar de fotografías de capacitación.

---

# 8. SERVICIOS

Transformar la sección de Cursos/Servicios de MTVS en servicios de construcción.

Crear cards editables mediante un array.

## Servicio 1 — Edificación y mantenimiento
Descripción:
**Construcción, rehabilitación y mantenimiento de edificaciones residenciales, educativas, hospitalarias e institucionales.**

## Servicio 2 — Infraestructura vial
Descripción:
**Construcción de caminos, rehabilitación de pavimentos asfálticos y pavimentación con concreto hidráulico.**

## Servicio 3 — Infraestructura hidráulica y sanitaria
Descripción:
**Sistemas de agua potable, captación y almacenamiento, redes de agua entubada, drenaje sanitario y colectores pluviales.**

## Servicio 4 — Obra civil e instalaciones
Descripción:
**Ejecución de obra civil, adecuaciones, remodelaciones e instalaciones eléctricas, hidráulicas y sanitarias.**

## Servicio 5 — Obra electromecánica y protección
Descripción:
**Capacidad para trabajos electromecánicos, protección anticorrosiva y mantenimiento especializado.**

## Servicio 6 — Estudios y proyectos
Descripción:
**Desarrollo y ejecución de estudios y proyectos relacionados con infraestructura y construcción.**

Imágenes sugeridas:
- infraestructura vial: hero_infraestructura_xalapa.jpg
- hidráulica/sanitaria: infraestructura_redes_xalapa.jpg
- mantenimiento: hospital_comunidad_mantenimiento.jpg
- edificación/institucional: css_cordoba_edificio.jpg
- instalaciones: hgz32_minatitlan_interiores.jpg

Mantener cards más compactas que las cards de cursos de MTVS.

---

# 9. POLÍTICAS / COMPROMISOS

Sustituir la antigua sección de Valores por una sección:

**Nuestros compromisos**

Crear tres cards principales:

### Calidad
**Realizamos obras mediante procesos, estrategias, innovación tecnológica, mejora continua y trabajo en equipo, buscando la satisfacción del cliente y el cumplimiento de la normatividad vigente.**

### Seguridad
**Promovemos la seguridad e integridad del personal, las instalaciones y el entorno, reduciendo riesgos mediante capacitación, vigilancia y mejora continua.**

### Responsabilidad ambiental
**Incorporamos tecnologías y procesos ambientalmente responsables, procurando el equilibrio ecológico de nuestras operaciones y el cumplimiento de la legislación aplicable.**

Puede existir una cuarta card:
### Integridad y trabajo en equipo
**Desarrollamos nuestros proyectos con responsabilidad, valores éticos, colaboración y orientación al cumplimiento.**

---

# 10. PROYECTOS DESTACADOS

Transformar la sección de cursos/proyectos existente en una sección potente de portafolio.

No mostrar una lista interminable de contratos.
Mostrar inicialmente 5 proyectos destacados, mediante cards.

La selección combina importe, relevancia del contratante, recencia y diversidad del portafolio.

## Proyecto 1
**Mantenimiento integral de Hospitales de la Comunidad**
Cliente:
Secretaría de Salud de Veracruz

Ubicación:
Tempoal y Tlaquilpa, Veracruz

Periodo:
Diciembre 2019 - Febrero 2020

Importe contratado:
**$10,975,233.77 MXN**

Alcance:
**Pintura, impermeabilización, mantenimiento de instalaciones eléctricas, hidráulicas y sanitarias, así como señalización interior y exterior.**

Imagen:
`hospital_comunidad_mantenimiento.jpg`

## Proyecto 2
**Remodelación integral y mejora de imagen - HGZ No. 32**
Cliente:
Instituto Mexicano del Seguro Social, OOAD Regional Veracruz Sur

Ubicación:
Minatitlán, Veracruz

Periodo:
Mayo 2024 - Julio 2024

Importe:
**$9,325,400.32 MXN**

Alcance:
**Obra civil e instalaciones para remodelación integral y mejora de imagen en baños y área de dietología.**

Imagen:
`hgz32_minatitlan_dietologia.jpg`

## Proyecto 3
**Rehabilitación del Centro de Seguridad Social Córdoba**
Cliente:
Instituto Mexicano del Seguro Social, OOAD Regional Veracruz Sur

Periodo:
Septiembre 2023 - Noviembre 2023

Importe:
**$5,401,113.02 MXN**

Alcance:
**Impermeabilización de azoteas, pintura de fachadas e interiores y trabajos de plafones.**

Imagen:
`css_cordoba_fachada.jpg`

## Proyecto 4
**Dignificación de áreas residenciales médicas**
Cliente:
Instituto Mexicano del Seguro Social, OOAD Regional Veracruz Sur

Ubicación:
HGZ No. 35 Cosamaloapan y HGZ No. 32 Minatitlán, Veracruz

Periodo:
Julio 2025 - Octubre 2025

Importe:
**$4,969,541.30 MXN**

Alcance:
**Obra civil e instalaciones para remodelación integral y dignificación de áreas residenciales médicas.**

Imagen:
`areas_residenciales_medicas_2025.jpg`

## Proyecto 5
**Infraestructura urbana integral en Col. Miguel Alemán**
Cliente:
H. Ayuntamiento Constitucional de Xalapa

Ubicación:
Xalapa, Veracruz

Periodo:
Julio 2023 - Octubre 2023

Importe:
**$2,661,887.57 MXN**

Alcance:
**Construcción de calle con pavimento de concreto hidráulico, drenaje sanitario, red de agua entubada y alumbrado público.**

Imagen:
`hero_infraestructura_xalapa.jpg`

Agregar como proyecto reciente adicional en galería, pero no necesariamente como card principal:

**Remodelación integral de Hemodiálisis Interna - HGZ No. 8 Córdoba**
Importe:
$4,249,857.61 MXN
Periodo:
Julio 2025 - Noviembre 2025
Imagen:
`hemodialisis_hgz8_cordoba.jpg`

---

# 11. EXPERIENCIA / GALERÍA

Reutilizar la sección Gallery de MTVS, pero renombrarla:

**Experiencia en obra**

Subtítulo:
**Proyectos ejecutados en infraestructura urbana, salud, edificación y mantenimiento.**

Usar una galería responsive con:
- infraestructura_redes_xalapa.jpg
- css_cordoba_edificio.jpg
- hgz32_minatitlan_interiores.jpg
- hemodialisis_hgz8_detalle.jpg
- cisternas_imss_2025.jpg

No inventar fechas o ubicaciones distintas a las documentadas.

---

# 12. ORGANIZACIONES / CONTRATANTES

Sustituir la sección de logos de clientes de MTVS.

El currículum no proporciona logos oficiales de estas instituciones, por lo tanto NO descargarlos ni inventarlos.

Usar cards tipográficas o badges sobrios con nombres.

Título:
**Experiencia con instituciones y gobiernos**

Incluir, entre otros:
- Instituto Mexicano del Seguro Social (IMSS), OOAD Regional Veracruz Sur
- Comisión del Agua del Estado de Veracruz (CAEV)
- Secretaría de Salud de Veracruz
- DICONSA, S.A. de C.V.
- H. Ayuntamiento Constitucional de Xalapa
- H. Ayuntamiento Constitucional de San Andrés Tuxtla
- H. Ayuntamiento Constitucional de Santiago Tuxtla
- H. Ayuntamiento Constitucional de Misantla
- H. Ayuntamiento Constitucional de Chacaltianguis
- H. Ayuntamiento Constitucional de Vega de Alatorre

No llamarlos “socios estratégicos”.
Usar una frase neutral como:
**Instituciones y gobiernos para los que ROGIN documenta experiencia contractual en su currículum.**

---

# 13. EQUIPO

El currículum incluye organigrama, pero no fotografías individuales.

Crear una sección sencilla de equipo/estructura con cards tipográficas, NO inventar fotos.

Título:
**Equipo técnico y administrativo**

Incluir:

- **Ing. Cristian de Jesús Gines García**
  Administrador Único

- **Arq. José Alfredo Platas Lozada**
  Coordinador de Construcción

- **Arq. Saúl Vasquez Muñoz**
  Superintendente de Obra

- **Ing. Iván Uri Teova Flores**
  Coordinación de Administración

- **Ing. Marco Antonio Tostado Villar**
  Coordinador Técnico

- **Arq. Reyna Yazmín González Pérez**
  Supervisor de Obra

- **L.C. Adriana Lorely Rodríguez Reyes**
  Recursos Humanos

Usar corrección ortográfica mínima en nombres/cargos cuando proceda, sin alterar identidades.

---

# 14. SECCIÓN “POR QUÉ ROGIN”

Reutilizar el patrón de “Por qué MTVS”, pero convertirlo en 4 cards 2x2:

### Experiencia multidisciplinaria
**Capacidad en edificación, infraestructura vial, redes hidráulicas y sanitarias, instalaciones y mantenimiento.**

### Cumplimiento
**Ejecución orientada a alcance, calidad, tiempo, costo y normatividad aplicable.**

### Capacidad técnica
**Equipo de construcción, supervisión, administración y coordinación técnica con experiencia en obra.**

### Compromiso integral
**Calidad, seguridad, responsabilidad ambiental y mejora continua como principios de ejecución.**

---

# 15. CONTACTO

Datos documentados en el currículum:

**CONSTRUCTORA ROGIN S.A. DE C.V.**

Dirección:
**Calle Priv. de Ferrocarril Interoceánico No. 11 Int. 7, Col. 7 de Noviembre, C.P. 91143, Xalapa, Veracruz.**

Teléfono:
**(228) 8-10-30-62**

Para enlace telefónico usar:
`tel:+522288103062`

Correo:
**constructora_rogin@outlook.com**

Enlace:
`mailto:constructora_rogin@outlook.com`

IMPORTANTE:
El currículum NO indica que el teléfono tenga WhatsApp.
Eliminar/desactivar el botón flotante de WhatsApp de la plantilla MTVS.
No crear enlace wa.me salvo que posteriormente se confirme un número oficial de WhatsApp.

CTA:
**Solicitar cotización**

Puede abrir correo o hacer scroll a Contacto.

---

# 16. FOOTER

Sustituir completamente el footer MTVS.

Incluir:
- logotipo/emblema ROGIN
- CONSTRUCTORA ROGIN S.A. DE C.V.
- Construcción · Infraestructura · Mantenimiento
- navegación
- teléfono
- correo
- ubicación: Xalapa, Veracruz
- copyright dinámico

No agregar redes sociales inexistentes.

---

# 17. SEO

Title:
**Constructora ROGIN | Construcción e Infraestructura en Veracruz**

Meta description:
**Constructora ROGIN S.A. de C.V. desarrolla proyectos de obra civil, edificación, pavimentación, infraestructura hidráulica, mantenimiento e instalaciones en Veracruz.**

Keywords solo si el proyecto ya las maneja:
- construcción Veracruz
- obra civil Xalapa
- infraestructura
- pavimentación
- drenaje
- agua potable
- mantenimiento hospitalario
- edificación

Actualizar:
- favicon utilizando rogin_logo_web.png si técnicamente es apropiado
- Open Graph
- alt text de imágenes
- title
- description

---

# 18. DISEÑO

Quiero conservar la calidad visual y responsive alcanzada con MTVS, pero ROGIN debe sentirse como una empresa constructora completamente distinta.

Dirección:
- fondo claro
- verde institucional
- azul profundo
- acentos dorados
- fotografías de obra real
- tarjetas sobrias
- títulos robustos
- buena separación vertical
- evitar demasiadas tarjetas del mismo color
- evitar apariencia de “sitio de capacitación”
- evitar imágenes genéricas si existen fotografías reales del currículum

El Hero y Proyectos deben ser los bloques visualmente más fuertes.

---

# 19. LIMPIEZA DEL PROYECTO CLONADO

Antes de finalizar:
1. Buscar en src:
   - MTVS
   - More Than Valvs
   - capacitación
   - cursos
   - especialista
   - morethanvalvs
   - imágenes MTVS
2. Eliminar referencias que ya no correspondan.
3. No eliminar componentes reutilizables solo por tener nombres antiguos si pueden renombrarse limpiamente.
4. Actualizar data/configuración, SEO, navbar, footer y favicon.

---

# 20. VALIDACIÓN FINAL

Al terminar:

1. Indica archivos modificados.
2. Indica archivos nuevos.
3. Confirma que no quedan referencias visibles a MTVS.
4. Confirma que el botón flotante de WhatsApp fue retirado/desactivado.
5. Confirma que todos los assets ROGIN cargan correctamente.
6. Ejecuta:
   `npm run build`
7. Corrige todos los errores TypeScript/imports/assets.
8. Reporta cualquier dato que falte antes de publicación.
