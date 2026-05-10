'use client'

import type { CSSProperties } from "react"
import { BackToTop } from "@/components/back-to-top"
import HeroSection from "@/components/hero-section-1"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { ProjectsSection } from "@/components/projects-section"
import { ResourcesSection } from "@/components/resources-section"
import { RevealSection } from "@/components/reveal-section"

const capabilityGroups = [
  {
    key: "backendCore",
    index: "01",
    skills: ["Java", "Spring Boot", "MySQL", "Redis", "RESTful API", "MyBatis-Plus"],
  },
  {
    key: "engineeringPractice",
    index: "02",
    skills: ["RabbitMQ", "Redisson", "Docker", "Docker Compose", "Spring Security", "JWT", "Flyway", "Linux", "Git"],
  },
  {
    key: "aiApplication",
    index: "03",
    skills: ["LangChain4j", "DashScope", "AI Agent", "RAG", "Tool Calling", "Vue 3", "LLM API"],
  },
] as const

function HomeContent() {
  const { t } = useLanguage()

  return (
    <div className="page-soft-bg min-h-screen">
      <HeroSection />
      <BackToTop />
      <div>
        <RevealSection id="projects" className="scroll-mt-24 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-sm font-medium uppercase tracking-wider md:text-base text-muted-foreground">{t.projects.eyebrow}</p>
            <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">{t.projects.title}</h2>
            <ProjectsSection />
          </div>
        </RevealSection>

        <RevealSection id="resources" className="scroll-mt-24 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-sm font-medium uppercase tracking-wider md:text-base text-muted-foreground">{t.resources.eyebrow}</p>
            <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">{t.resources.title}</h2>
            <p data-reveal style={{ '--reveal-delay': '180ms' } as CSSProperties} className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              {t.resources.description}
            </p>
            <ResourcesSection />
          </div>
        </RevealSection>
        <RevealSection id="skills" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-3xl">
              <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-sm font-medium uppercase tracking-wider md:text-base text-muted-foreground">{t.skills.eyebrow}</p>
              <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">{t.skills.title}</h2>
              <p data-reveal style={{ '--reveal-delay': '180ms' } as CSSProperties} className="mt-5 font-serif text-2xl font-medium text-foreground md:text-3xl">
                {t.skills.positioning}
              </p>
              <p data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties} className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
                {t.skills.intro}
              </p>
            </div>
            <div data-reveal style={{ '--reveal-delay': '280ms' } as CSSProperties} className="mt-10 divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
              {capabilityGroups.map((group) => (
                <article
                  key={group.key}
                  className="group relative grid gap-4 rounded-2xl border border-transparent px-4 py-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-black/5 hover:bg-white/55 hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] dark:hover:border-white/10 dark:hover:bg-white/[0.06] dark:hover:shadow-[0_14px_36px_rgba(0,0,0,0.22)] md:grid-cols-[240px_1fr] md:gap-8 md:px-6">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-sm text-black/40 transition-colors duration-300 group-hover:text-black/55 dark:text-[#b9aca0]/70 dark:group-hover:text-[#f0e5d8]/70 md:text-base">{group.index}</span>
                      <h3 className="whitespace-nowrap font-serif text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-black dark:group-hover:text-[#f5efe7] md:text-2xl">{t.skills.groups[group.key].title}</h3>
                    </div>
                    <p className="mt-2 max-w-md text-base leading-7 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/75 md:text-lg">
                      {t.skills.groups[group.key].description}
                    </p>
                  </div>
                  <div className="flex flex-wrap content-start gap-2.5 md:pt-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full border border-black/5 bg-white/55 px-4 py-1.5 font-serif text-base leading-5 text-black/65 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors duration-300 group-hover:border-black/10 group-hover:bg-white/80 group-hover:text-black/75 dark:border-white/10 dark:bg-white/[0.06] dark:text-[#d7ccbf] dark:group-hover:border-white/15 dark:group-hover:bg-white/[0.1] dark:group-hover:text-[#f0e5d8]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>
        <RevealSection id="about" className="scroll-mt-24 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-sm font-medium uppercase tracking-wider md:text-base text-muted-foreground">{t.about.eyebrow}</p>
            <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">{t.about.title}</h2>
            <div data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties} className="mt-4 max-w-3xl space-y-4 text-lg leading-9 text-muted-foreground md:text-xl md:leading-10">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="journey" className="scroll-mt-24 pt-24 pb-14">
          <div className="mx-auto max-w-5xl px-6">
            <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-sm font-medium uppercase tracking-wider md:text-base text-muted-foreground">{t.journey.eyebrow}</p>
            <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">{t.journey.title}</h2>
            <div data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties} className="mt-6 max-w-[680px]">
              {t.journey.items.map((item, index) => (
                <div
                  key={item.time}
                  className="grid grid-cols-[4rem_1.25rem_1fr] gap-2 md:grid-cols-[4.75rem_1.5rem_1fr] md:gap-3">
                  <div className="pt-1 text-right font-serif text-sm font-medium text-muted-foreground md:text-base">
                    {item.time}
                  </div>
                  <div className="relative flex justify-center">
                    <span className="mt-1.5 size-2 rounded-full border border-zinc-300 bg-background shadow-sm dark:border-white/20 dark:bg-[#24211d]" />
                    {index < t.journey.items.length - 1 ? <span className="absolute top-4 h-full w-px bg-zinc-200 dark:bg-white/10" /> : null}
                  </div>
                  <article className="mb-3 rounded-xl border border-zinc-200/80 bg-white/70 p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-[#34302a]/75 dark:hover:border-white/20 dark:hover:bg-[#3d372f] md:p-4">
                    <h3 className="font-serif text-lg font-medium md:text-xl">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">{item.description}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="contact" className="scroll-mt-24 pt-14 pb-24">
          <div className="mx-auto max-w-5xl px-6">
            <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-sm font-medium uppercase tracking-wider md:text-base text-muted-foreground">{t.contact.eyebrow}</p>
            <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">{t.contact.title}</h2>
            <p data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties} className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              {t.contact.description}
            </p>
            <div data-reveal style={{ '--reveal-delay': '360ms' } as CSSProperties} className="mt-8 flex max-w-3xl flex-wrap gap-3">
              <a
                href="mailto:thxnks97@gmail.com"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-6 font-serif text-base font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:bg-[#3d372f]">
                {t.contact.email}
              </a>
              <a
                href="https://github.com/Thxnks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-6 font-serif text-base font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:bg-[#3d372f]">
                {t.contact.github}
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-6 font-serif text-base font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:bg-[#3d372f]">
                {t.contact.resume}
              </a>
            </div>
          </div>
        </RevealSection>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}












