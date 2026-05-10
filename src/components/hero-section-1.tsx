'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useLanguage } from '@/components/language-provider'
import { HeroHeader } from './header'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

function TypewriterTitle({ first, second }: { first: string; second: string }) {
    const fullText = `${first} ${second}`
    const firstLength = first.length
    const [visibleCount, setVisibleCount] = React.useState(0)

    React.useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (reduceMotion) {
            setVisibleCount(fullText.length)
            return
        }

        setVisibleCount(0)
        const timers = Array.from(fullText).map((_, index) =>
            window.setTimeout(() => setVisibleCount(index + 1), (index + 1) * 60)
        )

        return () => timers.forEach((timer) => window.clearTimeout(timer))
    }, [fullText])

    return (
        <>
            <span className="block sm:inline" aria-hidden="true">
                {fullText.slice(0, Math.min(firstLength, visibleCount))}
            </span>
            <span className="block sm:ml-3 sm:inline" aria-hidden="true">
                {fullText.slice(firstLength + 1, visibleCount)}
            </span>
            <span className="hero-type-cursor hidden align-baseline sm:inline-block" aria-hidden="true" />
            <span className="sr-only">{fullText}</span>
        </>
    )
}

const skills = [
    { name: 'Java', position: 'sm:left-[20%] sm:top-3 lg:left-[18%] lg:top-4', emphasis: '', floatDelay: '0ms', floatDistance: '6px', floatDuration: '3.2s' },
    { name: 'Spring Boot', position: 'sm:left-1/2 sm:top-0 sm:-translate-x-1/2 lg:top-0', emphasis: '', floatDelay: '260ms', floatDistance: '8px', floatDuration: '3.7s' },
    { name: 'MySQL', position: 'sm:right-[20%] sm:top-3 lg:right-[18%] lg:top-4', emphasis: '', floatDelay: '520ms', floatDistance: '7px', floatDuration: '3.4s' },
    { name: 'Redis', position: 'sm:left-[15%] sm:top-[86px] lg:left-[11%] lg:top-[110px]', emphasis: '', floatDelay: '760ms', floatDistance: '6px', floatDuration: '3.9s' },
    { name: 'RabbitMQ', position: 'sm:left-1/2 sm:top-[92px] sm:-translate-x-1/2 lg:top-[122px]', emphasis: '', floatDelay: '340ms', floatDistance: '8px', floatDuration: '3.5s' },
    { name: 'Docker', position: 'sm:right-[15%] sm:top-[86px] lg:right-[11%] lg:top-[110px]', emphasis: '', floatDelay: '620ms', floatDistance: '7px', floatDuration: '4s' },
    { name: 'Linux', position: 'sm:left-[24%] sm:top-[176px] lg:left-[21%] lg:top-[230px]', emphasis: '', floatDelay: '180ms', floatDistance: '6px', floatDuration: '3.6s' },
    { name: 'Git', position: 'sm:left-1/2 sm:top-[166px] sm:-translate-x-1/2 lg:top-[215px]', emphasis: '', floatDelay: '480ms', floatDistance: '7px', floatDuration: '3.3s' },
    { name: 'Vue', position: 'sm:right-[24%] sm:top-[176px] lg:right-[21%] lg:top-[230px]', emphasis: '', floatDelay: '700ms', floatDistance: '6px', floatDuration: '3.8s' },
    { name: 'AI / LLM', position: 'sm:left-1/2 sm:top-[240px] sm:-translate-x-1/2 lg:top-[315px]', emphasis: '', floatDelay: '420ms', floatDistance: '8px', floatDuration: '4s' },
]

export default function HeroSection() {
    const { t } = useLanguage()
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        const frame = requestAnimationFrame(() => setIsVisible(true))
        return () => cancelAnimationFrame(frame)
    }, [])

    const revealClass = isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section>
                    <div className="relative flex min-h-screen items-center py-16 sm:py-20 md:py-32">
                        <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% lg:aspect-9/4 absolute inset-0 aspect-square lg:top-24 opacity-80 dark:opacity-12">
                            <Image
                                src="https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="hero background"
                                width={2268}
                                height={1740}
                                className="size-full object-cover object-top"
                            />
                        </div>
                        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6">
                            <div className="mx-auto max-w-4xl text-center">
                                <h1 className="font-serif text-4xl font-medium leading-tight sm:whitespace-nowrap sm:text-5xl sm:leading-none md:text-5xl lg:text-6xl xl:text-7xl">
                                    <TypewriterTitle first={t.hero.titleFirst} second={t.hero.titleSecond} />
                                </h1>
                                <p className={`text-muted-foreground mx-auto mt-7 max-w-2xl text-balance text-sm leading-7 transition-all delay-150 duration-700 ease-out sm:text-lg sm:leading-9 md:text-xl lg:max-w-3xl lg:text-2xl lg:leading-10 ${revealClass}`}>{t.hero.subtitle}</p>

                                <Button
                                    asChild
                                    className={`group mt-8 inline-flex h-11 items-center gap-3 rounded-2xl bg-neutral-950 px-5 pr-2 text-sm text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all delay-300 duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:bg-neutral-900 hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)] hover:delay-0 active:translate-y-[1px] active:shadow-[0_8px_20px_rgba(0,0,0,0.18)] dark:bg-[#f5efe7] dark:text-[#1d1813] dark:shadow-[0_12px_30px_rgba(0,0,0,0.30)] dark:hover:bg-[#fff8ee] dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.38)] sm:mt-10 sm:h-12 sm:px-6 sm:text-base md:h-14 md:px-7 md:pr-3 md:text-lg lg:h-16 lg:px-9 lg:pr-4 lg:text-xl ${revealClass}`}>
                                    <Link href="#projects">
                                        <span className="text-nowrap">{t.hero.cta}</span>
                                        <ChevronRight className="shrink-0 opacity-55 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                            <div className={`relative mx-auto mt-10 flex h-auto w-full max-w-sm flex-wrap content-start justify-center gap-3 overflow-visible pt-2 transition-all delay-500 duration-700 ease-out sm:mt-14 sm:block sm:h-[300px] sm:max-w-5xl sm:pt-6 md:h-[320px] lg:mt-20 lg:h-[390px] lg:max-w-6xl ${revealClass}`}>
                                {skills.map((skill) => (
                                    <Card
                                        key={skill.name}
                                        style={{ '--float-delay': skill.floatDelay, '--float-distance': skill.floatDistance, '--float-duration': skill.floatDuration } as React.CSSProperties}
                                        className={`hero-skill-float flex h-10 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-4 text-zinc-800 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-[#34302a]/85 dark:text-[#f6efe5] transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:absolute sm:h-11 sm:px-5 md:h-12 md:px-6 lg:h-14 lg:px-8 ${skill.position} ${skill.emphasis}`}>
                                        <span className="text-nowrap text-center font-serif text-sm font-medium leading-none sm:text-base md:text-lg lg:text-xl">{skill.name}</span>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}



