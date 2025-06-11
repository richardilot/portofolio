import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, Youtube, Newspaper, Smartphone } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  demoUrl: string
}

interface ProjectCardSiakProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  newsUrl: string
}

interface ProjectCardIkdProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  androidUrl: string
  iosUrl: string
}

interface ProjectCardEstProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  websiteUrl: string
  videoUrl: string
}

function ProjectCard({ title, description, tags, imageUrl, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/portofolio/next.svg"} alt={title} fill className="object-cover" priority />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} target="_blank" rel="noreferrer" className="gap-1">
            <Github className="h-4 w-4" /> Code
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={demoUrl} target="_blank" rel="noreferrer" className="gap-1">
            <ExternalLink className="h-4 w-4" /> Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ProjectCardSiak({ title, description, tags, imageUrl, newsUrl }: ProjectCardSiakProps) {
    return (
      <Card className="overflow-hidden">
        <div className="relative h-48 w-full">
          <Image src={imageUrl || "/portofolio/next.svg"} alt={title} fill className="object-cover" priority />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link href={newsUrl} target="_blank" rel="noreferrer" className="gap-1">
              <Newspaper className="h-4 w-4" /> News
            </Link>
          </Button>
        </CardFooter>
      </Card>
    )
}

function ProjectCardIkd({ title, description, tags, imageUrl, androidUrl, iosUrl }: ProjectCardIkdProps) {
    return (
      <Card className="overflow-hidden">
        <div className="relative h-48 w-full">
          <Image src={imageUrl || "/portofolio/next.svg"} alt={title} fill className="object-cover" priority />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link href={androidUrl} target="_blank" rel="noreferrer" className="gap-1">
              <Smartphone className="h-4 w-4" /> Android
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={iosUrl} target="_blank" rel="noreferrer" className="gap-1">
              <Smartphone className="h-4 w-4" /> iOS
            </Link>
          </Button>
        </CardFooter>
      </Card>
    )
}

function ProjectCardEst({ title, description, tags, imageUrl, videoUrl, websiteUrl }: ProjectCardEstProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/portofolio/next.svg"} alt={title} fill className="object-cover" priority />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={videoUrl} target="_blank" rel="noreferrer" className="gap-1">
            <Youtube className="h-4 w-4" /> Video
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={websiteUrl} target="_blank" rel="noreferrer" className="gap-1">
            <ExternalLink className="h-4 w-4" /> Website
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


export {
    ProjectCard,
    ProjectCardSiak,
    ProjectCardIkd,
    ProjectCardEst,
}

