"use client";
import { useState } from "react";
export default function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [pos, setPos] = useState(50);
  return (
    <div className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 shadow-soft">
        <img
          src={after}
          alt={`${label} après`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt={`${label} avant`}
            className="absolute inset-y-0 left-0 h-full w-full max-w-none object-cover "
            style={{ width: `${10000 / pos}%` }}
          />
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          Avant
        </div>
        <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
          Après
        </div>
        <div
          className="pointer-events-none absolute bottom-0 top-0 w-px bg-white"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-sm shadow">
            ↔
          </span>
        </div>
        <input
          aria-label="Comparer avant et après"
          type="range"
          min="2"
          max="98"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-4 font-display text-xl font-bold">{label}</p>
    </div>
  );
}
