import React from "react";

export default function StorySection({ t }) {
  return (
    <>
      {/* SECTION DIVIDER PILL: @ ▸ story */}
      <div className="mb-8">
        <div className="glass-pill px-3.5 py-1 rounded-full text-xs font-mono text-neutral-600 dark:text-neutral-400">
          @ ▸ {t.pills.about}
        </div>
      </div>

      {/* STORY / ABOUT SECTION (Editorial Reading matching the photo) */}
      <section id="story" className="w-full text-justify [text-align-last:left] space-y-5 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 mb-16 sm:mb-20">
        <div className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2 text-left">
          {t.hero.greeting}
        </div>

        <p className="text-justify">{t.hero.storyP1}</p>

        <p className="text-justify">{t.hero.storyP2}</p>

        <p className="text-justify">{t.hero.storyP3}</p>

        <p className="text-justify">{t.hero.storyP4}</p>

        {/* Let's connect links block */}
        <div className="pt-4">
          <div className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            {t.hero.letsConnect}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono">
            <a
              href="tel:0931039421"
              className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4"
            >
              <span>↗</span> {t.hero.phone}
            </a>
            <a
              href="https://www.linkedin.com/in/phan-nguyen-dai-duong-1a2138309/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4"
            >
              <span>↗</span> {t.hero.linkedin}
            </a>
            <a
              href="mailto:pndaiduong1912@gmail.com"
              className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4"
            >
              <span>↗</span> {t.hero.email}
            </a>
            <a
              href="https://github.com/duongphan2101"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4"
            >
              <span>↗</span> {t.hero.github}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
