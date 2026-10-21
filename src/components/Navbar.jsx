import React from "react";

export default function Navbar({ lang, toggleLang, theme, toggleTheme }) {
  return (
    <header className="w-full max-w-2xl flex justify-between items-center mb-14 sm:mb-20">
      {/* Status Pill matching @ ▸ duong.dev */}
      <div className="glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm text-xs font-mono text-neutral-600 dark:text-neutral-300">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>@ ▸ duong.dev</span>
      </div>

      {/* Action Controls: Theme & Language Switchers */}
      <div className="flex items-center gap-2">
        {/* Language Switcher */}
        <button
          onClick={toggleLang}
          className="glass-pill px-3 py-1.5 rounded-full text-xs font-mono font-medium hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors shadow-sm flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 cursor-pointer"
          title={lang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
        >
          <span className="material-symbols-outlined text-sm">translate</span>
          <span className="font-semibold">{lang === "en" ? "EN" : "VI"}</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="glass-pill w-8 h-8 rounded-full flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
          aria-label="Toggle Theme"
          title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
          <span className="material-symbols-outlined text-base">
            {theme === "light" ? "dark_mode" : "light_mode"}
          </span>
        </button>
      </div>
    </header>
  );
}
