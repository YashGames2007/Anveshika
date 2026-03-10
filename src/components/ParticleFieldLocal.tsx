import { useEffect, useRef } from "react";

interface ParticleFieldLocalProps {
  width: number;
  height: number;
  className?: string;
  particleCount?: number;
  /** Hex color values: first one is most common, second is less common (e.g., 70/30 split) */
  starColors?: string[];
  /** Optional weights matching `starColors`. Must sum to 1. */
  starWeights?: number[];
}

const hexToRgb = (hex: string) => {
  const cleaned = hex.replace("#", "");
  const bigint = parseInt(cleaned, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

const pickWeightedIndex = (weights: number[]) => {
  const sum = weights.reduce((a, b) => a + b, 0);
  const normalized = weights.map((w) => w / sum);
  const rand = Math.random();
  let acc = 0;
  for (let i = 0; i < normalized.length; i++) {
    acc += normalized[i];
    if (rand < acc) return i;
  }
  return normalized.length - 1;
};

const ParticleFieldLocal = ({
  width,
  height,
  className = "",
  particleCount = 50,
  starColors = ["#8f1f25", "#f7f2e7"],
  starWeights = [0.7, 0.3],
}: ParticleFieldLocalProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width <= 0 || height <= 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const baseColors = starColors.map(hexToRgb);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; base: { r: number; g: number; b: number } }[] = [];
    for (let i = 0; i < particleCount; i++) {
      const base = baseColors[pickWeightedIndex(starWeights)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.35 + 0.4,
        base,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.base.r}, ${p.base.g}, ${p.base.b}, ${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const avgR = Math.round((particles[i].base.r + particles[j].base.r) / 2);
            const avgG = Math.round((particles[i].base.g + particles[j].base.g) / 2);
            const avgB = Math.round((particles[i].base.b + particles[j].base.b) / 2);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${avgR}, ${avgG}, ${avgB}, ${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animId);
  }, [width, height, particleCount]);

  return <canvas ref={canvasRef} width={width} height={height} className={className} aria-hidden />;
};

export default ParticleFieldLocal;
