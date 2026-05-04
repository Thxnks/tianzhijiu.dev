import type { CSSProperties } from "react"
import { BackToTop } from "@/components/back-to-top"
import HeroSection from "@/components/hero-section-1"
import { ProjectsSection } from "@/components/projects-section"
import { RevealSection } from "@/components/reveal-section"


const skillGroups = [
  {
    category: "Backend",
    skills: ["Java", "Spring Boot", "REST API"],
  },
  {
    category: "Database & Middleware",
    skills: ["MySQL", "Redis", "RabbitMQ"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Linux"],
  },
  {
    category: "Frontend",
    skills: ["Vue", "React", "Tailwind CSS"],
  },
  {
    category: "AI",
    skills: ["LLM API", "RAG basics", "AI coding tools"],
  },
]

const journeyItems = [
  {
    time: "2024",
    title: "Java Web Fundamentals",
    description: "Learned Java Web fundamentals and built basic management-system features.",
  },
  {
    time: "2025",
    title: "Backend Project Practice",
    description: "Practiced Spring Boot, MySQL, Redis, RabbitMQ, and Docker through backend projects.",
  },
  {
    time: "2026",
    title: "AI + Backend Exploration",
    description: "Explored AI-powered developer tools and LLM integration with backend services.",
  },
]

export default function Home() {
  return (
    <div className="page-soft-bg min-h-screen">
      <HeroSection />
      <BackToTop />
      <div>
        <RevealSection id="projects" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-xs font-medium uppercase tracking-wider md:text-sm text-muted-foreground">Projects</p>
          <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">Selected Work</h2>
          <ProjectsSection />
        </div>
      </RevealSection>

      <RevealSection id="skills" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-xs font-medium uppercase tracking-wider md:text-sm text-muted-foreground">Skills</p>
          <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">Technical Focus</h2>
          <div data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties} className="mt-8 divide-y divide-zinc-200/80 border-y border-zinc-200/80 dark:divide-white/10 dark:border-white/10">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="grid gap-3 py-4 md:grid-cols-[14rem_1fr] md:items-center md:gap-6">
                <p className="font-serif text-base font-medium md:text-lg">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-200/80 bg-white/70 px-3.5 py-1.5 font-serif text-sm text-muted-foreground shadow-sm dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#c8baaa]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="about" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-xs font-medium uppercase tracking-wider md:text-sm text-muted-foreground">About</p>
          <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">About TianZhiJiu</h2>
          <div data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties} className="mt-4 max-w-3xl space-y-4 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            <p>
              I am an Artificial Intelligence student focused on Agent backend development and AI-powered web applications.
            </p>
            <p>
              I am currently learning Spring Boot, MySQL, Redis, RabbitMQ, and Docker, while exploring how LLMs can work with coding assistants, learning platforms, and backend services.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="journey" className="scroll-mt-24 pt-24 pb-14">
        <div className="mx-auto max-w-5xl px-6">
          <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-xs font-medium uppercase tracking-wider md:text-sm text-muted-foreground">Learning Journey</p>
          <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">From Java Web to AI Tools</h2>
          <div data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties} className="mt-6 max-w-[680px]">
            {journeyItems.map((item, index) => (
              <div
                key={item.time}
                className="grid grid-cols-[4rem_1.25rem_1fr] gap-2 md:grid-cols-[4.75rem_1.5rem_1fr] md:gap-3">
                <div className="pt-1 text-right font-serif text-xs font-medium text-muted-foreground md:text-sm">
                  {item.time}
                </div>
                <div className="relative flex justify-center">
                  <span className="mt-1.5 size-2 rounded-full border border-zinc-300 bg-background shadow-sm dark:border-white/20 dark:bg-[#24211d]" />
                  {index < journeyItems.length - 1 ? <span className="absolute top-4 h-full w-px bg-zinc-200 dark:bg-white/10" /> : null}
                </div>
                <article className="mb-3 rounded-xl border border-zinc-200/80 bg-white/70 p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-[#34302a]/75 dark:hover:border-white/20 dark:hover:bg-[#3d372f] md:p-4">
                  <h3 className="font-serif text-base font-medium md:text-lg">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground md:text-sm">{item.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="contact" className="scroll-mt-24 pt-14 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-xs font-medium uppercase tracking-wider md:text-sm text-muted-foreground">Contact</p>
          <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">Let's Connect</h2>
          <p data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties} className="mt-4 max-w-3xl text-sm text-muted-foreground md:text-base">
            I am open to backend internship opportunities, project collaboration, and technical discussions.
          </p>
          <div data-reveal style={{ '--reveal-delay': '360ms' } as CSSProperties} className="mt-8 flex max-w-3xl flex-wrap gap-3">
            <a
              href="mailto:thxnks97@gmail.com"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-5 font-serif text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:bg-[#3d372f]">
              Email Me
            </a>
            <a
              href="https://github.com/Thxnks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-5 font-serif text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:bg-[#3d372f]">
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-5 font-serif text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#34302a]/75 dark:text-[#f6efe5] dark:hover:bg-[#3d372f]">
              Download Resume
            </a>
          </div>
        </div>
        </RevealSection>
      </div>
    </div>
  )
}







