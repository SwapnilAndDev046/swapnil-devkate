export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-300">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-neutral-400 sm:text-lg">{description}</p>
    </div>
  );
}
