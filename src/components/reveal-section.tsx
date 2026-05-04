'use client'

import React from 'react'

export function RevealSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = React.useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.18 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      data-state={isVisible ? 'visible' : 'hidden'}
      className={`reveal-section ${className ?? ''}`}>
      {children}
    </section>
  )
}

