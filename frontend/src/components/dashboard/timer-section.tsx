'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, Timer, Clock } from 'lucide-react'
import { Switch } from '../ui/switch'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

interface TimerSectionProps {
  enabled: boolean
  onEnabledChange: (enabled: boolean) => void
}

const presets = [
  { label: '30s', seconds: 30 },
  { label: '1 min', seconds: 60 },
  { label: '5 min', seconds: 300 },
]

export function TimerSection({ enabled, onEnabledChange }: TimerSectionProps) {
  const [selectedPreset, setSelectedPreset] = useState(1)
  const [timeLeft, setTimeLeft] = useState(presets[1].seconds)
  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const totalTime = presets[selectedPreset].seconds
  const progress = ((totalTime - timeLeft) / totalTime) * 100

  const resetTimer = useCallback(() => {
    setTimeLeft(presets[selectedPreset].seconds)
    setIsRunning(false)
    setIsFinished(false)
  }, [selectedPreset])

  useEffect(() => {
    resetTimer()
  }, [selectedPreset, resetTimer])

  useEffect(() => {
    if (!isRunning || !enabled) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false)
          setIsFinished(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, enabled])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-card border border-border p-5 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Timer className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">Timer</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {enabled ? 'ligado' : 'modo sem pressão'}
          </span>
          <Switch checked={enabled} onCheckedChange={onEnabledChange} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {enabled ? (
          <motion.div
            key="timer-active"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Presets */}
            <div className="flex gap-2 mb-5">
              {presets.map((preset, index) => (
                <motion.button
                  key={preset.label}
                  onClick={() => setSelectedPreset(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all",
                    "border-2 focus:outline-none",
                    selectedPreset === index
                      ? "bg-secondary text-secondary-foreground border-secondary"
                      : "bg-muted/50 text-muted-foreground border-transparent hover:border-border"
                  )}
                >
                  {preset.label}
                </motion.button>
              ))}
            </div>

            {/* Circular Progress */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-32 h-32">
                {/* Background circle */}
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-muted"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className={cn(
                      isFinished ? "text-accent" : "text-primary"
                    )}
                    strokeDasharray={351.86}
                    strokeDashoffset={351.86 * (1 - progress / 100)}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
                
                {/* Time display */}
                <motion.div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center",
                    isFinished && "animate-pulse"
                  )}
                  animate={isFinished ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, repeat: isFinished ? 3 : 0 }}
                >
                  <span className={cn(
                    "text-3xl font-bold tabular-nums",
                    isFinished ? "text-accent" : "text-foreground"
                  )}>
                    {formatTime(timeLeft)}
                  </span>
                </motion.div>
              </div>

              {/* Controls */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={resetTimer}
                  className="rounded-full w-11 h-11"
                >
                  <RotateCcw className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => {
                    if (isFinished) {
                      resetTimer()
                    } else {
                      setIsRunning(!isRunning)
                    }
                  }}
                  className="rounded-full w-14 h-14 shadow-lg shadow-primary/25"
                >
                  {isRunning ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-0.5" />
                  )}
                </Button>
              </div>

              {isFinished && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent font-semibold flex items-center gap-2"
                >
                  <span>Tempo esgotado!</span>
                  <span className="text-lg">🎉</span>
                </motion.p>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="timer-disabled"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-3 py-6 text-muted-foreground"
          >
            <Clock className="w-5 h-5" />
            <span className="text-sm">desenhe no seu ritmo ✨</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
