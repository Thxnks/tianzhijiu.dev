'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HeroHeader } from './header'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const skills = [
    { name: 'Java', position: 'sm:left-[20%] sm:top-3 lg:left-[18%] lg:top-4', emphasis: '' },
    { name: 'Spring Boot', position: 'sm:left-1/2 sm:top-0 sm:-translate-x-1/2 lg:top-0', emphasis: '' },
    { name: 'MySQL', position: 'sm:right-[20%] sm:top-3 lg:right-[18%] lg:top-4', emphasis: '' },
    { name: 'Redis', position: 'sm:left-[15%] sm:top-[86px] lg:left-[11%] lg:top-[110px]', emphasis: '' },
    { name: 'RabbitMQ', position: 'sm:left-1/2 sm:top-[92px] sm:-translate-x-1/2 lg:top-[122px]', emphasis: '' },
    { name: 'Docker', position: 'sm:right-[15%] sm:top-[86px] lg:right-[11%] lg:top-[110px]', emphasis: '' },
    { name: 'Linux', position: 'sm:left-[24%] sm:top-[176px] lg:left-[21%] lg:top-[230px]', emphasis: '' },
    { name: 'Git', position: 'sm:left-1/2 sm:top-[166px] sm:-translate-x-1/2 lg:top-[215px]', emphasis: '' },
    { name: 'Vue', position: 'sm:right-[24%] sm:top-[176px] lg:right-[21%] lg:top-[230px]', emphasis: '' },
    { name: 'AI / LLM', position: 'sm:left-1/2 sm:top-[240px] sm:-translate-x-1/2 lg:top-[315px]', emphasis: '' },
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
                <section>
                    <div className="relative flex min-h-screen items-center py-20 md:py-32">
                        <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% lg:aspect-9/4 absolute inset-0 aspect-square lg:top-24 opacity-80 dark:opacity-20">
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
                                <h1 className={`font-serif text-3xl font-medium leading-tight transition-all duration-700 ease-out sm:whitespace-nowrap sm:text-4xl sm:leading-none md:text-5xl lg:text-6xl xl:text-7xl ${revealClass}`}>
                                    <span className="block sm:inline">Hey, I am</span>
                                    <span className="block sm:ml-3 sm:inline">TianZhiJiu</span>
                                </h1>
                                <p className={`text-muted-foreground mx-auto mt-7 max-w-2xl text-balance text-base leading-8 transition-all delay-150 duration-700 ease-out sm:text-lg sm:leading-9 md:text-xl lg:max-w-3xl lg:text-2xl lg:leading-10 ${revealClass}`}>I build thoughtful backend systems, AI-powered tools, and web experiences with clarity and purpose.</p>

                                <Button
                                    asChild
                                    className={`mt-10 h-12 px-6 pr-2 text-sm transition-all delay-300 duration-700 ease-out sm:text-base md:h-14 md:px-7 md:pr-3 md:text-lg lg:h-16 lg:px-9 lg:pr-4 lg:text-xl ${revealClass}`}>
                                    <Link href="#projects">
                                        <span className="text-nowrap">Explore My Work</span>
                                        <ChevronRight className="opacity-50" />
                                    </Link>
                                </Button>
                            </div>
                            <div className={`relative mx-auto mt-10 flex h-[300px] w-full max-w-5xl flex-wrap content-start justify-center gap-2 overflow-hidden transition-all delay-500 duration-700 ease-out sm:mt-14 sm:block sm:h-[300px] md:h-[320px] lg:mt-20 lg:h-[390px] lg:max-w-6xl ${revealClass}`}>
                                {skills.map((skill) => (
                                    <Card
                                        key={skill.name}
                                        className={`flex h-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-4 text-zinc-800 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-[#211b15]/75 dark:text-[#f5efe7] transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:absolute sm:h-11 sm:px-5 md:h-12 md:px-6 lg:h-14 lg:px-8 ${skill.position} ${skill.emphasis}`}>
                                        <span className="text-nowrap text-center font-serif text-xs font-medium leading-none sm:text-base md:text-lg lg:text-xl">{skill.name}</span>
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











