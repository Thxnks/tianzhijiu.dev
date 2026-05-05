'use client'

import { ExternalLink } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const resourceGroups = [
  {
    key: 'backendFundamentals',
    resources: [
      {
        key: 'javaGuide',
        title: 'JavaGuide',
        url: 'https://javaguide.cn/home.html',
        tags: ['Java', 'Interview', 'System Design', 'Database'],
      },
      {
        key: 'xiaolinCoding',
        title: '小林 coding',
        url: 'https://xiaolincoding.com/',
        tags: ['Network', 'OS', 'MySQL', 'Redis'],
      },
    ],
  },
  {
    key: 'aiAgentLearning',
    resources: [
      {
        key: 'helloAgents',
        title: 'Hello Agents',
        url: 'https://hello-agents.datawhale.cc/#/',
        tags: ['AI Agent', 'Architecture'],
      },
      {
        key: 'huggingFaceAgents',
        title: 'Hugging Face Agents Course',
        url: 'https://huggingface.co/learn/agents-course/zh-CN/unit0/introduction',
        tags: ['AI Agent', 'Tools', 'Agentic RAG'],
      },
    ],
  },
] as const

export function ResourcesSection() {
  const { t } = useLanguage()

  return (
    <div data-reveal style={{ '--reveal-delay': '240ms' } as React.CSSProperties} className="mt-8 space-y-9">
      {resourceGroups.map((group) => (
        <section key={group.key} aria-labelledby={`${group.key}-title`}>
          <div className="mb-4 flex items-center gap-3">
            <h3 id={`${group.key}-title`} className="font-serif text-lg font-medium text-foreground md:text-xl">
              {t.resources.groups[group.key]}
            </h3>
            <div className="h-px flex-1 bg-zinc-200/80 dark:bg-white/10" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {group.resources.map((resource) => (
              <article
                key={resource.key}
                className="group flex min-h-[210px] flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white/80 dark:border-white/10 dark:bg-[#34302a]/55 dark:hover:border-white/20 dark:hover:bg-[#3d372f]/80 md:min-h-[220px] md:p-5">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-serif text-xl font-medium text-foreground md:text-2xl">{resource.title}</h4>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.resources.visit} ${resource.title}`}
                      className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:border-white/20 dark:hover:bg-[#3d372f]">
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                  <p className="mt-3 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                    {t.resources.items[resource.key].description}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1.5 font-serif text-sm text-muted-foreground shadow-sm dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#c8baaa]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
