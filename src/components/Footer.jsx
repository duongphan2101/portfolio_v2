import React from "react";

export default function Footer({ t }) {
  return (
    <footer className="w-full py-8 border-t border-neutral-200/60 dark:border-neutral-800 text-center text-xs text-neutral-400 dark:text-neutral-500 space-y-1">
      <div>{t.footer.madeWith}</div>
      <div className="font-mono text-[11px]">{t.footer.copyright}</div>
    </footer>
  );
}
