'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Images, RefreshCw, X, ExternalLink } from 'lucide-react'
import { Button } from "../ui/button"

const referenceCategories = {
  poses: [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=300&fit=crop',
  ],
  objects: [
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1503602642458-232111445657?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=300&fit=crop',
  ],
  art: [
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop',
  ],
  nature: [
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
  ],
}

function getRandomReferences(): string[] {
  const allImages = Object.values(referenceCategories).flat()
  const shuffled = [...allImages].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.floor(Math.random() * 3) + 3) // 3-5 images
}

export function ReferenceGrid() {
  const [references, setReferences] = useState<string[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const generateReferences = () => {
    setIsLoading(true)
    // Simulate loading for better UX
    setTimeout(() => {
      setReferences(getRandomReferences())
      setIsLoading(false)
    }, 500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-card border border-border p-5 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Images className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">Referências</span>
        </div>
        {references && (
          <Button
            variant="ghost"
            size="sm"
            onClick={generateReferences}
            disabled={isLoading}
            className="text-muted-foreground hover:text-foreground"
          >
            <RefreshCw className={`w-4 h-4 mr-1.5 ${isLoading ? 'animate-spin' : ''}`} />
            Novas
          </Button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!references ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 py-6"
          >
            <p className="text-sm text-muted-foreground text-center">
              gere referências para ajudar no seu desenho
            </p>
            <Button
              onClick={generateReferences}
              disabled={isLoading}
              className="rounded-full px-6 shadow-md shadow-primary/20"
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Images className="w-4 h-4 mr-2" />
              )}
              Gerar referências
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {references.map((src, index) => (
              <motion.button
                key={`${src}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(src)}
                className="relative aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-primary/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  src={src}
                  alt={`Referência ${index + 1}`}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </Button>
              <img
                src={selectedImage}
                alt="Referência ampliada"
                className="w-full rounded-2xl"
                crossOrigin="anonymous"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
