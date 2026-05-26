"use client";

import React, { useEffect, useRef } from "react";

export default function RainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Drop = { x: number; y: number; speed: number; length: number; opacity: number };
    const drops: Drop[] = Array.from({ length: 70 }, () => ({
      x:       Math.random() * window.innerWidth,
      y:       Math.random() * window.innerHeight,
      speed:   3.5 + Math.random() * 4.5,
      length:  10 + Math.random() * 18,
      opacity: 0.04 + Math.random() * 0.04,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#9bb5c2";
      ctx.lineWidth = 0.8;

      drops.forEach((d) => {
        ctx.globalAlpha = d.opacity;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - d.length * 0.18, d.y + d.length);
        ctx.stroke();

        d.y += d.speed;
        if (d.y > canvas.height + d.length) {
          d.y = -d.length;
          d.x = Math.random() * canvas.width;
        }
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
