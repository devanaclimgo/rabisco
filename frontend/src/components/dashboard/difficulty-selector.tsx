import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export type Difficulty = 'iniciante' | 'intermediario' | 'avancado' | 'profissional' | 'caos'

interface DifficultySelectorProps {
  value: Difficulty
  onChange: (value: Difficulty) => void
}

const difficulties: { value: Difficulty; label: string; emoji: string }[] = [
  { value: 'iniciante', label: 'Iniciante', emoji: '🌱' },
  { value: 'intermediario', label: 'Intermediário', emoji: '🌿' },
  { value: 'avancado', label: 'Avançado', emoji: '🌳' },
  { value: 'profissional', label: 'Profissional', emoji: '⭐' },
  { value: 'caos', label: 'Caos', emoji: '🌀' },
]

export function DifficultySelector({ value, onChange }: DifficultySelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {difficulties.map((difficulty) => {
        const isSelected = value === difficulty.value
        return (
          <motion.button
            key={difficulty.value}
            onClick={() => onChange(difficulty.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              "border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              isSelected
                ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-muted"
            )}
          >
            <span className="flex items-center gap-1.5">
              <span>{difficulty.emoji}</span>
              <span>{difficulty.label}</span>
            </span>
            {isSelected && (
              <motion.div
                layoutId="difficulty-highlight"
                className="absolute inset-0 rounded-full bg-primary -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        )
      })}
    </div>
  )
}
