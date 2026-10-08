const technologyIcons = {
  Java: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
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

  "Spring Boot": (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <path
        fill="currentColor"
        d="M20.2 4.2c-3.5 1.1-6.2.8-8.8-.3C8.8 2.7 6.2 2.6 3.4 4c2.2.4 3.7 1.2 4.8 2.4-2.1-.5-4.2-.3-6.2.7 2.5.4 4.2 1.2 5.5 2.5-1.7-.1-3.4.3-5.1 1.3 2.5.4 4.3 1.3 5.6 2.7 1.3 1.4 1.9 3.2 1.9 5.5 1.4-1.2 2.3-2.8 2.5-4.7 1.6.2 3.2.1 4.7-.5-1.4-.4-2.6-1-3.6-1.8 2.5-.6 4.7-1.9 6.7-3.9.9-.9 1.4-2.1 1.3-4Z"
      />
    </svg>
  ),

  "Spring Security": (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
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

  "REST API": (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <path
        d="M7 7h10M7 17h10M17 4l3 3-3 3M7 14l-3 3 3 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  JPA: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 8h8M8 12h5M8 16h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="17" cy="16" r="1" fill="currentColor" />
    </svg>
  ),

  Hibernate: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <path
        fill="currentColor"
        d="M5 3h4.2l5.6 9.2L20 3h-3.8l-3.3 5.5L9.2 3H5Zm0 18h4.1l3.1-5.2L15.4 21H20l-5.8-9.5L5 21Z"
      />
    </svg>
  ),

  JDBC: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <ellipse
        cx="12"
        cy="6"
        rx="7"
        ry="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),

  Flyway: (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
    <path
      d="M5 5h14M5 12h10M5 19h14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="m15 9 3 3-3 3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
),

  PostgreSQL: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
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
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <path
        d="M5 7c2-2.2 5-3.2 8-2.5 2.7.6 4.8 2.4 6 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5 17c2.2 1.4 4.8 1.7 7.3.9 2.7-.8 4.7-2.7 5.7-5.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="5" cy="7" r="1.5" fill="currentColor" />
      <circle cx="19" cy="9.5" r="1.5" fill="currentColor" />
      <circle cx="5" cy="17" r="1.5" fill="currentColor" />
    </svg>
  ),

  Git: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <path
        fill="currentColor"
        d="M21.2 11.3 12.7 2.8a2.4 2.4 0 0 0-3.4 0L7.8 4.3l2.1 2.1a2.3 2.3 0 0 1 2.9 2.9l2 2a2.3 2.3 0 1 1-1.4 1.4l-2-2v5.2a2.3 2.3 0 1 1-1.8 0V10.7a2.3 2.3 0 0 1-1.3-1.3L6.2 7.3l-3.4 3.4a2.4 2.4 0 0 0 0 3.4l8.5 8.5a2.4 2.4 0 0 0 3.4 0l6.5-6.5a2.4 2.4 0 0 0 0-3.4Z"
      />
    </svg>
  ),

  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <path
        fill="currentColor"
        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.8.8-.8-.9-.2-1.9-.5-1.9-2.1 0-.5.2-1 .5-1.3-.1-.2-.2-.7.1-1.3 0 0 1-.3 3.2 1.2a10.7 10.7 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.3.6.2 1.1.1 1.3.3.3.5.8.5 1.3 0 1.6-1 1.9-1.9 2.1.2.2.5.7.5 1.4v2.1c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
      />
    </svg>
  ),

  Postman: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m8 15 5-6 3 3-8 3Zm5-6 1.5-1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  "IntelliJ IDEA": (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
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
      d="M6 17.5h8M6 13.5h5.5M6 9.5h8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <circle
      cx="17.5"
      cy="17"
      r="1.5"
      fill="currentColor"
    />
  </svg>
),
};

const groups = [
  {
    title: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'REST API',
      'JPA',
      'Hibernate',
      'JDBC',
      'Flyway',
    ],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA'],
  },
];

function TechnologyItem({ name }) {
  return (
    <div
      className="
        group/item flex items-center gap-3
        rounded-xl border border-white/8
        bg-white/[0.025]
        px-3.5 py-3
        transition-all duration-200
        hover:-translate-y-0.5
        hover:border-violet-400/25
        hover:bg-violet-400/[0.05]
      "
    >
      <span
        className="
          flex h-8 w-8 shrink-0 items-center justify-center
          rounded-lg border border-white/8
          bg-white/[0.035]
          p-1.5
          text-neutral-400
          transition-colors duration-200
          group-hover/item:text-violet-300
        "
      >
        {technologyIcons[name]}
      </span>

      <span
        className="
          text-sm font-medium text-neutral-300
          transition-colors duration-200
          group-hover/item:text-white
        "
      >
        {name}
      </span>
    </div>
  );
}

function TechnologyCard({ title, items, large = false }) {
  return (
    <article
      className={`
        group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-white/[0.025]
        p-6 sm:p-7
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-400/25
        hover:bg-white/[0.04]
        ${large ? 'lg:col-span-2' : ''}
      `}
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-20 -top-20
          h-40 w-40 rounded-full
          bg-violet-500/[0.05]
          blur-3xl
          transition-all duration-500
          group-hover:bg-violet-500/[0.09]
        "
      />

      <div className="relative">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-7 bg-violet-400/40" />

          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-300">
            {title}
          </h3>
        </div>

        <div
          className={`
            grid gap-2.5
            ${
              large
                ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'sm:grid-cols-2'
            }
          `}
        >
          {items.map((item) => (
            <TechnologyItem key={item} name={item} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function TechnologiesSection() {
  const backend = groups.find((group) => group.title === 'Backend');
  const databases = groups.find((group) => group.title === 'Databases');
  const tools = groups.find((group) => group.title === 'Tools');

  return (
    <section
      id="technologies"
      className="
        relative overflow-hidden
        border-t border-white/5
        bg-[#080808]
        py-24 sm:py-28
      "
      aria-labelledby="technologies-title"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-0
          h-72 w-72 -translate-x-1/2
          rounded-full
          bg-violet-600/[0.06]
          blur-[120px]
        "
      />

      <div className="section-shell relative">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-violet-300">
            Technologies
          </p>

          <h2
            id="technologies-title"
            className="
              text-3xl font-bold tracking-tight text-white
              sm:text-4xl
            "
          >
            Technologies I Work With
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            My core stack for building secure backend applications, REST APIs
            and database-driven systems with Java and Spring Boot.
          </p>
        </div>

        {/* Technology cards */}
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <TechnologyCard
            title={backend.title}
            items={backend.items}
            large
          />

          <TechnologyCard
            title={databases.title}
            items={databases.items}
          />

          <TechnologyCard
            title={tools.title}
            items={tools.items}
          />
        </div>
      </div>
    </section>
  );
}