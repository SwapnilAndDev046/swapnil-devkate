import { projects } from '@/data/site';
import SectionHeading from '@/components/SectionHeading';
import { CheckIcon, GithubIcon } from '@/components/icons';

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-white/5 py-24 sm:py-28" aria-labelledby="projects-title">
      <div className="section-shell">
        <SectionHeading
          eyebrow="My Work"
          title="Projects"
          description="A few projects that show how I approach APIs, authentication, databases and real application workflows."
        />

        <h2 id="projects-title" className="sr-only">Swapnil Devkate projects</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="glass card-hover flex h-full flex-col rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">{project.date}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} source code on GitHub`} className="rounded-lg border border-white/10 p-2 text-neutral-400 transition hover:border-white/20 hover:bg-white/5 hover:text-white"><GithubIcon size={17} /></a>
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-400">{project.description}</p>

              <div className="mt-5 space-y-3">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex gap-2 text-sm leading-6 text-neutral-300">
                    <CheckIcon size={16} className="mt-1 shrink-0 text-violet-400" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
