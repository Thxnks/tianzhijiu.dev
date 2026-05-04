import HeroSection from "@/components/hero-section-1"

export default function Home() {
  return (
    <>
      <HeroSection />

      <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Projects</p>
        <h2 className="mt-3 font-serif text-3xl font-medium">Selected Work</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Add your featured projects here. Each project can include a short description, tech stack, and links to GitHub or a live demo.
        </p>
      </section>

      <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">About</p>
        <h2 className="mt-3 font-serif text-3xl font-medium">About TianZhiJiu</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Write a concise introduction about who you are, what you build, and what kind of work you are interested in.
        </p>
      </section>

      <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Contact</p>
        <h2 className="mt-3 font-serif text-3xl font-medium">Get in Touch</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
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
