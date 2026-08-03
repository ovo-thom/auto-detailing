export default function SectionTitle({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : ""}>
      <p className={`eyebrow ${center ? "before:hidden" : ""}`}>{eyebrow}</p>
      <h2 className="display text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {text && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-black/55">
          {text}
        </p>
      )}
    </div>
  );
}
