import React from "react";

export default function SkillsSection({ t }) {
  return (
    <>
      {/* SECTION DIVIDER PILL: @ ▸ capabilities */}
      <div className="mb-8">
        <div className="glass-pill px-3.5 py-1 rounded-full text-xs font-mono text-neutral-600 dark:text-neutral-400">
          @ ▸ {t.pills.skills}
        </div>
      </div>

      {/* CAPABILITIES / TECH STACK SECTION */}
      <section id="skills" className="w-full mb-16 sm:mb-20 text-left">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {t.skills.title}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            {t.skills.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Backend Module */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-800 shadow-card dark:shadow-card-dark hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <h3 className="font-semibold text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                {t.skills.mod1Title}
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3">
              {t.skills.mod1Sub}
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
              {t.skills.mod1Items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-neutral-300 dark:text-neutral-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend Module */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-800 shadow-card dark:shadow-card-dark hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <h3 className="font-semibold text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                {t.skills.mod2Title}
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3">
              {t.skills.mod2Sub}
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
              {t.skills.mod2Items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-neutral-300 dark:text-neutral-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Data & Storage */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-800 shadow-card dark:shadow-card-dark hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <h3 className="font-semibold text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                {t.skills.mod3Title}
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3">
              {t.skills.mod3Sub}
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
              {t.skills.mod3Items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-neutral-300 dark:text-neutral-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DevOps & Tools */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-800 shadow-card dark:shadow-card-dark hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-neutral-600 dark:bg-neutral-400"></span>
              <h3 className="font-semibold text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                {t.skills.mod4Title}
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3">
              {t.skills.mod4Sub}
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
              {t.skills.mod4Items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-neutral-300 dark:text-neutral-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
