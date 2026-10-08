'use client';

import { siteConfig } from '@/data/site';
import { ArrowIcon, CheckIcon, DownIcon, GithubIcon, LinkedinIcon, MailIcon } from '@/components/icons';

const focusAreas = [
  'Secure REST APIs',
  'Transaction-based systems',
  'Clean Java backends',
  'Database-driven applications',
];

export default function HomeSection() {
  function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section id="home" className="grid-bg relative flex min-h-screen items-center pt-20 sm:pt-24" aria-labelledby="home-title">
      <div className="section-shell grid items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <div>
          <p className="mb-4 flex items-center gap-2 text-sm font-medium text-violet-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.7)]" />
            Open to opportunities
          </p>
          <p className="mb-3 text-base text-neutral-400">Hello Everyone, Myself</p>
          <h1 id="home-title" className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Swapnil <span className="text-gradient">Devkate</span>
          </h1>
          <p className="mt-5 text-xl font-medium text-neutral-200 sm:text-2xl">Computer Engineer  • Backend Developer</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            Computer Engineering graduate focused on building secure, scalable REST APIs and practical backend systems using Java and the Spring ecosystem.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              View Projects
              <DownIcon size={16} />
            </button>
            <a
              href={siteConfig.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/5"
            >
              Download Resume
              <ArrowIcon size={15} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3" aria-label="Social links">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="Swapnil Devkate on GitHub" className="rounded-lg border border-white/10 p-2.5 text-neutral-400 transition hover:border-white/20 hover:bg-white/5 hover:text-white"><GithubIcon size={18} /></a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="Swapnil Devkate on LinkedIn" className="rounded-lg border border-white/10 p-2.5 text-neutral-400 transition hover:border-white/20 hover:bg-white/5 hover:text-white"><LinkedinIcon size={18} /></a>
            <a href={`mailto:${siteConfig.email}`} aria-label={`Email Swapnil Devkate at ${siteConfig.email}`} className="rounded-lg border border-white/10 p-2.5 text-neutral-400 transition hover:border-white/20 hover:bg-white/5 hover:text-white"><MailIcon size={18} /></a>
          </div>
        </div>

        {/* Keep the square developer card: it is one of the strongest visual elements in the design. */}
        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -inset-8 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between text-xs text-neutral-500">
              <span>swapnil@developer:~$</span>
              <span className="font-mono">01</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="font-mono text-sm text-violet-300">// what I enjoy building</p>
              <div className="mt-5 space-y-4">
                {focusAreas.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-neutral-200 sm:text-base">
                    <CheckIcon size={18} className="shrink-0 text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-neutral-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Learning. Building. Improving.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
