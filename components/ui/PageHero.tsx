import { PaintBrushIcon } from "@heroicons/react/24/outline";

export default function PageHero({
  eyebrow,
  title,
  accent,
  text,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-[#f7fbfb]">
      <div className="hex-bg absolute right-0 top-0 h-full w-1/3 opacity-80" />
      <div className="container-site relative py-12 md:py-16 lg:py-24">
        <p className="eyebrow">
          <PaintBrushIcon
            aria-hidden="true"
            className="h-6 w-6 shrink-0 text-aqua-dark"
          />
          {eyebrow}
        </p>
        <h1 className="display max-w-5xl text-[2.1rem] leading-[0.94] sm:text-6xl md:text-7xl lg:text-[92px]">
          {title} <span className="text-aqua-dark">{accent}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-black/55">
          {text}
        </p>
      </div>
    </section>
  );
}
