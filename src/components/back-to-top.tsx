'use client'

import React from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-30 inline-flex size-11 items-center justify-center rounded-full border border-zinc-200/80 bg-white/75 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:bg-[#3d372f] dark:focus-visible:ring-[#b99572]',
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      )}>
      <ArrowUp className="size-4" />
    </button>
  )
}


