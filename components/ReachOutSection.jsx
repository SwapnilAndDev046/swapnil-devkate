import { siteConfig } from '@/data/site';
import ContactLink from '@/components/ContactLink';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/icons';

export default function ReachOutSection() {
  return (
    <section id="reach-out" className="border-t border-white/5 py-24 sm:py-28" aria-labelledby="reach-out-title">
      <div className="section-shell">
        <div className="glass overflow-hidden rounded-3xl p-7 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-medium text-violet-300">Reach Out</p>
              <h2 id="reach-out-title" className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Let’s build something useful.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-400">I’m interested in backend development, software engineering opportunities and projects where I can keep learning while building reliable systems.</p>
            </div>
            <div className="grid gap-3">
              <ContactLink icon={MailIcon} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
              <ContactLink icon={LinkedinIcon} label="LinkedIn" value="linkedin.com/in/swapnilsama" href={siteConfig.linkedin} />
              <ContactLink icon={GithubIcon} label="GitHub" value="github.com/SwapnilAndDev046" href={siteConfig.github} />
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-3 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Swapnil Devkate. Built with Next.js + React + Tailwind CSS.</p>
          <a href="#home" className="hover:text-white">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
