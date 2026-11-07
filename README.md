# MongliPool — diseño de presentación

Framework de presentación en HTML/CSS/JS puro (un solo `index.html`): navegación con teclado y swipe, transiciones, modo claro/oscuro y EN/ES. El contenido es el pitch de MongliPool (Stellar Hacks: ZK 2025). En vivo: https://presentacionde-monglipool.vercel.app

## FIX_NOTES (rediseño /diseno, 2026-10-11)

- **Texto por debajo de 12 px**: 20 reglas en 10–11.5 px (selector de idioma, etiquetas de tecnología, tabla de benchmarks, pasos del flujo, roadmap, enlaces finales) pasaron a 12 px. El pie de la última diapositiva usaba un gris fijo (`#475569`) que no cambiaba con el tema; ahora usa `--text-muted`.
- **Botones chicos**: tema (28 px) y anterior/siguiente (38 px) pasaron a 44 px; EN/ES de 22 a 38 px de alto. Los puntos de navegación conservan su tamaño visual, pero su área táctil ahora mide 44 px de alto.
- **`100vh` en celular** cortaba los controles de abajo detrás de la barra del navegador; se agregó `100dvh`.
- **SEO**: faltaban canonical, Open Graph, tarjeta de X (con `og.png`, una captura real de la portada), `theme-color`, `apple-touch-icon.png`, `robots.txt` y `sitemap.xml`.

## DESIGN_NOTES

- **Fondo 3D: el dado sacó primero la receta 6 (Three.js)**, pero esa receta pide bundler y este proyecto es un solo HTML sin build. Así que se volvió a tirar, una vez, como permite la skill, y **salió la receta 1 (figuras CSS 3D + constelación)**. Se adaptó a MongliPool:
  - la **constelación es el conjunto de anonimato**: depósitos indistinguibles que vienen hacia la cámara y se enlazan entre sí cuando están cerca;
  - los **cubos son commitments** (hojas del árbol de Merkle), el **giroscopio** es la raíz y los **prismas**, las pruebas Groth16.
  - Colores de la marca (`--accent-green`, `--accent-blue-2`) tomados de los tokens, así que el tema claro funciona solo.
- **Completo en la portada, tranquilo en el resto**: `ambient.js` observa el contador del deck y baja la escena al 50 % fuera de la diapositiva 1, para no competir con tablas y textos. En modo claro baja todavía más. En celular hay la mitad de figuras y estrellas, DPR ≤ 2, pausa con la pestaña oculta y escena quieta con `prefers-reduced-motion`.
- **Hero**: el logo de la portada flota despacio y un anillo de luz verde sale de él cada 3 s.

### Checklist de 2 minutos en el celular

1. Abre el deck: detrás de la tarjeta flotan cubos y anillos, y hay puntos que se enlazan.
2. El logo de la portada flota y suelta un anillo de luz.
3. Desliza a la diapositiva 2: el fondo se calma.
4. Toca la luna: cambia a claro, el fondo se atenúa y el texto se lee.
5. Las flechas de abajo se tocan sin fallar y no quedan tapadas por la barra del navegador.

## Licencia

MIT — ver `LICENSE`.
