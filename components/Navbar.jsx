'use client';

import { useEffect, useState } from 'react';
import { navItems, siteConfig } from '@/data/site';
import { ArrowIcon, CloseIcon, GithubIcon, MenuIcon } from '@/components/icons';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070707]/85 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between sm:h-[72px]">
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="text-left text-base font-semibold tracking-tight text-white"
          aria-label="Go to Swapnil Devkate home"
        >
          Swapnil Devkate<span className="text-violet-400">.</span>
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`nav-link text-sm ${
                activeSection === item.id ? 'active text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-200 transition hover:border-white/20 hover:bg-white/5 sm:flex"
        >
          <GithubIcon size={16} />
          GitHub
          <ArrowIcon size={14} />
        </a>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-neutral-200 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="border-t border-white/5 bg-[#0a0a0a] px-4 pb-4 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 pt-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`rounded-lg px-3 py-3 text-left text-sm transition ${
                  activeSection === item.id
                    ? 'bg-white/5 text-white'
                    : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
