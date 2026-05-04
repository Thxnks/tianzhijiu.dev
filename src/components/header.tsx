'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Contact', href: '#contact', id: 'contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [activeSection, setActiveSection] = React.useState('')

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    React.useEffect(() => {
        const sections = menuItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean) as HTMLElement[]

        if (!sections.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

                if (visibleEntry?.target.id) {
                    setActiveSection(visibleEntry.target.id)
                }
            },
            {
                rootMargin: '-25% 0px -60% 0px',
                threshold: [0.15, 0.25, 0.5],
            }
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className={cn('fixed z-20 w-full transition-all duration-300', isScrolled && 'bg-background/75 border-b border-black/5 backdrop-blur-lg')}>
                <div className="mx-auto max-w-5xl px-6">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-6 lg:gap-0">
                        <div className="flex w-full justify-between gap-6 lg:w-auto">
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                            <ul className="flex items-center justify-center gap-8">
                                {menuItems.map((item) => {
                                    const isActive = activeSection === item.id

                                    return (
                                        <li key={item.id}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    'relative px-1 py-2 font-serif text-lg text-muted-foreground transition-colors duration-200 after:absolute after:left-0 after:top-full after:h-px after:w-full after:origin-center after:scale-x-0 after:bg-foreground after:transition-transform after:duration-200 hover:text-foreground',
                                                    isActive && 'text-foreground after:scale-x-100'
                                                )}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-7">
                                    {menuItems.map((item) => {
                                        const isActive = activeSection === item.id

                                        return (
                                            <li key={item.id}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMenuState(false)}
                                                    className={cn(
                                                        'block font-serif text-lg text-muted-foreground underline-offset-4 transition-colors duration-150 hover:text-foreground',
                                                        isActive && 'text-foreground underline'
                                                    )}>
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
