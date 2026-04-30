import Image from "next/image"

export const metadata = {
  title: "Sobre nosotros",
  description:
    "Historia del taller, proceso artesanal y valores de Carpintería Los Artesanos.",
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Sobre nosotros
      </p>

      <div className="mt-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Un taller donde la madera se trabaja con tiempo, precisión y oficio
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Carpintería Los Artesanos nace de una forma sencilla de entender el
            trabajo: escuchar al cliente, respetar la materia prima y construir
            piezas pensadas para durar.
          </p>

          <p className="mt-4 leading-7 text-muted-foreground">
            Combinamos técnicas tradicionales con herramientas actuales para
            crear muebles, restauraciones y soluciones de carpintería adaptadas
            a cada espacio.
          </p>
        </div>

        <div className="relative h-[460px] overflow-hidden rounded-3xl border">
          <Image
            src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1600&auto=format&fit=crop"
            alt="Interior de taller artesanal de carpintería"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        <article className="rounded-3xl border p-6">
          <h2 className="text-xl font-semibold">Diseño personalizado</h2>
          <p className="mt-3 text-muted-foreground">
            Cada proyecto empieza con una conversación para entender medidas,
            estilo, uso y necesidades reales del espacio.
          </p>
        </article>

        <article className="rounded-3xl border p-6">
          <h2 className="text-xl font-semibold">Selección de materiales</h2>
          <p className="mt-3 text-muted-foreground">
            Elegimos maderas y acabados adecuados para conseguir resistencia,
            calidez visual y coherencia con el entorno.
          </p>
        </article>

        <article className="rounded-3xl border p-6">
          <h2 className="text-xl font-semibold">Acabado artesanal</h2>
          <p className="mt-3 text-muted-foreground">
            Cuidamos uniones, superficies, barnices y detalles para que cada
            pieza tenga carácter propio.
          </p>
        </article>
      </div>
    </section>
  )
}