'use client'

import React from 'react'
import { type Language, translations } from '@/lib/translations'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (typeof translations)[Language]
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>(() => {
    if (typeof document === 'undefined') {
      return 'en'
    }

    return document.documentElement.dataset.language === 'zh' ? 'zh' : 'en'
  })

  React.useEffect(() => {
    const savedLanguage = window.localStorage.getItem('language')
    const nextLanguage: Language = savedLanguage === 'zh' ? 'zh' : 'en'

    setLanguageState(nextLanguage)
    document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en'
    document.documentElement.dataset.language = nextLanguage
  }, [])

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem('language', nextLanguage)
    document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en'
    document.documentElement.dataset.language = nextLanguage
  }, [])

  const toggleLanguage = React.useCallback(() => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }, [language, setLanguage])

  const value = React.useMemo(
    () => ({ language, setLanguage, toggleLanguage, t: translations[language] }),
    [language, setLanguage, toggleLanguage]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}

