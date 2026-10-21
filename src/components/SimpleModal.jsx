import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import TechBadge from './TechBadge';

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
      const timer = setTimeout(() => setRender(false), 300);
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
    <div className="fixed inset-0 z-[100] flex justify-center items-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-neutral-950/60 dark:bg-black/75 backdrop-blur-md transition-opacity duration-300 ease-out ${
          active ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div 
        className={`relative w-full max-w-3xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border border-neutral-200/80 dark:border-neutral-800 rounded-3xl shadow-2xl z-[101] my-auto overflow-hidden transition-all duration-300 ease-out transform ${
          active ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200/70 dark:border-neutral-800/80 flex justify-between items-center bg-neutral-50/50 dark:bg-neutral-900/50 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              @ ▸ demo
            </span>
            <span className="font-semibold text-sm text-neutral-800 dark:text-neutral-200 truncate max-w-[200px] sm:max-w-md">
              {project.title}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Video Preview Frame */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black border border-neutral-200 dark:border-neutral-800 shadow-inner relative">
            {fileId ? (
              <iframe
                src={`https://drive.google.com/file/d/${fileId}/preview`}
                className="w-full h-full border-none"
                allow="autoplay; fullscreen"
                title={`${project.title} Demo`}
              ></iframe>
            ) : (
              <div className="p-8 text-center text-sm font-mono text-neutral-400 flex items-center justify-center h-full">
                [DEMO PREVIEW UNAVAILABLE]
              </div>
            )}
          </div>

          {/* Project Details */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                {project.title}
              </h3>
              {project.subtitle && (
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                  {project.subtitle}
                </span>
              )}
            </div>

            {project.role && (
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-4">
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">{t.roleLabel}</span> {project.role}
              </p>
            )}

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          {project.techStack && (
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mb-2">
                {t.techHeader}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <TechBadge key={i} tech={tech} />
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mb-3">
                {t.featuresHeader}
              </div>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-neutral-400 dark:text-neutral-500 mt-0.5">•</span>
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          {project.github && (
            <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800 flex justify-end">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>{t.viewGithub}</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          )}
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
