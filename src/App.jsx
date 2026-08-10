import React, { useState, useEffect } from "react";
import "./App.css";
import avt from "./assets/avt.jpg";
import SimpleModal from "./components/SimpleModal";
import { translations, projectDetailsDict } from "./translations";

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact Form state
  const [formData, setFormData] = useState({
    identity: "",
    comm_link: "",
    payload: ""
  });
  const [transmitting, setTransmitting] = useState(false);
  const [transmittedToast, setTransmittedToast] = useState(false);

  const t = translations[lang] || translations.en;

  const toggleLang = () => {
    const nextLang = lang === "en" ? "vi" : "en";
    setLang(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  const openModal = (projectId) => {
    const pData = projectDetailsDict[projectId]?.[lang] || projectDetailsDict[projectId]?.en;
    setSelectedProject(pData);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 250;

      for (let sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setTransmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/pndaiduong1912@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.identity,
          email: formData.comm_link,
          message: formData.payload,
          _subject: `[Portfolio Contact] New message from ${formData.identity}`
        })
      });

      if (response.ok) {
        setTransmittedToast(true);
        setFormData({ identity: "", comm_link: "", payload: "" });
      } else {
        const mailtoUrl = `mailto:pndaiduong1912@gmail.com?subject=${encodeURIComponent(`[Portfolio] Message from ${formData.identity}`)}&body=${encodeURIComponent(`Sender: ${formData.identity}\nEmail: ${formData.comm_link}\n\n${formData.payload}`)}`;
        window.location.href = mailtoUrl;
        setTransmittedToast(true);
      }
    } catch (err) {
      const mailtoUrl = `mailto:pndaiduong1912@gmail.com?subject=${encodeURIComponent(`[Portfolio] Message from ${formData.identity}`)}&body=${encodeURIComponent(`Sender: ${formData.identity}\nEmail: ${formData.comm_link}\n\n${formData.payload}`)}`;
      window.location.href = mailtoUrl;
      setTransmittedToast(true);
    } finally {
      setTransmitting(false);
      setTimeout(() => setTransmittedToast(false), 6000);
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen relative w-full overflow-x-hidden flex flex-col items-center">
      {/* Dynamic Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      {/* Top Floating Cyberpunk Header */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 flex justify-center pt-4 px-4">
        <nav className="bg-surface-container-low/80 backdrop-blur-2xl border border-outline-variant/50 rounded-full px-6 h-16 flex items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,0,0,0.6)] w-full max-w-5xl">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00dbe9]"></div>
            <a href="#about" className="font-label-caps text-primary tracking-widest uppercase font-bold text-sm">
              Neon_Arch // Dương.dev
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {["about", "skills", "projects", "contact"].map((nav) => {
              const isActive = activeSection === nav;
              return (
                <a
                  key={nav}
                  href={`#${nav}`}
                  className={`font-label-caps transition-all duration-300 px-4 py-1.5 rounded-full uppercase tracking-wider text-xs ${isActive
                      ? "text-primary bg-primary/10 border border-primary/40 shadow-[0_0_15px_rgba(0,219,233,0.3)] font-bold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-variant/40"
                    }`}
                >
                  {t.nav[nav]}
                </a>
              );
            })}
          </div>

          {/* Language Switcher & Profile Avatar */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/40 text-primary font-detail-mono text-xs font-bold hover:bg-primary hover:text-on-primary transition-all shadow-[0_0_12px_rgba(0,219,233,0.2)]"
              title={lang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
            >
              <span className="material-symbols-outlined text-base">language</span>
              <span>{lang.toUpperCase()}</span>
              <span className="text-[10px] opacity-65">({lang === "en" ? "VI" : "EN"})</span>
            </button>

            <a
              href="https://github.com/duongphan2101"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full overflow-hidden border border-primary/50 p-0.5 shadow-[0_0_12px_rgba(0,219,233,0.3)] hover:scale-105 transition-transform"
            >
              <img src={avt} alt="Dương" className="w-full h-full object-cover rounded-full" />
            </a>

            {/* Mobile Burger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-primary p-2 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed top-24 left-4 right-4 z-40 bg-surface-container-high/95 backdrop-blur-2xl border border-primary/30 rounded-2xl p-6 shadow-2xl md:hidden flex flex-col gap-4 text-center">
          {["about", "skills", "projects", "contact"].map((nav) => (
            <a
              key={nav}
              href={`#${nav}`}
              onClick={() => setMobileMenuOpen(false)}
              className="font-label-caps text-on-surface hover:text-primary py-2 uppercase tracking-widest text-sm border-b border-outline-variant/20 last:border-none"
            >
              {t.nav[nav]}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="mt-2 py-2 px-4 rounded-xl bg-primary/10 border border-primary/40 text-primary font-detail-mono text-xs font-bold flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">language</span>
            Language: {lang === "en" ? "English (EN)" : "Tiếng Việt (VI)"}
          </button>
        </div>
      )}

      <main className="w-full pt-16 relative z-10 flex flex-col items-center">
        {/* Section 1: ABOUT / HOME - CYBER IDENTITY */}
        <section id="about" className="min-h-[85vh] flex flex-col justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-8">
            <div className="flex-1 flex flex-col justify-center max-w-3xl">
              <div className="mb-6 font-detail-mono text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] animate-pulse">terminal</span>
                <span className="tracking-widest uppercase text-xs">{t.hero.status}</span>
                <div className="h-[1px] w-16 bg-primary/40"></div>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-on-surface mb-3 tracking-tight font-extrabold font-headline-xl">
                {t.hero.name} <span className="text-primary-fixed-dim drop-shadow-[0_0_20px_rgba(0,219,233,0.35)]">{t.hero.nameHighlight}</span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl text-secondary font-semibold mb-8 flex items-center gap-3">
                <span>{t.hero.role}</span>
                <span className="text-primary opacity-80 animate-pulse">_</span>
              </h2>

              <div className="relative group max-w-2xl mb-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-700"></div>
                <div className="relative bg-surface-container/70 backdrop-blur-2xl rounded-xl p-6 sm:p-8 border border-outline-variant/40 shadow-2xl">
                  <p className="text-base sm:text-lg text-on-surface leading-relaxed mb-4">
                    {t.hero.bio1}
                  </p>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {t.hero.bio2}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-outline-variant/20">
                    <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 font-detail-mono text-xs text-primary flex items-center gap-2 font-medium">
                      <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span> {t.hero.tag1}
                    </div>
                    <div className="px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 font-detail-mono text-xs text-secondary font-medium">
                      {t.hero.tag2}
                    </div>
                    <div className="px-3.5 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/40 font-detail-mono text-xs text-on-surface-variant font-medium">
                      {t.hero.tag3}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-7 py-3.5 bg-primary text-on-primary font-headline-lg-mobile text-base uppercase tracking-wider font-bold rounded-lg hover:shadow-[0_0_25px_rgba(0,219,233,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  {t.hero.btnDeploy} <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                </a>
                <a
                  href="https://github.com/duongphan2101"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3.5 bg-transparent border border-primary/60 text-primary font-headline-lg-mobile text-base uppercase tracking-wider font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="font-detail-mono">&gt;</span> {t.hero.btnGithub}
                </a>
              </div>
            </div>

            {/* Profile HUD Frame */}
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end relative mt-6 lg:mt-0">
              <div className="relative w-full max-w-[360px] aspect-[0.8] group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-2xl z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-30"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary z-30"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary z-30"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-30"></div>

                <div className="absolute top-4 right-4 z-30 bg-surface/90 backdrop-blur-md px-2.5 py-1 font-detail-mono text-[10px] text-primary border border-primary/30 flex items-center gap-2 rounded">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  {t.hero.recLive}
                </div>

                <div className="relative w-full h-full bg-surface-container rounded-xl overflow-hidden z-10 shadow-[0_0_40px_rgba(0,219,233,0.15)] border border-outline-variant/30">
                  <img
                    src={avt}
                    alt="Phan Nguyễn Đại Dương"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent z-20 pointer-events-none translate-y-[-100%] group-hover:animate-[scan_3s_ease-in-out_infinite]"></div>
                </div>

                <div className="absolute -bottom-8 left-0 w-full flex justify-between font-detail-mono text-xs text-on-surface-variant opacity-80 px-2">
                  <span>{t.hero.idTag}</span>
                  <span>{t.hero.schoolTag}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SKILLS / CORE MODULES */}
        <section id="skills" className="py-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-outline-variant/15 relative">
          <div className="flex flex-col mb-16">
            <span className="font-detail-mono text-primary mb-3 flex items-center gap-2 uppercase tracking-widest text-xs">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {t.skills.tag}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-on-surface font-extrabold tracking-tight font-headline-xl">
              {t.skills.titlePrefix}<span className="text-primary-fixed-dim">{t.skills.titleDim}</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl mt-4 text-base sm:text-lg">
              {t.skills.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Backend Module */}
            <div className="bg-surface-container/60 backdrop-blur-md rounded-2xl p-7 border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6 group-hover:shadow-[0_0_20px_rgba(0,219,233,0.3)] transition-all">
                <span className="material-symbols-outlined text-2xl">dns</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-1 font-headline-lg-mobile">{t.skills.mod1Title}</h3>
              <p className="font-detail-mono text-xs text-primary mb-4">{t.skills.mod1Sub}</p>
              <ul className="space-y-2.5 text-sm text-on-surface-variant font-medium">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Java (Spring Boot)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Node.js (Express, TS)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> C# (.NET, WinForms)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> JWT Authentication</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Socket.IO & Redis</li>
              </ul>
            </div>

            {/* Frontend Module */}
            <div className="bg-surface-container/60 backdrop-blur-md rounded-2xl p-7 border border-outline-variant/30 hover:border-secondary/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary mb-6 group-hover:shadow-[0_0_20px_rgba(255,171,243,0.3)] transition-all">
                <span className="material-symbols-outlined text-2xl">devices</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-1 font-headline-lg-mobile">{t.skills.mod2Title}</h3>
              <p className="font-detail-mono text-xs text-secondary mb-4">{t.skills.mod2Sub}</p>
              <ul className="space-y-2.5 text-sm text-on-surface-variant font-medium">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> ReactJS & TypeScript</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> React Native (Mobile)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Tailwind CSS & Bootstrap</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> HTML5 / Modern CSS3</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Interactive UI / UX Handoff</li>
              </ul>
            </div>

            {/* Database & Cloud */}
            <div className="bg-surface-container/60 backdrop-blur-md rounded-2xl p-7 border border-outline-variant/30 hover:border-primary-container/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary-container/30 flex items-center justify-center text-primary-container mb-6 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all">
                <span className="material-symbols-outlined text-2xl">database</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-1 font-headline-lg-mobile">{t.skills.mod3Title}</h3>
              <p className="font-detail-mono text-xs text-primary-container mb-4">{t.skills.mod3Sub}</p>
              <ul className="space-y-2.5 text-sm text-on-surface-variant font-medium">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> MSSQL / MySQL</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> MongoDB (Document DB)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> AWS DynamoDB</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> AWS S3 Storage</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Query Optimization</li>
              </ul>
            </div>

            {/* DevOps & Tools */}
            <div className="bg-surface-container/60 backdrop-blur-md rounded-2xl p-7 border border-outline-variant/30 hover:border-outline/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-surface-bright border border-outline-variant/40 flex items-center justify-center text-on-surface mb-6 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                <span className="material-symbols-outlined text-2xl">build</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-1 font-headline-lg-mobile">{t.skills.mod4Title}</h3>
              <p className="font-detail-mono text-xs text-outline mb-4">{t.skills.mod4Sub}</p>
              <ul className="space-y-2.5 text-sm text-on-surface-variant font-medium">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-outline rounded-full"></span> Docker Containerization</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-outline rounded-full"></span> AWS Cloud Essentials</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-outline rounded-full"></span> Ubuntu / Linux OS</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-outline rounded-full"></span> Git & GitHub Actions</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-outline rounded-full"></span> Postman & Figma</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: PROJECTS / NEURAL NETWORK GALLERY */}
        <section id="projects" className="py-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-outline-variant/15 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-detail-mono text-primary mb-3 flex items-center gap-2 uppercase tracking-widest text-xs">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                {t.projects.tag}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-on-surface font-extrabold tracking-tight font-headline-xl">
                {t.projects.titlePrefix}<span className="text-primary-fixed-dim">{t.projects.titleDim}</span>
              </h2>
            </div>
            <div className="font-detail-mono text-xs text-outline flex gap-6">
              <span>{t.projects.viewMode}</span>
              <span>{t.projects.status}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Project 1: SmartHire */}
            <div className="lg:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-container-high border-t-4 border-t-primary border border-outline-variant/40 hover:border-primary transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between min-h-[460px] p-8">
              <div className="relative z-20 flex justify-between items-start mb-6">
                <div className="flex items-center gap-2 bg-primary/10 border border-primary/40 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-detail-mono text-xs text-primary font-bold tracking-wider">{t.projects.p1Tag}</span>
                </div>
                <span className="font-detail-mono text-xs text-on-surface-variant font-medium">{t.projects.p1Date}</span>
              </div>

              <div className="relative z-20 mt-auto pt-4">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-primary transition-colors font-headline-xl tracking-tight mb-3 drop-shadow-[0_0_15px_rgba(0,219,233,0.3)] flex flex-wrap items-center gap-3">
                  <span>{t.projects.p1Title}</span>
                  <span className="text-primary text-lg font-detail-mono font-normal">{t.projects.p1Sub}</span>
                </h3>

                <p className="text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed mb-6 font-medium">
                  {t.projects.p1Desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-primary/20 font-label-caps text-xs text-primary border border-primary/40 font-bold">REACTJS</span>
                  <span className="px-3.5 py-1 rounded-full bg-primary/20 font-label-caps text-xs text-primary border border-primary/40 font-bold">TYPESCRIPT</span>
                  <span className="px-3.5 py-1 rounded-full bg-primary/20 font-label-caps text-xs text-primary border border-primary/40 font-bold">NODE.JS MICROSERVICES</span>
                  <span className="px-3.5 py-1 rounded-full bg-primary/20 font-label-caps text-xs text-primary border border-primary/40 font-bold">MONGODB</span>
                  <span className="px-3.5 py-1 rounded-full bg-primary/20 font-label-caps text-xs text-primary border border-primary/40 font-bold">DOCKER</span>
                  <span className="px-3.5 py-1 rounded-full bg-primary/20 font-label-caps text-xs text-primary border border-primary/40 font-bold">AI ANALYSIS</span>
                </div>

                <div className="flex flex-wrap gap-4 items-center pt-2">
                  <button
                    onClick={() => openModal("smarthire")}
                    className="px-6 py-3 bg-primary text-on-primary font-headline-lg-mobile text-sm font-bold rounded-lg hover:shadow-[0_0_25px_rgba(0,219,233,0.6)] transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-xl">play_circle</span> {t.projects.btnStream}
                  </button>
                  <a
                    href="https://github.com/duongphan2101/SmartHire.git"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 bg-surface-container-highest/90 border border-outline-variant/60 hover:border-primary text-on-surface font-detail-mono text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
                  >
                    {t.projects.btnGithubRepo} <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: VChat */}
            <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl bg-surface-container-high border-t-4 border-t-secondary border border-outline-variant/40 hover:border-secondary transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between min-h-[460px] p-8">
              <div className="relative z-20 flex justify-between items-start mb-6">
                <div className="flex items-center gap-2 bg-secondary/10 border border-secondary/40 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-detail-mono text-xs text-secondary font-bold tracking-wider">{t.projects.p2Tag}</span>
                </div>
                <span className="font-detail-mono text-xs text-on-surface-variant font-medium">{t.projects.p2Date}</span>
              </div>

              <div className="relative z-20 mt-auto pt-4">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-white group-hover:text-secondary transition-colors font-headline-xl tracking-tight mb-3 drop-shadow-[0_0_15px_rgba(255,171,243,0.3)]">
                  {t.projects.p2Title}
                </h3>

                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed font-medium">
                  {t.projects.p2Desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-secondary/20 font-label-caps text-xs text-secondary border border-secondary/40 font-bold">REACT NATIVE</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/20 font-label-caps text-xs text-secondary border border-secondary/40 font-bold">SOCKET.IO</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/20 font-label-caps text-xs text-secondary border border-secondary/40 font-bold">DYNAMODB</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/20 font-label-caps text-xs text-secondary border border-secondary/40 font-bold">AWS S3</span>
                </div>

                <div className="flex flex-wrap gap-3 items-center pt-2">
                  <button
                    onClick={() => openModal("vchat")}
                    className="px-5 py-3 bg-secondary text-on-secondary font-headline-lg-mobile text-xs font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,171,243,0.6)] transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">play_circle</span> {t.projects.btnStream}
                  </button>
                  <a
                    href="https://github.com/duongphan2101/CongNgheMoi_ChattingApp.git"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 bg-surface-container-highest/90 border border-outline-variant/60 hover:border-secondary text-on-surface font-detail-mono text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
                  >
                    GitHub <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: HDND Store */}
            <div className="lg:col-span-6 group relative overflow-hidden rounded-2xl bg-surface-container-high border-t-4 border-t-primary border border-outline-variant/40 hover:border-primary transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between p-8 min-h-[380px]">
              <div className="relative z-20 flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 bg-primary/10 border border-primary/40 px-3.5 py-1.5 rounded-full">
                  <span className="font-detail-mono text-xs text-primary font-bold tracking-wider">{t.projects.p3Tag}</span>
                </div>
                <span className="font-detail-mono text-xs text-on-surface-variant font-medium">{t.projects.p3Date}</span>
              </div>

              <div className="relative z-20 mt-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-primary transition-colors font-headline-xl tracking-tight mb-3">
                  {t.projects.p3Title}
                </h3>
                <p className="text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed font-medium">
                  {t.projects.p3Desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/20 font-label-caps text-xs text-primary border border-primary/40 font-bold">REACTJS</span>
                  <span className="px-3 py-1 rounded-full bg-primary/20 font-label-caps text-xs text-primary border border-primary/40 font-bold">SPRING BOOT</span>
                  <span className="px-3 py-1 rounded-full bg-primary/20 font-label-caps text-xs text-primary border border-primary/40 font-bold">MOMO API</span>
                  <span className="px-3 py-1 rounded-full bg-primary/20 font-label-caps text-xs text-primary border border-primary/40 font-bold">PYTHON DATA</span>
                </div>

                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => openModal("hdnd")}
                    className="px-5 py-2.5 bg-primary text-on-primary font-headline-lg-mobile text-xs font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,219,233,0.5)] transition-all flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">play_circle</span> {t.projects.btnStream}
                  </button>
                  <a
                    href="https://github.com/DucNhat03/SoftwareArchitecture_HDNDStore.git"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-surface-container-highest border border-outline-variant/60 text-on-surface font-detail-mono text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    GitHub <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4: Video Sharing App */}
            <div className="lg:col-span-6 group relative overflow-hidden rounded-2xl bg-surface-container-high border-t-4 border-t-primary-container border border-outline-variant/40 hover:border-primary-container transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between p-8 min-h-[380px]">
              <div className="relative z-20 flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 bg-primary-container/10 border border-primary-container/40 px-3.5 py-1.5 rounded-full">
                  <span className="font-detail-mono text-xs text-primary-container font-bold tracking-wider">{t.projects.p4Tag}</span>
                </div>
                <span className="font-detail-mono text-xs text-on-surface-variant font-medium">{t.projects.p4Date}</span>
              </div>

              <div className="relative z-20 mt-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-primary-container transition-colors font-headline-xl tracking-tight mb-3">
                  {t.projects.p4Title}
                </h3>
                <p className="text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed font-medium">
                  {t.projects.p4Desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary-container/20 font-label-caps text-xs text-primary-container border border-primary-container/40 font-bold">REACT NATIVE</span>
                  <span className="px-3 py-1 rounded-full bg-primary-container/20 font-label-caps text-xs text-primary-container border border-primary-container/40 font-bold">NODE.JS</span>
                  <span className="px-3 py-1 rounded-full bg-primary-container/20 font-label-caps text-xs text-primary-container border border-primary-container/40 font-bold">MSSQL</span>
                </div>

                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => openModal("videosharing")}
                    className="px-5 py-2.5 bg-primary-container text-on-primary-container font-headline-lg-mobile text-xs font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">play_circle</span> {t.projects.btnStream}
                  </button>
                  <a
                    href="https://github.com/duongphan2101/VideoSharingApp.git"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-surface-container-highest border border-outline-variant/60 text-on-surface font-detail-mono text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    GitHub <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: CONTACT / SECURE CONNECTION */}
        <section id="contact" className="py-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-outline-variant/15 relative">
          <div className="flex flex-col mb-16">
            <span className="font-detail-mono text-primary mb-3 flex items-center gap-2 text-xs uppercase tracking-widest">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {t.contact.tag}
            </span>
            <h2 className="text-4xl sm:text-6xl text-on-surface font-extrabold tracking-tight mb-4 font-headline-xl">
              {t.contact.titlePrefix}<span className="text-primary-fixed-dim">{t.contact.titleDim}</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl text-base sm:text-lg">
              {t.contact.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Terminal Form */}
            <div className="lg:col-span-7 bg-surface-container/60 backdrop-blur-xl rounded-2xl p-8 border border-outline-variant/40 shadow-2xl relative">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">terminal</span>
                  <span className="font-label-caps text-xs text-primary tracking-widest uppercase font-bold">
                    {t.contact.terminalTitle}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-surface-container-high px-3 py-1 rounded-full border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-xs">lock</span>
                  <span className="font-detail-mono text-[10px] text-secondary uppercase tracking-wider font-bold">{t.contact.encrypted}</span>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                <div className="relative group/input">
                  <label htmlFor="identity" className="block font-detail-mono text-xs text-primary mb-2 font-bold">
                    {t.contact.formAlias}
                  </label>
                  <input
                    id="identity"
                    type="text"
                    required
                    value={formData.identity}
                    onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                    placeholder={t.contact.formAliasPh}
                    className="w-full bg-surface-container-lowest/70 border border-outline-variant/50 rounded-lg p-3.5 text-on-surface font-body-md focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,219,233,0.2)] transition-all"
                  />
                </div>

                <div className="relative group/input">
                  <label htmlFor="comm_link" className="block font-detail-mono text-xs text-primary mb-2 font-bold">
                    {t.contact.formEmail}
                  </label>
                  <input
                    id="comm_link"
                    type="email"
                    required
                    value={formData.comm_link}
                    onChange={(e) => setFormData({ ...formData, comm_link: e.target.value })}
                    placeholder={t.contact.formEmailPh}
                    className="w-full bg-surface-container-lowest/70 border border-outline-variant/50 rounded-lg p-3.5 text-on-surface font-body-md focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,219,233,0.2)] transition-all"
                  />
                </div>

                <div className="relative group/input">
                  <label htmlFor="payload" className="block font-detail-mono text-xs text-primary mb-2 font-bold">
                    {t.contact.formMsg}
                  </label>
                  <textarea
                    id="payload"
                    rows={4}
                    required
                    value={formData.payload}
                    onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                    placeholder={t.contact.formMsgPh}
                    className="w-full bg-surface-container-lowest/70 border border-outline-variant/50 rounded-lg p-3.5 text-on-surface font-body-md focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,219,233,0.2)] transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
                  <span className="font-detail-mono text-[11px] text-on-surface-variant/60 max-w-xs">
                    {t.contact.footnote}
                  </span>
                  <button
                    type="submit"
                    disabled={transmitting}
                    className="px-8 py-3.5 bg-primary text-on-primary font-headline-lg-mobile text-base font-bold uppercase tracking-wider rounded-lg hover:shadow-[0_0_25px_rgba(0,219,233,0.6)] transition-all duration-300 flex items-center gap-3 disabled:opacity-50"
                  >
                    {transmitting ? (
                      <>
                        <span className="animate-spin material-symbols-outlined text-lg">sync</span> {t.contact.btnTransmitting}
                      </>
                    ) : (
                      <>
                        {t.contact.btnSubmit} <span className="material-symbols-outlined text-lg">send</span>
                      </>
                    )}
                  </button>
                </div>

                {transmittedToast && (
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/40 text-primary font-detail-mono text-xs flex items-center gap-3 shadow-[0_0_15px_rgba(0,219,233,0.2)]">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span>{t.contact.toastSuccess}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Active Nodes */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <h3 className="font-headline-lg-mobile text-2xl font-bold text-on-surface mb-2">{t.contact.nodesTitle}</h3>

              {/* Email Node */}
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/40 hover:border-primary transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:shadow-[0_0_15px_rgba(0,219,233,0.3)] transition-all">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{t.contact.mailTag}</span>
                    <a href="mailto:pndaiduong1912@gmail.com" className="text-base sm:text-lg text-on-surface hover:text-primary transition-colors font-semibold">
                      pndaiduong1912@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Node */}
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/40 hover:border-secondary transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:shadow-[0_0_15px_rgba(255,171,243,0.3)] transition-all">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{t.contact.phoneTag}</span>
                    <a href="tel:0931039421" className="text-base sm:text-lg text-on-surface hover:text-secondary transition-colors font-semibold">
                      +84 931 039 421
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn Node */}
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/40 hover:border-primary-container transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                    <span className="material-symbols-outlined">work</span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{t.contact.linkedinTag}</span>
                    <a
                      href="https://www.linkedin.com/in/phan-nguyen-dai-duong-1a2138309/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base sm:text-lg text-on-surface hover:text-primary-container transition-colors font-semibold"
                    >
                      Phan Nguyễn Đại Dương
                    </a>
                  </div>
                </div>
              </div>

              {/* Physical Locus */}
              <div className="mt-4 p-5 rounded-xl bg-surface-container/60 border border-outline-variant/40">
                <div className="font-detail-mono text-xs text-outline mb-2 flex justify-between">
                  <span>{t.contact.locusTag}</span>
                  <span>10.8231° N, 106.6297° E</span>
                </div>
                <div className="text-xl font-bold text-on-surface font-headline-lg-mobile">{t.contact.city}</div>
                <div className="font-detail-mono text-xs text-primary mt-1 font-semibold">{t.contact.sector}</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 flex flex-col items-center border-t border-outline-variant/20 bg-surface-container-lowest/80 text-center px-4">
        <div className="font-detail-mono text-xs text-primary mb-2 uppercase tracking-[0.2em]">
          {t.footer.terminated}
        </div>
        <div className="text-on-surface-variant text-xs font-label-caps opacity-80">
          {t.footer.copyright}
        </div>
      </footer>

      {/* Demo Modal */}
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
