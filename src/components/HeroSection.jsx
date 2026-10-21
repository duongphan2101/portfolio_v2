import React from "react";
import avt from "../assets/avt.webp";

export default function HeroSection({ t, scrollTo }) {
  return (
    <section id="hero" className="flex flex-col items-center text-center mb-12 sm:mb-16">
      {/* Circular Portrait with optimized WebP avatar */}
      <div className="relative mb-5 group">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-neutral-300/80 dark:border-neutral-700 shadow-md p-1 bg-white dark:bg-neutral-900 transition-transform duration-300 group-hover:scale-105">
          <img
            src={avt}
            alt={t.hero.name}
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-full grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        {/* Status dot badge */}
        <span
          className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-900"
          title={t.hero.statusBadge}
        ></span>
      </div>

      {/* Subtitle / Name */}
      <div className="text-sm sm:text-base font-medium text-neutral-500 dark:text-neutral-400 mb-3 tracking-normal">
        {t.hero.name}
      </div>

      {/* Main Large Display Headline with Inline Stack Glyph */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 max-w-xl leading-[1.12] mb-10">
        <span>{t.hero.headlinePrefix} </span>
        <span className="inline-flex items-center align-middle mx-1 -translate-y-0.5 text-neutral-800 dark:text-neutral-200">
          <svg
            className="w-7 h-7 sm:w-10 sm:h-10 inline-block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </span>
        <br />
        <span>{t.hero.headlineSuffix}</span>
      </h1>

      {/* FLOATING TACTILE DOCK (The Standout Anchor Feature) */}
      <div className="glass-dock p-2 sm:p-2.5 md:p-3 rounded-[24px] sm:rounded-[28px] flex items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3.5 max-w-full overflow-visible relative">
        {/* 1. Terminal / Bio */}
        <div className="dock-item">
          <button
            onClick={() => scrollTo("story")}
            className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-amber-400 text-neutral-950 flex items-center justify-center shadow-md font-mono font-bold text-sm sm:text-base md:text-lg focus:outline-none cursor-pointer"
            aria-label={t.dock.bio}
          >
            &gt;_
          </button>
          <div className="dock-tooltip">{t.dock.bio}</div>
        </div>

        {/* 2. Web / Live Demos */}
        <div className="dock-item">
          <button
            onClick={() => scrollTo("projects")}
            className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md focus:outline-none cursor-pointer"
            aria-label={t.dock.web}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
            </svg>
          </button>
          <div className="dock-tooltip">{t.dock.web}</div>
        </div>

        {/* 3. Tech Stack / Skills */}
        <div className="dock-item">
          <button
            onClick={() => scrollTo("skills")}
            className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-neutral-900 dark:bg-neutral-800 text-white flex items-center justify-center shadow-md focus:outline-none cursor-pointer"
            aria-label={t.dock.skills}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="dock-tooltip">{t.dock.skills}</div>
        </div>

        {/* 4. Projects Directory */}
        <div className="dock-item">
          <button
            onClick={() => scrollTo("projects")}
            className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-md focus:outline-none cursor-pointer"
            aria-label={t.dock.projects}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" strokeWidth="2" />
            </svg>
          </button>
          <div className="dock-tooltip">{t.dock.projects}</div>
        </div>

        {/* 5. GitHub */}
        <div className="dock-item">
          <a
            href="https://github.com/duongphan2101"
            target="_blank"
            rel="noreferrer"
            className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-[#24292e] text-white flex items-center justify-center shadow-md focus:outline-none cursor-pointer"
            aria-label={t.dock.github}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <div className="dock-tooltip">{t.dock.github}</div>
        </div>

        {/* 6. LinkedIn */}
        <div className="dock-item">
          <a
            href="https://www.linkedin.com/in/phan-nguyen-dai-duong-1a2138309/"
            target="_blank"
            rel="noreferrer"
            className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-[#0a66c2] text-white flex items-center justify-center shadow-md font-bold text-xs sm:text-sm md:text-base focus:outline-none cursor-pointer"
            aria-label={t.dock.linkedin}
          >
            in
          </a>
          <div className="dock-tooltip">{t.dock.linkedin}</div>
        </div>

        {/* 7. Email */}
        <div className="dock-item">
          <button
            onClick={() => scrollTo("contact")}
            className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-[#00c7be] text-white flex items-center justify-center shadow-md focus:outline-none cursor-pointer"
            aria-label={t.dock.email}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" />
              <polyline points="22,6 12,13 2,6" strokeWidth="2" />
            </svg>
          </button>
          <div className="dock-tooltip">{t.dock.email}</div>
        </div>
      </div>
    </section>
  );
}
