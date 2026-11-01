import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

/**
 * "Touch the cables" — vertical invisible-grill cables that bend away from the
 * pointer and spring back with a damped wobble, like real tensioned wires.
 */
export function CableStrings() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0, H = 0, dpr = 1;
    type Line = { x: number; b: number; v: number; y: number };
    let lines: Line[] = [];
    const pointer = { x: -9999, y: 0, active: false };
    let raf = 0, visible = false, lastAuto = 0, autoX = -1;

    const setup = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = wrap.clientWidth; H = wrap.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + "px"; canvas.style.height = H + "px";
      const gap = W < 640 ? 22 : 30;
      const n = Math.ceil(W / gap) + 1;
      const old = lines;
      lines = Array.from({ length: n }, (_, i) => old[i] ?? { x: 0, b: 0, v: 0, y: H / 2 });
      lines.forEach((l, i) => { l.x = i * gap + (W - (n - 1) * gap) / 2; });
      draw();
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      for (const l of lines) {
        const g = ctx.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, "rgba(176,140,62,0.15)");
        g.addColorStop(0.5, "rgba(158,118,40,0.65)");
        g.addColorStop(1, "rgba(176,140,62,0.15)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(l.x, 0);
        ctx.quadraticCurveTo(l.x + l.b * 2, l.y, l.x, H);
        ctx.stroke();
        // tiny shine on the bent part
        if (Math.abs(l.b) > 1.5) {
          ctx.strokeStyle = "rgba(255,255,255,0.5)";
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(l.x + 0.8, 0);
          ctx.quadraticCurveTo(l.x + 0.8 + l.b * 2, l.y, l.x + 0.8, H);
          ctx.stroke();
        }
      }
    };

    const R = 70;
    const step = (t: number) => {
      // gentle automatic "pluck" sweep so phones and idle visitors see it move
      if (!pointer.active && t - lastAuto > 5500) { lastAuto = t; autoX = -R; }
      let px = pointer.active ? pointer.x : -9999, py = pointer.y;
      if (!pointer.active && autoX > -9999) {
        autoX += W / 90; px = autoX; py = H * 0.5;
        if (autoX > W + R) autoX = -9999;
      }
      let moving = false;
      for (const l of lines) {
        const dx = l.x - px;
        let target = 0;
        if (Math.abs(dx) < R) {
          target = Math.sign(dx || 1) * (R - Math.abs(dx)) * 0.55;
          l.y += (py - l.y) * 0.35;
        }
        const a = 0.09 * (target - l.b) - 0.08 * l.v;
        l.v += a; l.b += l.v;
        if (Math.abs(l.v) > 0.02 || Math.abs(l.b) > 0.05) moving = true;
      }
      draw();
      void moving;
      if (visible) raf = requestAnimationFrame(step);
    };

    const start = () => { if (!raf && !reduce) raf = requestAnimationFrame(step); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };

    const onMove = (cx: number, cy: number) => {
      const r = wrap.getBoundingClientRect();
      pointer.x = cx - r.left; pointer.y = cy - r.top; pointer.active = true;
    };
    const pm = (e: PointerEvent) => onMove(e.clientX, e.clientY);
    const tm = (e: TouchEvent) => { const t = e.touches[0]; if (t) onMove(t.clientX, t.clientY); };
    const leave = () => { pointer.active = false; pointer.x = -9999; };

    const ro = new ResizeObserver(setup);
    ro.observe(wrap);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); }, { threshold: 0.05 });
    io.observe(wrap);
    wrap.addEventListener("pointermove", pm);
    wrap.addEventListener("pointerleave", leave);
    wrap.addEventListener("touchmove", tm, { passive: true });
    wrap.addEventListener("touchend", leave);
    setup();

    return () => {
      stop(); ro.disconnect(); io.disconnect();
      wrap.removeEventListener("pointermove", pm);
      wrap.removeEventListener("pointerleave", leave);
      wrap.removeEventListener("touchmove", tm);
      wrap.removeEventListener("touchend", leave);
    };
  }, []);

  return (
    <section data-no-reveal className="relative overflow-hidden bg-[hsl(40_40%_96%)]">
      <div ref={wrapRef} className="relative h-[560px] sm:h-[600px] cursor-crosshair select-none touch-pan-y">
        <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />
        {/* soft fade at top and bottom */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[hsl(40_40%_96%)] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[hsl(40_40%_96%)] to-transparent pointer-events-none" />

        <div className="relative z-10 h-full flex items-center justify-center px-4 pointer-events-none">
          <div className="text-center max-w-2xl rounded-[2rem] px-6 py-10 sm:px-12 bg-[hsl(40_40%_96%)]/70 backdrop-blur-[2px]">
            <span className="mkr-eyebrow">Go on, touch the cables</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight mb-5">
              Strong enough to <span className="text-secondary">hold up to 400 kg.</span>
              <br className="hidden sm:block" /> Light enough to disappear.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Move your mouse or finger across the cables. Each 316-grade marine steel cable is tensioned by hand, so it flexes, springs back and stays put for years.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["3mm SS 316 cables", "Up to 400 kg load-tested", "15-year warranty", "Rust-free"].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-white border border-border text-sm font-semibold text-foreground shadow-sm">{t}</span>
              ))}
            </div>
            <Link href="/contact-us" className="pointer-events-auto btn-shine inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-xl">
              Book Free Site Visit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
