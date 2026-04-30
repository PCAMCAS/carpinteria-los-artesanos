import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Taller artesanal
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Carpintería a medida con alma artesanal
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Diseñamos, fabricamos y restauramos piezas únicas en madera para
          hogares, negocios y espacios con carácter.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/contacto">Solicitar presupuesto</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/proyectos">Ver proyectos</Link>
          </Button>
        </div>
      </div>

      <div className="relative h-[420px] overflow-hidden rounded-3xl border">
        <Image
          src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=1600&auto=format&fit=crop"
          alt="Taller de carpintería con herramientas y madera"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  )
}