'use client'

import { useEffect, useRef } from 'react'

/**
 * Hero canvas — flowing silk threads + tiny drifting "insects"
 * that float across the warm cream background with organic, erratic
 * motion (like gnats or small butterflies catching light).
 */
export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      // Clamp dimensions to prevent memory/GPU issues from extreme values
      canvas.width  = Math.min(Math.max(rect.width,  1), 8192)
      canvas.height = Math.min(Math.max(rect.height, 1), 8192)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // ── Silk threads ─────────────────────────────────────────────
    const LINE_COUNT = 20
    const COLORS = [
      '197,216,109', '168,184,77', '217,212,204',
      '197,216,109', '168,184,77',
    ]
    const lines = Array.from({ length: LINE_COUNT }, (_, i) => ({
      yFrac:     (i / (LINE_COUNT - 1)) * 1.15 - 0.075,
      amp1:      20 + Math.random() * 50,
      amp2:      8  + Math.random() * 20,
      freq1:     0.0018 + Math.random() * 0.0035,
      freq2:     0.0040 + Math.random() * 0.0050,
      speed:     0.18   + Math.random() * 0.28,
      phase1:    Math.random() * Math.PI * 2,
      phase2:    Math.random() * Math.PI * 2,
      opacity:   0.07   + Math.random() * 0.13,
      thickness: 0.5    + Math.random() * 1.0,
      color:     COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    // ── Insect / butterfly particles ──────────────────────────────
    // Small dots that drift with organic, erratic paths
    type Mote = {
      x: number; y: number
      vx: number; vy: number
      // extra wobble frequencies — creates the erratic flutter
      wobbleAmp:   number
      wobbleFreq:  number
      wobblePhase: number
      bobAmp:      number
      bobFreq:     number
      bobPhase:    number
      r:    number   // radius
      opacity: number
      color: string
    }

    const MOTE_COUNT = 18
    let motes: Mote[] = []

    const initMotes = () => {
      const { width, height } = canvas
      motes = Array.from({ length: MOTE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.20,
        wobbleAmp:   3 + Math.random() * 6,
        wobbleFreq:  0.04 + Math.random() * 0.06,
        wobblePhase: Math.random() * Math.PI * 2,
        bobAmp:      2 + Math.random() * 5,
        bobFreq:     0.03 + Math.random() * 0.05,
        bobPhase:    Math.random() * Math.PI * 2,
        r:       0.8 + Math.random() * 1.4,
        opacity: 0.12 + Math.random() * 0.22,
        color:   Math.random() > 0.4 ? '168,184,77' : '197,216,109',
      }))
    }
    initMotes()

    const draw = () => {
      t += 0.7
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      // ── Draw silk threads ─────────────────────────────────────
      lines.forEach(ln => {
        const yBase = ln.yFrac * height
        const grad = ctx.createLinearGradient(0, 0, width, 0)
        grad.addColorStop(0.00, `rgba(${ln.color},0)`)
        grad.addColorStop(0.08, `rgba(${ln.color},${ln.opacity})`)
        grad.addColorStop(0.92, `rgba(${ln.color},${ln.opacity})`)
        grad.addColorStop(1.00, `rgba(${ln.color},0)`)

        ctx.beginPath()
        ctx.strokeStyle = grad
        ctx.lineWidth   = ln.thickness
        ctx.lineCap     = 'round'
        for (let x = 0; x <= width; x += 4) {
          const y = yBase
            + Math.sin(x * ln.freq1 + t * ln.speed * 0.012 + ln.phase1) * ln.amp1
            + Math.sin(x * ln.freq2 + t * ln.speed * 0.007 + ln.phase2) * ln.amp2
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      })

      // ── Draw insect motes ──────────────────────────────────────
      motes.forEach(m => {
        // Organic flutter: wobble left-right + bob up-down
        const wx = Math.sin(t * m.wobbleFreq + m.wobblePhase) * m.wobbleAmp
        const wy = Math.sin(t * m.bobFreq    + m.bobPhase)    * m.bobAmp

        // Drift slowly
        m.x += m.vx
        m.y += m.vy

        // Wrap around edges so they never disappear
        if (m.x < -10)        m.x = width  + 10
        if (m.x > width  + 10) m.x = -10
        if (m.y < -10)        m.y = height + 10
        if (m.y > height + 10) m.y = -10

        const px = m.x + wx
        const py = m.y + wy

        // Soft glow corona
        const glow = ctx.createRadialGradient(px, py, 0, px, py, m.r * 4)
        glow.addColorStop(0, `rgba(${m.color},${m.opacity * 0.5})`)
        glow.addColorStop(1, `rgba(${m.color},0)`)
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(px, py, m.r * 4, 0, Math.PI * 2)
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(px, py, m.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${m.color},${m.opacity})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
