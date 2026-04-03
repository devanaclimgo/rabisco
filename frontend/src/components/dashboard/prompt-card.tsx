'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface PromptCardProps {
  prompt: string | null
  description: string | null
}

export function PromptCard({ prompt, description }: PromptCardProps) {
  return (
    <AnimatePresence mode="wait">
      {prompt ? (
        <motion.div
          key={prompt}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative overflow-hidden rounded-2xl bg-card border-2 border-primary/20 shadow-lg shadow-primary/10 p-6"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary/40 rounded-tl-sm" />
          <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary/40 rounded-tr-sm" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-primary/40 rounded-bl-sm" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-primary/40 rounded-br-sm" />
          
          <div className="flex items-start gap-3">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            
            <div className="flex-1 min-w-0">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-lg font-semibold text-foreground leading-snug"
              >
                {prompt}
              </motion.p>
              
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mt-3 text-sm text-muted-foreground italic"
                >
                  {description}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 px-6 rounded-2xl border-2 border-dashed border-border bg-muted/30"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl mb-3"
          >
            ✏️
          </motion.div>
          <p className="text-muted-foreground font-medium">
            gere um prompt pra começar
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
