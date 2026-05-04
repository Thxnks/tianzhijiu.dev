'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HeroHeader } from './header'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const skillRows = [
    ['Java', 'Spring Boot', 'MySQL', 'Redis', 'RabbitMQ'],
    ['Docker', 'Linux', 'Git', 'Vue', 'AI / LLM'],
]

export default function HeroSection() {
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
                <section className="bg-background">
                    <div className="relative flex min-h-screen items-center py-20 md:py-32">
                        <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% lg:aspect-9/4 absolute inset-0 aspect-square lg:top-24 dark:opacity-5">
                            <Image
                                src="https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="hero background"
                                width={2268}
                                height={1740}
                                className="size-full object-cover object-top"
                            />
                        </div>
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-6">
                            <div className="mx-auto max-w-3xl text-center">
                                <h1 className={`text-balance font-serif text-5xl font-medium leading-tight transition-all duration-700 ease-out sm:whitespace-nowrap sm:text-6xl sm:leading-none lg:text-7xl ${revealClass}`}>Hey, I am TianZhiJiu</h1>
                                <p className={`text-muted-foreground mx-auto mt-7 max-w-2xl text-balance text-lg leading-8 transition-all delay-150 duration-700 ease-out sm:text-xl sm:leading-9 ${revealClass}`}>I build thoughtful backend systems, AI-powered tools, and web experiences with clarity and purpose.</p>

                                <Button
                                    asChild
                                    className={`mt-10 h-12 px-6 pr-2 text-base transition-all delay-300 duration-700 ease-out sm:text-lg ${revealClass}`}>
                                    <Link href="#projects">
                                        <span className="text-nowrap">Explore My Work</span>
                                        <ChevronRight className="opacity-50" />
                                    </Link>
                                </Button>
                            </div>
                            <div className={`mx-auto mt-16 flex w-full max-w-4xl flex-col items-center gap-4 transition-all delay-500 duration-700 ease-out sm:mt-24 sm:gap-6 ${revealClass}`}>
                                {skillRows.map((row, rowIndex) => (
                                    <div
                                        key={rowIndex}
                                        className="flex flex-wrap justify-center gap-3 sm:gap-6">
                                        {row.map((skill) => (
                                            <Card
                                                key={skill}
                                                className="flex h-11 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-5 text-zinc-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:h-14 sm:px-7">
                                                <span className="text-nowrap text-center font-serif text-sm font-medium leading-none sm:text-lg">{skill}</span>
                                            </Card>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}



