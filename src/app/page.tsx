import type { CSSProperties } from "react"
import { BackToTop } from "@/components/back-to-top"
import HeroSection from "@/components/hero-section-1"
import { RevealSection } from "@/components/reveal-section"

const projectItems = [
  {
    title: "AI Code Helper",
    stack: ["Spring Boot", "LangChain4j", "DashScope", "Vue"],
    description: "An AI-powered coding coach for algorithm practice, backend interview preparation, and project learning.",
    github: "https://github.com/Thxnks",
  },
  {
    title: "Citylife Review",
    stack: ["Spring Boot", "MySQL", "Redis", "RabbitMQ"],
    description: "A local life review platform focusing on backend APIs, caching, message queues, and practical business logic.",
    github: "https://github.com/Thxnks",
  },
  {
    title: "Personal Portfolio",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    description: "A personal website built to showcase projects, technical skills, and learning experience.",
    github: "https://github.com/Thxnks",
  },
]

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
    <>
      <HeroSection />
      <BackToTop />

      <RevealSection id="projects" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-xs font-medium uppercase tracking-wider md:text-sm text-muted-foreground">Projects</p>
          <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">Selected Work</h2>
          <div data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties} className="mt-8 divide-y divide-zinc-200/80 border-y border-zinc-200/80">
            {projectItems.map((project) => (
              <article
                key={project.title}
                className="group grid gap-4 py-5 transition-colors duration-300 hover:bg-zinc-50/70 md:grid-cols-[1fr_20rem] md:items-center md:gap-6">
                <div>
                  <h3 className="font-serif text-lg font-medium md:text-xl">{project.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div className="space-y-3 md:text-right">
                  <div className="flex flex-wrap gap-1.5 md:justify-end">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-200/80 bg-white/70 px-2.5 py-1 font-serif text-xs text-muted-foreground shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex md:justify-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-3.5 font-serif text-xs font-medium text-foreground shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="skills" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties} className="text-left text-xs font-medium uppercase tracking-wider md:text-sm text-muted-foreground">Skills</p>
          <h2 data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties} className="mt-3 text-left font-serif text-2xl font-medium md:text-3xl">Technical Focus</h2>
          <div data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties} className="mt-8 divide-y divide-zinc-200/80 border-y border-zinc-200/80">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="grid gap-3 py-4 md:grid-cols-[14rem_1fr] md:items-center md:gap-6">
                <p className="font-serif text-base font-medium md:text-lg">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-200/80 bg-white/70 px-3.5 py-1.5 font-serif text-sm text-muted-foreground shadow-sm">
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
          <p data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties} className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            I am an Artificial Intelligence student learning Java backend development. I focus on Spring Boot, MySQL, Redis, RabbitMQ, Docker, and building practical AI-powered applications.
          </p>
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
                  <span className="mt-1.5 size-2 rounded-full border border-zinc-300 bg-background shadow-sm" />
                  {index < journeyItems.length - 1 ? <span className="absolute top-4 h-full w-px bg-zinc-200" /> : null}
                </div>
                <article className="mb-3 rounded-xl border border-zinc-200/80 bg-white/70 p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-md md:p-4">
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
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-5 font-serif text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              Email Me
            </a>
            <a
              href="https://github.com/Thxnks"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-5 font-serif text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-5 font-serif text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              Download Resume
            </a>
          </div>
        </div>
      </RevealSection>
    </>
  )
}








