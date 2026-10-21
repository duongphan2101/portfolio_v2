import React from "react";
import TechBadge from "./TechBadge";

export default function ProjectsSection({ t, openModal }) {
  const projectsList = [
    {
      id: "smarthire",
      tag: t.projects.p1Tag,
      tagColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      date: t.projects.p1Date,
      title: t.projects.p1Title,
      sub: t.projects.p1Sub,
      desc: t.projects.p1Desc,
      tech: t.projects.p1Tech,
      github: "https://github.com/duongphan2101/SmartHire.git"
    },
    {
      id: "vchat",
      tag: t.projects.p2Tag,
      tagColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      date: t.projects.p2Date,
      title: t.projects.p2Title,
      sub: t.projects.p2Sub,
      desc: t.projects.p2Desc,
      tech: t.projects.p2Tech,
      github: "https://github.com/duongphan2101/CongNgheMoi_ChattingApp.git"
    },
    {
      id: "hdnd",
      tag: t.projects.p3Tag,
      tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      date: t.projects.p3Date,
      title: t.projects.p3Title,
      sub: t.projects.p3Sub,
      desc: t.projects.p3Desc,
      tech: t.projects.p3Tech,
      github: "https://github.com/DucNhat03/SoftwareArchitecture_HDNDStore.git"
    },
    {
      id: "videosharing",
      tag: t.projects.p4Tag,
      tagColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      date: t.projects.p4Date,
      title: t.projects.p4Title,
      sub: t.projects.p4Sub,
      desc: t.projects.p4Desc,
      tech: t.projects.p4Tech,
      github: "https://github.com/duongphan2101/VideoSharingApp.git"
    }
  ];

  return (
    <>
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

        {projectsList.map((project) => (
          <div
            key={project.id}
            className="bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-neutral-200/80 dark:border-neutral-800 shadow-card dark:shadow-card-dark hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
          >
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
              <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${project.tagColor}`}>
                {project.tag}
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                {project.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-1">
              {project.title}{" "}
              <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                — {project.sub}
              </span>
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 text-justify">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                onClick={() => openModal(project.id)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">play_circle</span>
                <span>{t.projects.btnStream}</span>
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <span>{t.projects.btnGithubRepo}</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
