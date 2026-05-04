import HeroSection from "@/components/hero-section-1"

export default function Home() {
  return (
    <>
      <HeroSection />

      <section id="projects" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24">
        <p className="mx-auto max-w-3xl text-left text-xs font-medium uppercase tracking-wider md:text-sm text-muted-foreground">Projects</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-left font-serif text-2xl font-medium md:text-3xl">Selected Work</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground md:text-base">
          Add your featured projects here. Each project can include a short description, tech stack, and links to GitHub or a live demo.
        </p>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24">
        <p className="mx-auto max-w-3xl text-left text-xs font-medium uppercase tracking-wider md:text-sm text-muted-foreground">About</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-left font-serif text-2xl font-medium md:text-3xl">About TianZhiJiu</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground md:text-base">
          Write a concise introduction about who you are, what you build, and what kind of work you are interested in.
        </p>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24">
        <p className="mx-auto max-w-3xl text-left text-xs font-medium uppercase tracking-wider md:text-sm text-muted-foreground">Contact</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-left font-serif text-2xl font-medium md:text-3xl">Get in Touch</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground md:text-base">
          For collaboration, project inquiries, or general messages, email me at{" "}
          <a className="font-medium text-foreground underline underline-offset-4" href="mailto:thxnks97@gmail.com">
            thxnks97@gmail.com
          </a>
          .
        </p>
      </section>
    </>
  )
}





