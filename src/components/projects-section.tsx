'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

const projects = [
  {
    key: 'aiCodeHelper',
    title: 'AI Code Helper',
    github: 'https://github.com/Thxnks/AI-Code-Helper-For-Hot100',
    stack: ['Spring Boot', 'LangChain4j', 'DashScope', 'Vue', 'SSE', 'RAG'],
  },
  {
    key: 'citylifeReview',
    title: 'Citylife Review',
    github: 'https://github.com/Thxnks/Citylife-review',
    stack: ['Spring Boot', 'MySQL', 'Redis', 'RabbitMQ', 'Docker'],
  },
  {
    key: 'personalPortfolio',
    title: 'Personal Portfolio',
    github: 'https://github.com/Thxnks/tianzhijiu.dev',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
  },
] as const

function DetailGroup({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h4 className="font-serif text-base font-medium text-foreground md:text-lg">{title}</h4>
      <ul className="mt-2 space-y-1.5 text-base leading-7 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1 rounded-full bg-muted-foreground/60" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProjectsSection() {
  const { t } = useLanguage()
  const [expandedProjects, setExpandedProjects] = React.useState<string[]>([])

  const toggleProject = (title: string) => {
    setExpandedProjects((current) =>
      current.includes(title)
        ? current.filter((projectTitle) => projectTitle !== title)
        : [...current, title]
    )
  }

  return (
    <div data-reveal style={{ '--reveal-delay': '240ms' } as React.CSSProperties} className="mt-8 divide-y divide-zinc-200/80 border-y border-zinc-200/80 dark:divide-white/10 dark:border-white/10">
      {projects.map((project) => {
        const isOpen = expandedProjects.includes(project.title)
        const content = t.projects.items[project.key]

        return (
          <article
            key={project.title}
            className="group py-5 transition-colors duration-300 hover:bg-zinc-50/70 dark:hover:bg-white/[0.04]">
            <div className="grid gap-4 md:grid-cols-[1fr_20rem] md:items-center md:gap-6">
              <div>
                <h3 className="font-serif text-xl font-medium md:text-2xl">{project.title}</h3>
                <p className="mt-2 max-w-2xl text-base leading-7 text-muted-foreground">{content.description}</p>
              </div>
              <div className="space-y-3 md:text-right">
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1.5 font-serif text-sm text-muted-foreground shadow-sm dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#c8baaa]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-4 font-serif text-sm font-medium text-foreground shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:bg-[#3d372f]">
                    {t.projects.github}
                  </a>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleProject(project.title)}
                    className="inline-flex h-8 items-center justify-center gap-1 rounded-full border border-zinc-200/80 bg-white/70 px-3.5 font-serif text-xs font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:bg-[#3d372f]">
                    {t.projects.details}
                    <ChevronDown className={cn('size-3.5 transition-transform duration-300', isOpen && 'rotate-180')} />
                  </button>
                </div>
              </div>
            </div>

            <div
              className={cn(
                'grid overflow-hidden transition-all duration-500 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}>
              <div className="min-h-0">
                <div className="mt-5 grid gap-5 rounded-xl border border-zinc-200/80 bg-white/45 p-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-[#34302a]/45 md:grid-cols-3 md:p-5">
                  <DetailGroup title={t.projects.keyFeatures} items={content.keyFeatures} />
                  <DetailGroup title={t.projects.whatIBuilt} items={content.built} />
                  <DetailGroup title={t.projects.whatILearned} items={content.learned} />
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

