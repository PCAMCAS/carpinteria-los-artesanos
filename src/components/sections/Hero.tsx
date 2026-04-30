import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center lg:py-32">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Taller artesanal de madera
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Carpintería a medida para espacios con carácter
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Diseñamos, fabricamos y restauramos piezas únicas en madera,
            combinando oficio tradicional, materiales nobles y acabados
            duraderos.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contacto">Solicitar presupuesto</Link>
            </Button>

            <Button variant="outline" asChild size="lg">
              <Link href="/proyectos">Ver proyectos</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-3xl border shadow-sm md:h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=1600&auto=format&fit=crop"
            alt="Taller de carpintería con herramientas y madera preparada para trabajar"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}