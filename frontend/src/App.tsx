import { useState } from "react"
import { motion } from 'framer-motion'
import { Wand2, Sparkles } from 'lucide-react'
import { Button } from './components/ui/button'
import { DifficultySelector, type Difficulty } from './components/dashboard/difficulty-selector'
import { PromptCard } from './components/dashboard/prompt-card'
import { TimerSection } from './components/dashboard/timer-section'
import { ReferenceGrid } from './components/dashboard/reference-grid'
import { getRandomPrompt } from './lib/prompts'

export default function RabiscoApp() {
  const [difficulty, setDifficulty] = useState<Difficulty>('iniciante')
  const [currentPrompt, setCurrentPrompt] = useState<{ prompt: string; description: string } | null>(null)
  const [timerEnabled, setTimerEnabled] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePrompt = () => {
    setIsGenerating(true)
    // Small delay for better UX feedback
    setTimeout(() => {
      const newPrompt = getRandomPrompt(difficulty)
      setCurrentPrompt(newPrompt)
      setIsGenerating(false)
    }, 300)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg mx-auto px-4 py-8 pb-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-7 h-7 text-primary" />
            </motion.div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-fredoka), sans-serif' }}>
              Rabisco
            </h1>
          </div>
          <p className="text-muted-foreground text-sm italic">
            desenhe sem pensar demais
          </p>
        </motion.header>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Difficulty Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-sm font-medium text-muted-foreground mb-3 text-center">
              escolha sua dificuldade
            </h2>
            <DifficultySelector value={difficulty} onChange={setDifficulty} />
          </motion.section>

          {/* Generate Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <Button
              onClick={generatePrompt}
              disabled={isGenerating}
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <motion.div
                animate={isGenerating ? { rotate: 360 } : {}}
                transition={{ duration: 0.5, ease: "linear" }}
              >
                <Wand2 className="w-5 h-5 mr-2" />
              </motion.div>
              {isGenerating ? 'Gerando...' : 'Gerar prompt'}
            </Button>
          </motion.div>

          {/* Prompt Display */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <PromptCard
              prompt={currentPrompt?.prompt ?? null}
              description={currentPrompt?.description ?? null}
            />
          </motion.section>

          {/* Timer Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <TimerSection enabled={timerEnabled} onEnabledChange={setTimerEnabled} />
          </motion.section>

          {/* Reference Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ReferenceGrid />
          </motion.section>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-muted-foreground">
            feito com ✨ para artistas em qualquer nível
          </p>
        </motion.footer>
      </div>
    </main>
  )
}
