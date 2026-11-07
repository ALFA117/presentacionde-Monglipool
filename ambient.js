// Fondo ambiental del deck (receta 1 de /diseno: figuras CSS 3D + constelación;
// la 6 —Three.js— salió primero, pero pide bundler y esto es un solo HTML).
// Adaptado a MongliPool:
//  · la constelación es el conjunto de anonimato: depósitos indistinguibles
//    que vienen hacia la cámara y se enlazan entre sí cuando están cerca;
//  · los cubos son commitments (hojas del árbol de Merkle), el giroscopio de
//    anillos es la raíz y los prismas, las pruebas Groth16.
// Verde y azul de la marca, tomados de los tokens (--accent-green/--accent-blue).
// Completo en la portada; tranquilo en el resto de las diapositivas.
// Parallax por puntero y profundidad, pausa con la pestaña oculta, mitad de
// elementos en celular, DPR ≤ 2 y escena quieta con prefers-reduced-motion.

const root = document.getElementById('ambient')
if (root) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const mobile = window.matchMedia('(max-width: 767px)').matches
  const fine = window.matchMedia('(pointer: fine)').matches

  // ── Figuras CSS 3D ─────────────────────────────────────────────────────
  const SHAPES = [
    { kind: 'gyro', x: 74, y: 8, size: 240, depth: 0.9, spin: 40, tone: 'a', mobile: true },
    { kind: 'cube', x: 5, y: 20, size: 96, depth: 0.75, spin: 24, tone: 'a', mobile: true },
    { kind: 'prism', x: 88, y: 56, size: 120, depth: 0.6, spin: 30, tone: 'b', mobile: true },
    { kind: 'cube', x: 20, y: 66, size: 64, depth: 0.45, spin: 20, tone: 'c', mobile: true },
    { kind: 'cube', x: 56, y: 86, size: 48, depth: 0.3, spin: 16, tone: 'a' },
    { kind: 'gyro', x: 2, y: 80, size: 140, depth: 0.35, spin: 28, tone: 'b' },
    { kind: 'prism', x: 42, y: 30, size: 54, depth: 0.2, spin: 22, tone: 'a' },
    { kind: 'cube', x: 80, y: 90, size: 38, depth: 0.18, spin: 14, tone: 'c' },
  ].filter((s) => !mobile || s.mobile)

  const stage = document.createElement('div')
  stage.className = 'amb-stage'

  function face(transform, w, h, extra = '') {
    const f = document.createElement('span')
    f.className = 'amb-face'
    f.style.cssText = `width:${w}px;height:${h}px;transform:${transform};${extra}`
    return f
  }

  const floats = SHAPES.map((s, i) => {
    const float = document.createElement('div')
    float.className = 'amb-float'
    float.style.cssText = `left:${s.x}%;top:${s.y}%;width:${s.size}px;height:${s.size}px;opacity:${0.3 + s.depth * 0.45};--tone:var(--amb-${s.tone});scale:${0.7 + s.depth * 0.5}`
    const spin = document.createElement('div')
    spin.className = 'amb-spin' + (reduce ? '' : ' amb-animate')
    spin.style.cssText = `width:${s.size}px;height:${s.size}px;animation-duration:${s.spin}s;animation-delay:${-i * 3}s;--tilt:${(i % 3) * 18 - 18}deg`
    const h = s.size / 2
    if (s.kind === 'cube') {
      ;['rotateY(0deg)', 'rotateY(90deg)', 'rotateY(180deg)', 'rotateY(-90deg)', 'rotateX(90deg)', 'rotateX(-90deg)'].forEach((r) =>
        spin.appendChild(face(`${r} translateZ(${h}px)`, s.size, s.size)),
      )
    } else if (s.kind === 'prism') {
      const w = s.size * 0.8
      const r = w / (2 * Math.tan(Math.PI / 3))
      ;[0, 120, 240].forEach((deg) =>
        spin.appendChild(face(`rotateY(${deg}deg) translateZ(${r}px)`, w, s.size, `left:${(s.size - w) / 2}px`)),
      )
    } else {
      ;['rotateY(0deg)', 'rotateY(60deg)', 'rotateY(120deg)', 'rotateX(90deg)'].forEach((t, k) => {
        const ring = document.createElement('span')
        ring.className = 'amb-ring'
        ring.style.cssText = `transform:${t};opacity:${1 - k * 0.14}`
        spin.appendChild(ring)
      })
      const core = document.createElement('span')
      core.className = 'amb-core' + (reduce ? '' : ' amb-animate')
      core.style.cssText = `width:${s.size * 0.14}px;height:${s.size * 0.14}px;left:${s.size * 0.43}px;top:${s.size * 0.43}px`
      spin.appendChild(core)
    }
    float.appendChild(spin)
    stage.appendChild(float)
    return { el: float, depth: s.depth }
  })

  // ── Constelación: la malla P2P ─────────────────────────────────────────
  const canvas = document.createElement('canvas')
  canvas.className = 'amb-stars'
  const vignette = document.createElement('div')
  vignette.className = 'amb-vignette'
  root.append(canvas, stage, vignette)

  // Tranquilo fuera de la portada: el contador del deck dice "01 / 10" en la portada.
  const counter = document.querySelector('.counter')
  const setCalm = () => root.classList.toggle('amb-calm', !!counter && !/^\s*0?1\s*\//.test(counter.textContent || ''))
  if (counter) new MutationObserver(setCalm).observe(counter, { childList: true, characterData: true, subtree: true })
  setCalm()

  const ctx = canvas.getContext('2d')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const COUNT = mobile ? 70 : 140
  const DEPTH = 1000
  let w = 0
  let h = 0
  const peers = []
  const spawn = (p, far = true) => {
    p.x = (Math.random() - 0.5) * 2
    p.y = (Math.random() - 0.5) * 2
    p.z = far ? DEPTH : Math.random() * DEPTH
    p.red = Math.random() > 0.82
  }
  for (let i = 0; i < COUNT; i++) {
    const p = {}
    spawn(p, false)
    peers.push(p)
  }
  const resize = () => {
    w = canvas.clientWidth
    h = canvas.clientHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  resize()
  window.addEventListener('resize', resize)

  let green = ''
  let red = ''
  const readColors = () => {
    const css = getComputedStyle(document.documentElement)
    green = css.getPropertyValue('--accent-green').trim() || '#05D5A1'
    red = css.getPropertyValue('--accent-blue-2').trim() || '#3b82f6'
  }
  readColors()
  new MutationObserver(() => {
    readColors()
    if (reduce) draw(false)
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', readColors)

  // Parallax: puntero (suavizado) + scroll
  let px = 0
  let py = 0
  let tx = 0
  let ty = 0
  let scroll = 0
  if (fine && !reduce) {
    window.addEventListener(
      'pointermove',
      (e) => {
        tx = (e.clientX / window.innerWidth - 0.5) * 2
        ty = (e.clientY / window.innerHeight - 0.5) * 2
      },
      { passive: true },
    )
  }
  const readScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    scroll = max > 0 ? window.scrollY / max : 0
  }
  window.addEventListener('scroll', readScroll, { passive: true })
  readScroll()

  function draw(move) {
    ctx.clearRect(0, 0, w, h)
    const cx = w / 2 + px * 30
    const cy = h / 2 + py * 30
    const pts = []
    for (const p of peers) {
      if (move) {
        p.z -= 1.4
        if (p.z < 1) spawn(p)
      }
      const k = 420 / p.z
      const x = cx + p.x * w * 0.6 * k
      const y = cy + p.y * h * 0.6 * k
      if (x < -20 || x > w + 20 || y < -20 || y > h + 20) {
        if (move) spawn(p)
        continue
      }
      const a = Math.min(1, (1 - p.z / DEPTH) * 1.4)
      const r = Math.max(0.4, 2.2 * (1 - p.z / DEPTH))
      const c = p.red ? red : green
      ctx.globalAlpha = a
      ctx.fillStyle = c
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
      if (a > 0.45) pts.push({ x, y, a, c })
    }
    ctx.lineWidth = 0.6
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
        if (d < 110) {
          ctx.globalAlpha = (1 - d / 110) * 0.35 * Math.min(pts[i].a, pts[j].a)
          ctx.strokeStyle = pts[i].c
          ctx.beginPath()
          ctx.moveTo(pts[i].x, pts[i].y)
          ctx.lineTo(pts[j].x, pts[j].y)
          ctx.stroke()
        }
      }
    }
    ctx.globalAlpha = 1
  }

  function placeFloats() {
    for (const f of floats) {
      const range = 40 * f.depth
      const x = px * range
      const y = py * range - scroll * 260 * f.depth
      f.el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
  }

  if (reduce) {
    draw(false)
  } else {
    let raf = 0
    const loop = () => {
      px += (tx - px) * 0.05
      py += (ty - py) * 0.05
      draw(true)
      placeFloats()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    document.addEventListener('visibilitychange', () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) raf = requestAnimationFrame(loop)
    })
  }
}
