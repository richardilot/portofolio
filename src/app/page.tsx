import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCardIkd, ProjectCardSiak, ProjectCardEst } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
// import { ContactForm } from "@/components/contact-form"
import { ThemeToggle } from "@/components/theme-toggle"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Valentino Richard Ilot</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#about"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              <Link href="https://github.com/richardilot" target="_blank" rel="noreferrer">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://linkedin.com/in/valentino-richard-ilot" target="_blank" rel="noreferrer">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Link
              href="https://github.com/richardilot"
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Follow my work on GitHub
            </Link>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">Valentino Richard Ilot</h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Junior Software Engineer working on projects of Indonesian Ministry of Home Affairs
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link href="#contact" className="gap-1">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="about" className="container mx-auto space-y-6 bg-slate-50 py-8 dark:bg-slate-900 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">About Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I am a passionate Junior Software Engineer currently building web and mobile application. I specialize in
              Java, PL/SQL, Flutter, and JavaScript. I am dedicated to creating clean, and efficient solutions.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Building interactive user interfaces with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Backend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating server-side applications with a focus on performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">DevOps</h3>
                  <p className="text-sm text-muted-foreground">
                    Managing on-premise infrastructure for seamless deployment and high availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-[64rem] gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2 p-4">
              <div className="flex items-center justify-center space-x-2">
                <SkillBadge name="JavaScript" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="Flutter" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 p-4">
              <div className="flex items-center justify-center space-x-2">
                <SkillBadge name="Node.js" />
                <SkillBadge name="Flutter" />
                <SkillBadge name="Dart" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 p-4">
              <div className="flex items-center justify-center space-x-2">
                <SkillBadge name="PL/SQL" />
                <SkillBadge name="Java" />
                <SkillBadge name="Vert.x" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 p-4">
              <div className="flex items-center justify-center space-x-2">
                <SkillBadge name="Docker" />
                <SkillBadge name="SVN" />
                <SkillBadge name="Git" />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="container mx-auto space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Here are some of my recent projects.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-3">
            <ProjectCardSiak
              title="SIAK Terpusat"
              description="A national information system for Indonesian civil registration."
              tags={["PL/SQL", "Node.js", "Java"]}
              imageUrl="/richardilot-github-pages/moha.svg?height=300&width=400" // Update the path here
              newsUrl="https://disdukcapil.limapuluhkotakab.go.id/berita/rakornas-dukcapil-2022-kemendagri-luncurkan-siak-terpusat"
            />
            <ProjectCardIkd
              title="Identitas Kependudukan Digital"
              description="A national digital identity mobile application for accessing Indonesian civil registration documents."
              tags={["Flutter", "Java", "PL/SQL", "Kafka", "Redis", "Git"]}
              imageUrl="/richardilot-github-pages/moha.svg?height=300&width=400"
              androidUrl="https://play.google.com/store/apps/details?id=gov.dukcapil.mobile_id&hl=id"
              iosUrl="https://apps.apple.com/id/app/identitas-kependudukan-digital/id6448944056?l=id"
            />
            <ProjectCardEst
              title="Vector-ST"
              description="An electric superbike made by a student team consisting of University of Twente and Saxion UAS students."
              tags={["Embedded C++", "Electrical Engineering"]}
              imageUrl="/richardilot-github-pages/next.svg?height=300&width=400"
              videoUrl="https://www.youtube.com/watch?v=37XCUOk7i9g"
              websiteUrl="https://electricsuperbiketwente.nl/"
            />
          </div>
        </section>
        <section id="contact" className="container mx-auto space-y-6 bg-slate-50 py-8 dark:bg-slate-900 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Contact Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </div>
          <div className="mx-auto flex justify-center items-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-2">
            <div className="flex flex-col space-y-4 p-4">
              <h3 className="text-xl font-bold">Get in Touch</h3>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>richardilot.vr@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/valentino-richard-ilot</span>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="h-5 w-5" />
                <span>github.com/richardilot</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-4 ml-auto">
            <Link href="https://github.com/richardilot" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/valentino-richard-ilot" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}