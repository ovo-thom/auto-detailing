export default function PageHero({
  index,
  title,
  accent,
  text,
}: {
  index: string;
  title: string;
  accent: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-[#f7fbfb]">
      <div className="hex-bg absolute right-0 top-0 h-full w-1/3 opacity-80" />
      <div className="container-site relative py-20 md:py-28">
        <p className="eyebrow">{index} / Atelier Nacre</p>
        <h1 className="display max-w-5xl text-5xl sm:text-7xl lg:text-[92px]">
          {title} <span className="text-aqua-dark">{accent}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">{text}</p>
      </div>
    </section>
  );
}
