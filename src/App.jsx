import React, { useState, useEffect } from "react";
import "./App.css";
import avt from "./assets/avt.jpg";
import SimpleModal from "./components/SimpleModal";
import TechBadge from "./components/TechBadge";
import { translations, projectDetailsDict } from "./translations";

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "vi");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [transmitting, setTransmitting] = useState(false);
  const [transmittedToast, setTransmittedToast] = useState(false);

  const t = translations[lang] || translations.vi;

  // Sync theme with html root class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Sync language with localStorage
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "vi" : "en"));
  };

  const openModal = (projectId) => {
    const pData = projectDetailsDict[projectId]?.[lang] || projectDetailsDict[projectId]?.en;
    setSelectedProject(pData);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setTransmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/pndaiduong1912@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `[Portfolio Contact] New message from ${formData.name}`
        })
      });

      if (response.ok) {
        setTransmittedToast(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const mailtoUrl = `mailto:pndaiduong1912@gmail.com?subject=${encodeURIComponent(
          `[Portfolio] Message from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Sender: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setTransmittedToast(true);
      }
    } catch {
      const mailtoUrl = `mailto:pndaiduong1912@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Sender: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setTransmittedToast(true);
    } finally {
      setTransmitting(false);
      setTimeout(() => setTransmittedToast(false), 6000);
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-neutral-900 dark:text-neutral-100 flex flex-col items-center px-4 sm:px-6 md:px-8 py-10 sm:py-16 transition-colors duration-300">
      {/* Top Floating Control Bar */}
      <header className="w-full max-w-2xl flex justify-between items-center mb-14 sm:mb-20">
        {/* Status Pill matching @ ▸ about */}
        <div className="glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm text-xs font-mono text-neutral-600 dark:text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>@ ▸ duong.dev</span>
        </div>

        {/* Action Controls: Theme & Language Switchers */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="glass-pill px-3 py-1.5 rounded-full text-xs font-mono font-medium hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors shadow-sm flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300"
            title={lang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
          >
            <span className="material-symbols-outlined text-sm">translate</span>
            <span className="font-semibold">{lang === "en" ? "EN" : "VI"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="glass-pill w-8 h-8 rounded-full flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors shadow-sm"
            aria-label="Toggle Theme"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            <span className="material-symbols-outlined text-base">
              {theme === "light" ? "dark_mode" : "light_mode"}
            </span>
          </button>
        </div>
      </header>

      {/* Main Centered Content Column */}
      <main className="w-full max-w-2xl flex flex-col items-center">
        {/* HERO SECTION (Reference Style) */}
        <section id="hero" className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Circular Portrait */}
          <div className="relative mb-5 group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-neutral-300/80 dark:border-neutral-700 shadow-md p-1 bg-white dark:bg-neutral-900 transition-transform duration-300 group-hover:scale-105">
              <img
                src={avt}
                alt={t.hero.name}
                className="w-full h-full object-cover rounded-full grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
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
                className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-amber-400 text-neutral-950 flex items-center justify-center shadow-md font-mono font-bold text-sm sm:text-base md:text-lg focus:outline-none"
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
                className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md focus:outline-none"
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
                className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-neutral-900 dark:bg-neutral-800 text-white flex items-center justify-center shadow-md focus:outline-none"
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
                className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-md focus:outline-none"
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
                className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-[#24292e] text-white flex items-center justify-center shadow-md focus:outline-none"
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
                className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-[#0a66c2] text-white flex items-center justify-center shadow-md font-bold text-xs sm:text-sm md:text-base focus:outline-none"
                aria-label={t.dock.linkedin}
              >
                in
              </a>
              <div className="dock-tooltip">{t.dock.linkedin}</div>
            </div>



            {/* 8. Email */}
            <div className="dock-item">
              <button
                onClick={() => scrollTo("contact")}
                className="app-squircle w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[12px] sm:rounded-[15px] md:rounded-2xl bg-[#00c7be] text-white flex items-center justify-center shadow-md focus:outline-none"
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

        {/* SECTION DIVIDER PILL: @ ▸ selected projects */}
        <div className="mb-8">
          <div className="glass-pill px-3.5 py-1 rounded-full text-xs font-mono text-neutral-600 dark:text-neutral-400">
            @ ▸ {t.pills.projects}
          </div>
        </div>

        {/* FEATURED PROJECTS SHOWCASE */}
        <section id="projects" className="w-full mb-16 sm:mb-20 text-left space-y-6">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {t.projects.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {t.projects.desc}
            </p>
          </div>

          {/* Project 1: SmartHire */}
          <div className="bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-neutral-200/80 dark:border-neutral-800 shadow-card dark:shadow-card-dark hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                {t.projects.p1Tag}
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                {t.projects.p1Date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-1">
              {t.projects.p1Title}{" "}
              <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                — {t.projects.p1Sub}
              </span>
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 text-justify">
              {t.projects.p1Desc}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {t.projects.p1Tech.map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                onClick={() => openModal("smarthire")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm"
              >
                <span className="material-symbols-outlined text-base">play_circle</span>
                <span>{t.projects.btnStream}</span>
              </button>
              <a
                href="https://github.com/duongphan2101/SmartHire.git"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <span>{t.projects.btnGithubRepo}</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          </div>

          {/* Project 2: VChat */}
          <div className="bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-neutral-200/80 dark:border-neutral-800 shadow-card dark:shadow-card-dark hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                {t.projects.p2Tag}
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                {t.projects.p2Date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-1">
              {t.projects.p2Title}{" "}
              <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                — {t.projects.p2Sub}
              </span>
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 text-justify">
              {t.projects.p2Desc}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {t.projects.p2Tech.map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                onClick={() => openModal("vchat")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm"
              >
                <span className="material-symbols-outlined text-base">play_circle</span>
                <span>{t.projects.btnStream}</span>
              </button>
              <a
                href="https://github.com/duongphan2101/CongNgheMoi_ChattingApp.git"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <span>{t.projects.btnGithubRepo}</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          </div>

          {/* Project 3: HDND Store */}
          <div className="bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-neutral-200/80 dark:border-neutral-800 shadow-card dark:shadow-card-dark hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {t.projects.p3Tag}
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                {t.projects.p3Date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-1">
              {t.projects.p3Title}{" "}
              <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                — {t.projects.p3Sub}
              </span>
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 text-justify">
              {t.projects.p3Desc}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {t.projects.p3Tech.map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                onClick={() => openModal("hdnd")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm"
              >
                <span className="material-symbols-outlined text-base">play_circle</span>
                <span>{t.projects.btnStream}</span>
              </button>
              <a
                href="https://github.com/DucNhat03/SoftwareArchitecture_HDNDStore.git"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <span>{t.projects.btnGithubRepo}</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          </div>

          {/* Project 4: Video Sharing App */}
          <div className="bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-neutral-200/80 dark:border-neutral-800 shadow-card dark:shadow-card-dark hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                {t.projects.p4Tag}
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                {t.projects.p4Date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-1">
              {t.projects.p4Title}{" "}
              <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                — {t.projects.p4Sub}
              </span>
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 text-justify">
              {t.projects.p4Desc}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {t.projects.p4Tech.map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                onClick={() => openModal("videosharing")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm"
              >
                <span className="material-symbols-outlined text-base">play_circle</span>
                <span>{t.projects.btnStream}</span>
              </button>
              <a
                href="https://github.com/duongphan2101/VideoSharingApp.git"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <span>{t.projects.btnGithubRepo}</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION DIVIDER PILL: @ ▸ contact */}
        <div className="mb-8">
          <div className="glass-pill px-3.5 py-1 rounded-full text-xs font-mono text-neutral-600 dark:text-neutral-400">
            @ ▸ {t.pills.contact}
          </div>
        </div>

        {/* CONTACT SECTION */}
        <section id="contact" className="w-full mb-16 text-left">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {t.contact.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {t.contact.desc}
            </p>
          </div>

          <div className="bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-card dark:shadow-card-dark">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  {t.contact.formName}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.formNamePh}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700/80 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  {t.contact.formEmail}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.formEmailPh}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700/80 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  {t.contact.formMsg}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.formMsgPh}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700/80 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end items-center">
                <button
                  type="submit"
                  disabled={transmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 disabled:opacity-50 transition-opacity shadow-sm"
                >
                  {transmitting ? (
                    <>
                      <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                      <span>{t.contact.btnTransmitting}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.contact.btnSubmit}</span>
                      <span className="material-symbols-outlined text-sm">send</span>
                    </>
                  )}
                </button>
              </div>

              {transmittedToast && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>{t.contact.toastSuccess}</span>
                </div>
              )}
            </form>
          </div>
        </section>

        {/* MINIMAL FOOTER */}
        <footer className="w-full py-8 border-t border-neutral-200/60 dark:border-neutral-800 text-center text-xs text-neutral-400 dark:text-neutral-500 space-y-1">
          <div>{t.footer.madeWith}</div>
          <div className="font-mono text-[11px]">{t.footer.copyright}</div>
        </footer>
      </main>

      {/* Demo Video Modal */}
      <SimpleModal
        show={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
        lang={lang}
      />
    </div>
  );
}

export default App;
