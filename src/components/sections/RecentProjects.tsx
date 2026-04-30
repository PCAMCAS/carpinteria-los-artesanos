import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { getProjects } from "@/lib/projects"

async function RecentProjectsList() {
  const projects = await getProjects()
  const recentProjects = projects.slice(0, 2)

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {recentProjects.map((project) => (
        <Link
          key={project.slug}
          href={`/proyectos/${project.slug}`}
          className="group block"
        >
          <div className="relative h-64 overflow-hidden rounded-3xl border">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>

          <p className="mt-2 text-muted-foreground">{project.description}</p>
        </Link>
      ))}
    </div>
  )
}

function RecentProjectsSkeleton() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {[1, 2].map((item) => (
        <div key={item}>
          <div className="h-64 animate-pulse rounded-3xl bg-muted" />
          <div className="mt-4 h-6 w-2/3 animate-pulse rounded bg-muted" />
          <div className="mt-3 h-4 w-full animate-pulse rounded bg-muted" />
        </div>
      ))}
    </div>
  )
}

export function RecentProjects() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Trabajos seleccionados
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Proyectos recientes
            </h2>
          </div>

          <Link
            href="/proyectos"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Ver todos los proyectos
          </Link>
        </div>

        <Suspense fallback={<RecentProjectsSkeleton />}>
          <RecentProjectsList />
        </Suspense>
      </div>
    </section>
  )
}