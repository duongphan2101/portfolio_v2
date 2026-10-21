import React from "react";

export default function ContactSection({
  t,
  formData,
  setFormData,
  handleFormSubmit,
  transmitting,
  transmittedToast
}) {
  return (
    <>
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
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700/80 text-sm text-neutral-900 dark:white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 transition-all"
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
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700/80 text-sm text-neutral-900 dark:white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 transition-all"
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
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700/80 text-sm text-neutral-900 dark:white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 transition-all resize-none"
              ></textarea>
            </div>

            <div className="pt-2 flex justify-end items-center">
              <button
                type="submit"
                disabled={transmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 disabled:opacity-50 transition-opacity shadow-sm cursor-pointer"
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
    </>
  );
}
