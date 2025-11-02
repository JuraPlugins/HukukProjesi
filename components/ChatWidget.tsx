"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-[60]">
      {/* Floating CTA Button */}
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] text-white dark:bg-white dark:text-black px-5 py-3 shadow-lg hover:shadow-xl"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="chat-panel"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Ücretsiz Danışmanlık
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="chat-panel"
            role="dialog"
            aria-label="Canlı sohbet"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="fixed right-4 bottom-20 w-[90vw] max-w-sm rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <div className="text-sm font-medium">Canlı Sohbet</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
                aria-label="Kapat"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Messages (mock) */}
            <div className="max-h-80 overflow-auto px-4 py-3 space-y-3 text-sm">
              <div className="text-gray-500 dark:text-gray-400">Merhaba! Size nasıl yardımcı olabiliriz?</div>
              <div className="flex justify-end">
                <div className="rounded-2xl rounded-br-sm bg-[var(--fg)] text-white dark:bg-white dark:text-black px-3 py-2">
                  Selam, bir sorum var…
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="h-2 w-2 rounded-full bg-gray-300 animate-pulse" />
                <div className="h-2 w-2 rounded-full bg-gray-300 animate-pulse" />
                <div className="h-2 w-2 rounded-full bg-gray-300 animate-pulse" />
              </div>
            </div>

            {/* Input (disabled placeholder) */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  disabled
                  placeholder="Yakında burada yazışabileceksiniz…"
                  className="flex-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
                <button disabled className="rounded-full px-3 py-2 text-sm text-gray-400 border border-gray-200 dark:border-gray-700">Gönder</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
