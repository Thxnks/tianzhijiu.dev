'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'AI Code Helper',
    github: 'https://github.com/Thxnks/AI-Code-Helper-For-Hot100',
    description: 'An AI-powered coding coach for algorithm practice, backend interview preparation, and project learning.',
    stack: ['Spring Boot', 'LangChain4j', 'DashScope', 'Vue', 'SSE', 'RAG'],
    details: {
      keyFeatures: [
        'SSE streaming chat responses',
        'Multi-session memory',
        'Role-based AI tutoring',
        'Hot100 problem context support',
        'Basic RAG and tool calling',
      ],
      built: [
        'Built the backend AI chat flow with Spring Boot and LangChain4j.',
        'Integrated DashScope/Qwen for AI responses.',
        'Connected algorithm problem context with the chat experience.',
      ],
      learned: [
        'Learned how to integrate LLM APIs into backend services.',
        'Practiced SSE streaming, session memory, and AI tool invocation.',
        'Understood how AI applications can be structured as backend projects.',
      ],
    },
  },
  {
    title: 'Citylife Review',
    github: 'https://github.com/Thxnks/Citylife-review',
    description: 'A local life review platform focused on backend APIs, caching, message queues, and practical business logic.',
    stack: ['Spring Boot', 'MySQL', 'Redis', 'RabbitMQ', 'Docker'],
    details: {
      keyFeatures: [
        'User review and local life content management',
        'Redis-based caching',
        'RabbitMQ message queue integration',
        'MySQL data persistence',
        'Backend API design',
      ],
      built: [
        'Built core backend APIs with Spring Boot.',
        'Used MySQL for business data storage.',
        'Practiced Redis caching and RabbitMQ asynchronous processing.',
      ],
      learned: [
        'Learned how caching improves backend performance.',
        'Practiced message queue usage in real business scenarios.',
        'Improved understanding of backend project structure and API design.',
      ],
    },
  },
  {
    title: 'Personal Portfolio',
    github: 'https://github.com/Thxnks/tianzhijiu.dev',
    description: 'A personal website built to showcase projects, technical skills, learning journey, and contact information.',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
    details: {
      keyFeatures: [
        'Responsive personal portfolio homepage',
        'Project showcase section',
        'Skills and learning journey sections',
        'Light / dark theme support',
        'Smooth scroll and subtle animations',
      ],
      built: [
        'Built a modern portfolio website with Next.js and Tailwind CSS.',
        'Designed sections for projects, skills, about, journey, and contact.',
        'Added theme switching, scroll animations, and back-to-top interaction.',
      ],
      learned: [
        'Learned how to structure a personal portfolio website.',
        'Practiced responsive layout and component-based frontend development.',
        'Improved UI polish through spacing, typography, and animation tuning.',
      ],
    },
  },
]

function DetailGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-serif text-sm font-medium text-foreground md:text-base">{title}</h4>
      <ul className="mt-2 space-y-1.5 text-sm leading-6 text-muted-foreground">
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

        return (
          <article
            key={project.title}
            className="group py-5 transition-colors duration-300 hover:bg-zinc-50/70 dark:hover:bg-white/[0.04]">
            <div className="grid gap-4 md:grid-cols-[1fr_20rem] md:items-center md:gap-6">
              <div>
                <h3 className="font-serif text-lg font-medium md:text-xl">{project.title}</h3>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{project.description}</p>
              </div>
              <div className="space-y-3 md:text-right">
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200/80 bg-white/70 px-2.5 py-1 font-serif text-xs text-muted-foreground shadow-sm dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#c8baaa]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-3.5 font-serif text-xs font-medium text-foreground shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:bg-[#3d372f]">
                    GitHub
                  </a>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleProject(project.title)}
                    className="inline-flex h-8 items-center justify-center gap-1 rounded-full border border-zinc-200/80 bg-white/70 px-3.5 font-serif text-xs font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:bg-[#3d372f]">
                    Details
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
                  <DetailGroup title="Key Features" items={project.details.keyFeatures} />
                  <DetailGroup title="What I Built" items={project.details.built} />
                  <DetailGroup title="What I Learned" items={project.details.learned} />
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

