import Link from "next/link";
type CtaProps = {
  eyebrow: string;
  title: string;
  text: string;
  buttonText?: string;
};

export default function Cta({
  eyebrow,
  title,
  text,
  buttonText = "Demander mon devis",
}: CtaProps) {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-aqua px-7 py-16 text-center md:px-16 md:py-20">
          <div className="hex-bg absolute inset-0 opacity-50" />
          <div className="relative">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.24em]">
              {eyebrow}
            </p>
            <h2 className="display mx-auto max-w-3xl text-4xl md:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-black/60">
              {text}
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
