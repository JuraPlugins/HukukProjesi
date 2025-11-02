"use client";

import { motion } from "framer-motion";

type Props = {
  targetId: string;
  label?: string;
  className?: string;
  floating?: boolean;
};

export function ScrollDownButton({ targetId, label = "Aşağı İn", className = "", floating = false }: Props) {
  const container = floating
    ? `pointer-events-none absolute left-1/2 bottom-4 -translate-x-1/2 ${className}`
    : `mt-10 flex justify-center ${className}`;
  return (
    <div className={container}>
      <motion.button
        whileHover={{ y: 2 }}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-black/60 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 shadow-sm backdrop-blur hover:bg-white dark:hover:bg-white/10"
      >
        {label}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M12 5v14m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </div>
  );
}
