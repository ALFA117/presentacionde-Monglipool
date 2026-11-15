# MongliPool — diseño de presentación

Framework de presentación en HTML/CSS/JS puro (un solo `index.html`): navegación con teclado y swipe, transiciones, modo claro/oscuro y EN/ES. El contenido es el pitch de MongliPool (Stellar Hacks: ZK 2025). En vivo: https://presentacionde-monglipool.vercel.app

## FIX_NOTES (rediseño /diseno, 2026-10-11)

- **Texto por debajo de 12 px**: 20 reglas en 10–11.5 px (selector de idioma, etiquetas de tecnología, tabla de benchmarks, pasos del flujo, roadmap, enlaces finales) pasaron a 12 px. El pie de la última diapositiva usaba un gris fijo (`#475569`) que no cambiaba con el tema; ahora usa `--text-muted`.
- **Botones chicos**: tema (28 px) y anterior/siguiente (38 px) pasaron a 44 px; EN/ES de 22 a 38 px de alto. Los puntos de navegación conservan su tamaño visual, pero su área táctil ahora mide 44 px de alto.
- **`100vh` en celular** cortaba los controles de abajo detrás de la barra del navegador; se agregó `100dvh`.
- **SEO**: faltaban canonical, Open Graph, tarjeta de X (con `og.png`, una captura real de la portada), `theme-color`, `apple-touch-icon.png`, `robots.txt` y `sitemap.xml`.

## DESIGN_NOTES (rediseño formal, 2026-11-15, rama `rediseno-pro`)

- **Dirección: "informe de auditoría".** Un protocolo de privacidad que vende cumplimiento tiene que leerse como un documento que un regulador tomaría en serio. Títulos en **Newsreader** (serif editorial), cuerpo en **IBM Plex Sans** y **IBM Plex Mono** para hashes, contratos, constantes y numeración. Sistema base sugerido por UI/UX Pro Max: "Minimalism & Swiss Style" + Plex (finanzas/confianza); su paleta dorado+morado se descartó a favor de neutros + un solo acento (el verde de la marca).
- **Tokens** de color, radio y espaciado (múltiplos de 4/8) para oscuro y claro; contraste AA en ambos.
- **Se quitó el fondo 3D** (`ambient.js`, cubos y anillos con brillo): competía con el contenido y se veía poco formal. En su lugar, una retícula de 64 px casi imperceptible.
- **Detalle propio de la portada:** un árbol de Merkle en SVG donde se dibuja el camino de una hoja a la raíz (la prueba de pertenencia) y la hoja queda marcada como "?" — el concepto del producto en una figura.
- **Cada lámina con su propia composición** (no tarjetas idénticas): filas con separadores en "El problema", línea de tiempo de 3 pasos, hoja técnica tipo ficha, tres pilares con divisores, tabla comparativa con la columna de MongliPool resaltada y leyenda (el color nunca es la única señal), flujo de 5 pasos con etiqueta "Stellar Testnet", roadmap con riel y estados, equipo y cierre con registro de contratos (testnet).
- **Movimiento discreto:** entrada escalonada de bloques al cambiar de lámina (solo transform/opacity), trazo del camino del árbol en la portada; todo se apaga con `prefers-reduced-motion`.
- Texto de cuerpo ≥15–16 px (antes 12 px), controles de 44 px, sin scroll horizontal en 390 y 320 px; en celular cada lámina se desplaza por dentro.

### Checklist de 2 minutos en el celular

1. Abre el deck: portada con el árbol de Merkle; el camino verde se dibuja hasta la raíz.
2. Desliza o toca la flecha: las láminas cambian y el contador sube.
3. En láminas largas (técnica, cumplimiento, demo) desplaza hacia abajo dentro de la tarjeta.
4. Toca el sol/luna: cambia a claro; cambia EN/ES y todo el texto se traduce.
5. En "Demo" y "Cierre", los enlaces a la demo y al repo abren en otra pestaña.

## Licencia

MIT — ver `LICENSE`.
