import { technologyGroups } from '@/data/site';
import SectionHeading from '@/components/SectionHeading';

const technologyIcons = {
  Java: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8.5 18.2c-1.4.3-2.4.8-2.4 1.4 0 .9 2.6 1.6 5.9 1.6s5.9-.7 5.9-1.6c0-.6-1-1.1-2.4-1.4.5.3.8.6.8.9 0 .8-1.9 1.3-4.3 1.3s-4.3-.5-4.3-1.3c0-.3.3-.6.8-.9Z"
      />
      <path
        fill="currentColor"
        d="M9.1 15.4c-1.1.3-1.8.7-1.8 1.2 0 .8 2.1 1.4 4.7 1.4s4.7-.6 4.7-1.4c0-.5-.7-.9-1.8-1.2.3.2.5.5.5.7 0 .6-1.5 1-3.4 1s-3.4-.4-3.4-1c0-.2.2-.5.5-.7Z"
      />
      <path
        fill="currentColor"
        d="M12 3.2c-1.5 1.5-2.2 2.5-2.2 3.6 0 1.1 1 1.9 2.2 2.4-1.7-.2-3.2-1-3.2-2.4 0-1.2 1.2-2.4 3.2-3.6Z"
      />
      <path
        fill="currentColor"
        d="M13.2 9.3c2.1-.4 4.3.2 4.3 1.6 0 1.2-1.7 2-4.1 2.2 1.4-.4 2.2-.9 2.2-1.6 0-.7-.9-1.2-2.4-1.4Z"
      />
      <path
        fill="currentColor"
        d="M7.5 12.3c-.8.3-1.3.7-1.3 1.1 0 .8 2.1 1.5 5.8 1.5s5.8-.7 5.8-1.5c0-.4-.5-.8-1.3-1.1.2.2.3.4.3.6 0 .7-2.1 1.2-4.8 1.2s-4.8-.5-4.8-1.2c0-.2.1-.4.3-.6Z"
      />
    </svg>
  ),

  'Spring Boot': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.2 4.2c-3.5 1.1-6.2.8-8.8-.3C8.8 2.7 6.2 2.6 3.4 4c2.2.4 3.7 1.2 4.8 2.4-2.1-.5-4.2-.3-6.2.7 2.5.4 4.2 1.2 5.5 2.5-1.7-.1-3.4.3-5.1 1.3 2.5.4 4.3 1.3 5.6 2.7 1.3 1.4 1.9 3.2 1.9 5.5 1.4-1.2 2.3-2.8 2.5-4.7 1.6.2 3.2.1 4.7-.5-1.4-.4-2.6-1-3.6-1.8 2.5-.6 4.7-1.9 6.7-3.9.9-.9 1.4-2.1 1.3-4Z"
      />
    </svg>
  ),

  'Spring Security': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M12 3.5 19 6v5.2c0 4.3-2.8 7.8-7 9.3-4.2-1.5-7-5-7-9.3V6l7-2.5Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="m9.3 12 1.8 1.8 3.7-4"
      />
    </svg>
  ),

  Hibernate: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5 3h4.2l5.6 9.2L20 3h-3.8l-3.3 5.5L9.2 3H5Zm0 18h4.1l3.1-5.2L15.4 21H20l-5.8-9.5L5 21Z"
      />
    </svg>
  ),

  'REST API': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 7h10M7 17h10M17 4l3 3-3 3M7 14l-3 3 3 3"
      />
    </svg>
  ),

  PostgreSQL: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M7 7.5c.2-3.2 2.5-4.5 5.1-4.5 2.8 0 5.1 1.6 5.1 5v4.5c0 3.4-1.7 6-4.4 6-1.3 0-2.2-.7-2.2-2v-3.1c0-1.4-.7-2.1-1.8-2.1-1.5 0-2.8-1.2-2.8-3.1V7.5Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M10.6 7.5c1.4-.6 3.2-.6 4.7 0M14.4 14.8c1.3.1 2.5-.2 3.5-.8"
      />
    </svg>
  ),

  MySQL: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M4 17c2.5 1.4 5.1 1.8 7.8 1.2 2.6-.6 4.4-2.2 5.5-4.7"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M6 6.5c1.5-2 4-3.1 6.6-2.8 2.6.3 4.6 1.7 5.8 4.1"
      />
      <circle cx="6" cy="6.5" r="1.5" fill="currentColor" />
      <circle cx="18" cy="8" r="1.5" fill="currentColor" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M15.5 17.5c1.5.1 2.8-.2 4-.9"
      />
    </svg>
  ),

  HTML: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3Z" />
      <path
        fill="#080808"
        d="M8 7h8l-.2 2H10l.2 2h5.4l-.6 6-3 1-3-1-.2-2h2l.1.7 1.1.3 1.1-.3.2-2.7H8.4L8 7Z"
      />
    </svg>
  ),

  CSS: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3Z" />
      <path
        fill="#080808"
        d="M8 7h8l-.2 2h-5.7l.2 2h5.3l-.6 6-3 1-3-1-.2-2h2l.1.7 1.1.3 1.1-.3.2-2.7H8.4L8 7Z"
      />
    </svg>
  ),

  JavaScript: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
      <path
        fill="#080808"
        d="M12 16.8c.4.7 1 1.1 1.8 1.1.7 0 1.1-.3 1.1-.8 0-.6-.4-.8-1.2-1.2l-.4-.2c-1.2-.5-2-1.2-2-2.5 0-1.2 1-2.1 2.5-2.1 1.1 0 1.9.4 2.4 1.4l-1.3.8c-.3-.5-.6-.7-1.1-.7-.5 0-.8.3-.8.6 0 .4.3.6 1 .9l.4.2c1.4.6 2.2 1.3 2.2 2.6 0 1.5-1.2 2.3-2.8 2.3-1.5 0-2.5-.7-3-1.7l1.2-.7Z"
      />
    </svg>
  ),

  React: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.6"
        transform="rotate(60 12 12)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.6"
        transform="rotate(120 12 12)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </svg>
  ),

  Git: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.2 11.3 12.7 2.8a2.4 2.4 0 0 0-3.4 0L7.8 4.3l2.1 2.1a2.3 2.3 0 0 1 2.9 2.9l2 2a2.3 2.3 0 1 1-1.4 1.4l-2-2v5.2a2.3 2.3 0 1 1-1.8 0V10.7a2.3 2.3 0 0 1-1.3-1.3L6.2 7.3l-3.4 3.4a2.4 2.4 0 0 0 0 3.4l8.5 8.5a2.4 2.4 0 0 0 3.4 0l6.5-6.5a2.4 2.4 0 0 0 0-3.4Z"
      />
    </svg>
  ),

  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.8.8-.8-.9-.2-1.9-.5-1.9-2.1 0-.5.2-1 .5-1.3-.1-.2-.2-.7.1-1.3 0 0 1-.3 3.2 1.2a10.7 10.7 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.3.6.2 1.1.1 1.3.3.3.5.8.5 1.3 0 1.6-1 1.9-1.9 2.1.2.2.5.7.5 1.4v2.1c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
      />
    </svg>
  ),

  Maven: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 18.5c3.2-1.5 5.1-3.8 6.1-7 1-3.2 2.8-5.7 5.4-7.1 1.4-.8 3.1-.7 4.5.1-1.2.3-2.1.9-2.8 1.8 1.2-.2 2.5.1 3.5.8-1.2.2-2.2.7-3 1.5 1.2.3 2.2 1 2.8 2-1.2-.2-2.4 0-3.4.6-1.3.8-2.3 2.2-2.9 4.1-.8 2.5-2.5 4.1-5 4.7H3Z"
      />
    </svg>
  ),

  Postman: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="m8 15 5-6 3 3-8 3Zm5-6 1.5-1.5"
      />
    </svg>
  ),

  'IntelliJ IDEA': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        fill="currentColor"
        d="M6 17.5h8v-1.7H6v1.7Zm0-4h5.5v-1.7H6v1.7Zm0-4h8V7.8H6v1.7Z"
      />
    </svg>
  ),
};

const fallbackIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle
      cx="12"
      cy="12"
      r="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M9 12h6M12 9v6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const groupConfig = {
  'Java & Backend': {
    label: '01',
    description: 'Building APIs, business logic and secure backend systems.',
  },
  Databases: {
    label: '02',
    description: 'Working with relational data and application persistence.',
  },
  Frontend: {
    label: '03',
    description: 'Creating clean, responsive interfaces for web applications.',
  },
  Programming: {
    label: '04',
    description: 'Core programming and problem-solving fundamentals.',
  },
  Tools: {
    label: '05',
    description: 'Tools I use to build, test and manage projects.',
  },
};

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden border-t border-white/5 bg-[#080808] py-24 sm:py-28"
      aria-labelledby="technologies-title"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[120px]"
      />

      <div className="section-shell relative">

        <SectionHeading
          eyebrow="My Toolkit"
          title="Technologies I Work With"
          description="A focused stack I use to build backend applications, APIs and responsive web interfaces."
        />

        {/* SEO heading remains */}
        <h2 id="technologies-title" className="sr-only">
          Swapnil Devkate technologies and technical skills
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {technologyGroups.map((group, index) => {
            const config = groupConfig[group.title] || {
              label: String(index + 1).padStart(2, '0'),
              description: 'Technologies I use in my development workflow.',
            };

            return (
              <article
                key={group.title}
                className={`
                  group relative overflow-hidden rounded-2xl
                  border border-white/10
                  bg-white/[0.025]
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-400/25
                  hover:bg-white/[0.04]
                  ${group.title === 'Java & Backend' ? 'md:col-span-2 xl:col-span-2' : ''}
                `}
              >
                {/* Card number */}
                <span className="absolute right-5 top-5 font-mono text-xs text-white/15 transition-colors group-hover:text-violet-300/30">
                  {config.label}
                </span>

                {/* Accent */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/[0.04] blur-3xl transition-all duration-500 group-hover:bg-violet-500/[0.1]" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.08] p-2.5 text-violet-300">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-full w-full"
                        fill="none"
                      >
                        <path
                          d="M6 18 3.5 15.5 6 13M18 6l2.5 2.5L18 11M14 4l-4 16"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {group.title}
                      </h3>

                      <p className="mt-1 max-w-md text-xs leading-5 text-neutral-500">
                        {config.description}
                      </p>
                    </div>
                  </div>

                  {/* Technology pills */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="group/item inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 transition-all duration-200 hover:border-violet-400/25 hover:bg-violet-400/[0.05]"
                      >
                        <span className="h-5 w-5 shrink-0 text-neutral-400 transition-colors group-hover/item:text-violet-300">
                          {technologyIcons[item] || fallbackIcon}
                        </span>

                        <span className="text-xs font-medium text-neutral-300 transition-colors group-hover/item:text-white sm:text-sm">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Small closing statement */}
        <div className="mt-8 flex items-center gap-3 text-xs text-neutral-500">
          <span className="h-px w-8 bg-violet-400/30" />
          <span>Focused on building reliable backend systems.</span>
        </div>
      </div>
    </section>
  );
}