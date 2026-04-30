import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProjectBySlug, getProjects } from "@/lib/projects"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = await getProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-7xl px-6 py-20">
      <Button variant="outline" asChild>
        <Link href="/proyectos">Volver a proyectos</Link>
      </Button>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="relative h-[520px] overflow-hidden rounded-3xl border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            placeholder="blur"
            blurDataURL={project.blurDataURL}
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Proyecto artesanal
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Materiales utilizados</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.materials.map((material) => (
                <Badge key={material} variant="secondary">
                  {material}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border p-6">
            <h2 className="text-lg font-semibold">Trabajo realizado</h2>
            <p className="mt-3 text-muted-foreground">
              Proyecto diseñado y ejecutado de forma artesanal, cuidando la
              selección de la madera, los acabados y la integración con el
              espacio final.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}