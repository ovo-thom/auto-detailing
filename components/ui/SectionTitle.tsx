import { PaintBrushIcon } from "@heroicons/react/24/outline";

export default function SectionTitle({
  eyebrow,
  title,
  text,
  center = false,
  showBrush = true,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  showBrush?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : ""}>
      <p className={`eyebrow before:hidden ${center ? "justify-center" : ""}`}>
        {showBrush && (
          <PaintBrushIcon
            aria-hidden="true"
            className="h-6 w-6 shrink-0 text-aqua-dark"
          />
        )}

        <span>{eyebrow}</span>
      </p>

      <h2 className="display text-4xl sm:text-5xl lg:text-6xl">{title}</h2>

      {text && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-black/55">
          {text}
        </p>
      )}
    </div>
  );
}
