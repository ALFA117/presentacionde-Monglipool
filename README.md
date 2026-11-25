<div align="center">

<img src="apple-touch-icon.png" alt="Logo de MongliPool" width="96" />

# MongliPool — Pitch deck

### Las 10 láminas que cuentan MongliPool: privacidad con cumplimiento en Stellar, con criptografía ZK real.

[![Ver el deck](https://img.shields.io/badge/Ver_el_deck-presentacionde--monglipool.vercel.app-05D5A1?style=for-the-badge&logo=vercel&logoColor=white)](https://presentacionde-monglipool.vercel.app)
[![App en vivo](https://img.shields.io/badge/App-mongli--pool.vercel.app-0066FF?style=for-the-badge)](https://mongli-pool.vercel.app)
[![Repo del producto](https://img.shields.io/badge/Repo-ALFA117%2FMongliPool-24292f?style=for-the-badge&logo=github)](https://github.com/ALFA117/MongliPool)
[![Stellar Hacks: ZK](https://img.shields.io/badge/Stellar_Hacks-ZK_2025-111?style=for-the-badge)](https://dorahacks.io/hackathon/stellar-hacks-zk)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Sin dependencias](https://img.shields.io/badge/build-sin_dependencias-555)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)
![MIT](https://img.shields.io/badge/Licencia-MIT-555)

<br/>

<img src="docs/img/hero.jpg" alt="El deck en una laptop y en un celular: portada de MongliPool con el árbol de Merkle y el camino de la prueba de pertenencia" width="100%" />

**[▶ Abrir el deck](https://presentacionde-monglipool.vercel.app)** · **[Probar MongliPool](https://mongli-pool.vercel.app)** · **[Código del producto](https://github.com/ALFA117/MongliPool)**

</div>

---

## 🎯 Qué es

El pitch de **[MongliPool](https://github.com/ALFA117/MongliPool)** — un pool de privacidad en Stellar con pruebas Groth16 verificadas on-chain en Soroban y un auditor autorizado con llave de vista — hecho para presentarlo a inversionistas y primeros usuarios. Todo vive en **un solo `index.html`** (HTML, CSS y JS puros, sin build), en inglés y español, con modo claro y oscuro.

## 🗂️ Las láminas

| # | Lámina | Qué cuenta |
|:--:|:--|:--|
| 01 | Portada | Árbol de Merkle con el camino de una hoja a la raíz: la prueba de pertenencia en una figura |
| 02 | El problema | En blockchain la privacidad y el cumplimiento no conviven |
| 03 | La solución | Privacidad + cumplimiento en 3 pasos: depositar, prueba ZK, retirar |
| 04 | Tecnología | Groth16/BN254, Soroban, 3 contratos, llave de vista NaCl, prueba en el navegador |
| 05 | Cumplimiento | ASP, llave de vista asimétrica y doble prueba de Merkle |
| 06 | Comparativa | MongliPool frente a Tornado Cash y mixers tradicionales |
| 07 | Demo | Flujo de punta a punta verificado en Stellar testnet |
| 08 | Roadmap | Del MVP del hackathon a un protocolo en producción |
| 09 | Equipo | Quién lo construyó |
| 10 | Cierre | Enlaces a la demo, al repo y registro de contratos en testnet |

<table>
<tr>
<td width="50%"><img src="docs/img/slide-02.jpg" alt="Lámina 2: en blockchain, privacidad y cumplimiento no conviven" /><p align="center"><sub>02 · El problema</sub></p></td>
<td width="50%"><img src="docs/img/slide-03.jpg" alt="Lámina 3: MongliPool, privacidad + cumplimiento en 3 pasos" /><p align="center"><sub>03 · La solución</sub></p></td>
</tr>
<tr>
<td width="50%"><img src="docs/img/slide-04.jpg" alt="Lámina 4: criptografía real, no simulaciones; ficha técnica" /><p align="center"><sub>04 · Tecnología</sub></p></td>
<td width="50%"><img src="docs/img/slide-05.jpg" alt="Lámina 5: qué nos distingue, cumplimiento desde el diseño" /><p align="center"><sub>05 · Cumplimiento</sub></p></td>
</tr>
<tr>
<td width="50%"><img src="docs/img/slide-06.jpg" alt="Lámina 6: tabla comparativa contra Tornado Cash y mixers tradicionales" /><p align="center"><sub>06 · Comparativa</sub></p></td>
<td width="50%"><img src="docs/img/slide-07.jpg" alt="Lámina 7: flujo de 5 pasos verificado en Stellar testnet" /><p align="center"><sub>07 · Demo</sub></p></td>
</tr>
<tr>
<td width="50%"><img src="docs/img/slide-08.jpg" alt="Lámina 8: roadmap del MVP del hackathon al protocolo en producción" /><p align="center"><sub>08 · Roadmap</sub></p></td>
<td width="50%"><img src="docs/img/slide-10.jpg" alt="Lámina 10: cierre con enlaces y contratos en testnet" /><p align="center"><sub>10 · Cierre</sub></p></td>
</tr>
</table>

<div align="center">
<img src="docs/img/tres.jpg" alt="Tres celulares con la portada, la ficha técnica y la comparativa del deck" width="100%" />
<br/><sub>En el celular cada lámina se desplaza por dentro y se cambia con un swipe.</sub>
</div>

## ⌨️ Cómo se usa

| Acción | Cómo |
|:--|:--|
| Siguiente / anterior | `→` o `Espacio` / `←`, flechas en pantalla o swipe |
| Primera / última lámina | `Home` / `End` |
| Idioma | Botones EN / ES |
| Tema | Botón sol / luna |

## 🧩 Cómo está hecho

```mermaid
flowchart LR
    H["index.html"] --> S["10 secciones de lamina"]
    H --> C["CSS con tokens claro y oscuro"]
    H --> J["JS: navegacion, swipe, i18n EN y ES"]
    J --> S
    S --> V["Vercel: sitio estatico"]
```

- Tipografía: Newsreader (títulos), IBM Plex Sans (cuerpo) e IBM Plex Mono (hashes y datos); íconos de Tabler.
- Movimiento discreto al cambiar de lámina, que se apaga con `prefers-reduced-motion`; controles de 44 px y `100dvh` para celular.
- Decisiones de diseño y checklist en celular: [docs/NOTAS-DE-DISENO.md](docs/NOTAS-DE-DISENO.md).

## 🚀 Correrlo

No hay nada que instalar: abre `index.html` en el navegador, o sírvelo localmente.

```bash
git clone https://github.com/ALFA117/presentacionde-Monglipool.git
cd presentacionde-Monglipool
npx serve .        # o: python3 -m http.server
```

## 🔗 Producto relacionado

**[ALFA117/MongliPool](https://github.com/ALFA117/MongliPool)** — el código del pool (circuito Circom, contratos Soroban y frontend) y la [app en vivo](https://mongli-pool.vercel.app).

## 📄 Licencia

MIT — ver [`LICENSE`](LICENSE).

---

<div align="center">

**Privacidad real. Cumplimiento integrado. Verificado on-chain en Stellar.**

Hecho por Mongli DAO para **Stellar Hacks: ZK 2025**.

</div>
