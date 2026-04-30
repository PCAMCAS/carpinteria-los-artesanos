import Image from "next/image"
import Link from "next/link"
import { getProjects } from "@/lib/projects"

export const revalidate = 60

export const metadata = {
  title: "Proyectos",
  description:
    "Galería de proyectos realizados por Carpintería Los Artesanos.",
}

export default async function ProyectosPage() {
  const projects = await getProjects()

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Galería artesanal
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">Proyectos</h1>

      <p className="mt-4 max-w-2xl text-muted-foreground">
        Una selección de trabajos realizados en madera, combinando diseño,
        técnica artesanal y acabados duraderos.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/proyectos/${project.slug}`}
            className="group block"
          >
            <div className="relative h-72 overflow-hidden rounded-3xl border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h2 className="mt-4 text-2xl font-semibold">{project.title}</h2>

            <p className="mt-2 text-muted-foreground">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}