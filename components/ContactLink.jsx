import { ArrowIcon } from '@/components/icons';

export default function ContactLink({ icon: IconComponent, label, value, href }) {
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4 transition hover:border-white/20 hover:bg-white/5"
    >
      <span className="flex min-w-0 items-center gap-3">
        <span className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-violet-300">
          <IconComponent size={18} />
        </span>
        <span className="min-w-0">
          <span className="block text-xs text-neutral-500">{label}</span>
          <span className="block truncate text-sm text-neutral-200 sm:text-base">{value}</span>
        </span>
      </span>
      <ArrowIcon size={16} className="shrink-0 text-neutral-500 transition group-hover:text-white" />
    </a>
  );
}
