'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

const projects = [
  {
    key: 'aiCodeHelper',
    title: 'AI Code Helper For Hot100',
    github: 'https://github.com/Thxnks/AI-Code-Helper-For-Hot100',
    stack: ['Java 21', 'Spring Boot 3.5', 'LangChain4j', 'DashScope/Qwen', 'ReAct Agent', 'SSE'],
    fullStack: ['Java 21', 'Spring Boot 3.5', 'Spring Security JWT', 'Vue 3', 'LangChain4j', 'DashScope/Qwen', 'MCP', 'SSE', 'RAG', 'MySQL', 'Redis', 'RabbitMQ', 'Flyway', 'Docker Compose'],
  },
  {
    key: 'citylifeReview',
    title: 'CityLife Review',
    github: 'https://github.com/Thxnks/Citylife-review',
    stack: ['Java 8', 'Spring Boot', 'Redis', 'RabbitMQ', 'Redisson', 'Lua'],
    fullStack: ['Java 8', 'Spring Boot', 'MyBatis-Plus', 'MySQL', 'Redis', 'Redisson', 'RabbitMQ', 'Lua', 'Docker Compose', 'Hutool', 'Lombok'],
  },
  {
    key: 'personalPortfolio',
    title: 'Personal Portfolio',
    github: 'https://github.com/Thxnks/tianzhijiu.dev',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
    fullStack: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
  },
] as const

function DetailGroup({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h4 className="font-serif text-base font-medium text-foreground md:text-lg">{title}</h4>
      <ul className="mt-2 space-y-1.5 text-base leading-7 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TechStack({ title, stack }: { title: string; stack: readonly string[] }) {
  return (
    <div>
      <h4 className="font-serif text-base font-medium text-foreground md:text-lg">{title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-black/5 bg-white/55 px-3 py-1.5 font-serif text-sm text-black/65 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors duration-300 group-hover:border-black/10 group-hover:bg-white/80 group-hover:text-black/75 dark:border-white/10 dark:bg-white/[0.06] dark:text-[#d7ccbf] dark:group-hover:border-white/15 dark:group-hover:bg-white/[0.1] dark:group-hover:text-[#f0e5d8]">
            {tech}
          </span>
        ))}
      </div>
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
        const hasBackendHighlights = 'highlights' in content

        return (
          <article
            key={project.title}
            className="group relative rounded-2xl border border-transparent px-4 py-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-black/5 hover:bg-white/55 hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] dark:hover:border-white/10 dark:hover:bg-white/[0.06] dark:hover:shadow-[0_14px_36px_rgba(0,0,0,0.22)] md:px-6">
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
                      className="rounded-full border border-black/5 bg-white/55 px-3 py-1.5 font-serif text-sm text-black/65 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors duration-300 group-hover:border-black/10 group-hover:bg-white/80 group-hover:text-black/75 dark:border-white/10 dark:bg-white/[0.06] dark:text-[#d7ccbf] dark:group-hover:border-white/15 dark:group-hover:bg-white/[0.1] dark:group-hover:text-[#f0e5d8]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-full border border-black/5 bg-white/55 px-4 font-serif text-sm font-medium text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors duration-300 group-hover:border-black/10 group-hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.06] dark:text-[#f6efe5] dark:group-hover:border-white/15 dark:group-hover:bg-white/[0.1]">
                    {t.projects.github}
                  </a>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleProject(project.title)}
                    className="inline-flex h-8 items-center justify-center gap-1 rounded-full border border-black/5 bg-white/55 px-3.5 font-serif text-xs font-medium text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors duration-300 group-hover:border-black/10 group-hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.06] dark:text-[#f6efe5] dark:group-hover:border-white/15 dark:group-hover:bg-white/[0.1]">
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
                <div className="mt-5 rounded-xl border border-zinc-200/80 bg-white/45 p-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-[#34302a]/45 md:p-5">
                  {hasBackendHighlights ? (
                    <div className="grid gap-5 md:grid-cols-[1fr_16rem] md:gap-6">
                      <DetailGroup title={t.projects.backendHighlights} items={content.highlights} />
                      <TechStack title={t.projects.fullTechStack} stack={project.fullStack} />
                    </div>
                  ) : (
                    <div className="grid gap-5 md:grid-cols-3">
                      <DetailGroup title={t.projects.keyFeatures} items={content.keyFeatures} />
                      <DetailGroup title={t.projects.whatIBuilt} items={content.built} />
                      <DetailGroup title={t.projects.whatILearned} items={content.learned} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}


