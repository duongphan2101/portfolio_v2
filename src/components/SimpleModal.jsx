import React, { useState, useEffect } from 'react';
import { translations } from '../translations';

function SimpleModal({ show, onClose, project, lang = "en" }) {
  const [render, setRender] = useState(show);
  const [active, setActive] = useState(false);
  const t = translations[lang]?.modal || translations.en.modal;

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      setRender(true);
      const timer = setTimeout(() => setActive(true), 20);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
      setActive(false);
      const timer = setTimeout(() => setRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [show]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!render || !project) return null;

  const fileId = getFileId(project.link);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end overflow-hidden">
      {/* Dark Blur Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-500 ease-in-out ${
          active ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-over Drawer Panel from Right Edge */}
      <div 
        className={`relative w-full max-w-3xl sm:max-w-4xl bg-surface-container-high/95 backdrop-blur-2xl border-l-2 border-primary/60 shadow-[-20px_0_60px_rgba(0,219,233,0.3)] h-full flex flex-col z-[101] transition-transform duration-500 ease-in-out transform ${
          active ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-highest/70 sticky top-0 z-20 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]"></div>
            <span className="font-detail-mono text-xs sm:text-sm text-primary uppercase tracking-widest font-bold">
              {t.specTag} {project.title}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-bright/80 border border-outline-variant/50 text-on-surface hover:text-primary hover:border-primary transition-all font-detail-mono text-xs font-bold shadow-lg"
            aria-label="Close Stream Drawer"
          >
            <span>{t.close}</span>
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto flex flex-col gap-6">
          {/* Video Player Frame with Increased Height */}
          <div className="w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden border-2 border-primary/80 shadow-[0_0_35px_rgba(0,219,233,0.25)] bg-black relative shrink-0">
            {fileId ? (
              <iframe
                src={`https://drive.google.com/file/d/${fileId}/preview`}
                className="w-full h-full border-none"
                allow="autoplay; fullscreen"
                title={`${project.title} Live Demo`}
              ></iframe>
            ) : (
              <div className="p-8 text-center font-detail-mono text-primary flex items-center justify-center h-full">
                [ERROR: STREAM LINK UNRESOLVED]
              </div>
            )}
          </div>

          {/* Project Title & Subtitle */}
          <div className="bg-surface-container/80 p-6 sm:p-7 rounded-2xl border border-outline-variant/40 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h3 className="font-headline-xl text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <span className="font-detail-mono text-xs text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 font-bold">
                {project.subtitle || "PROD_SPEC"}
              </span>
            </div>

            {project.role && (
              <div className="font-detail-mono text-xs text-secondary mb-4 flex items-center gap-2 font-semibold">
                <span className="material-symbols-outlined text-sm">badge</span>
                <span>{t.roleLabel} {project.role}</span>
              </div>
            )}

            <p className="text-base text-on-surface-variant leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack Badges */}
            {project.techStack && (
              <div className="mb-6">
                <div className="font-detail-mono text-xs text-outline uppercase tracking-wider mb-2 font-bold">
                  {t.techHeader}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-primary/15 font-label-caps text-xs text-primary border border-primary/40 font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            {project.features && project.features.length > 0 && (
              <div className="pt-4 border-t border-outline-variant/20">
                <div className="font-detail-mono text-xs text-primary uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">checklist</span>
                  <span>{t.featuresHeader}</span>
                </div>
                <ul className="space-y-2.5 text-sm text-on-surface-variant font-medium">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* GitHub Repo Button */}
            {project.github && (
              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-on-primary font-headline-lg-mobile text-xs font-bold rounded-lg transition-all flex items-center gap-2"
                >
                  <span className="font-detail-mono">&gt;</span> {t.viewGithub} <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function getFileId(link) {
  if (!link) return null;
  const match = link.match(/\/d\/(.+?)\//) || link.match(/\/d\/(.+?)$/);
  return match ? match[1] : null;
}

export default SimpleModal;




