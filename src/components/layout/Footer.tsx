import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold">Carpintería Los Artesanos</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Diseño, fabricación y restauración de piezas únicas en madera.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">
            Navegación
          </h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/about">Sobre nosotros</Link>
            <Link href="/proyectos">Proyectos</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">
            Contacto
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Taller artesanal especializado en muebles a medida, restauración y
            carpintería estructural.
          </p>
        </div>
      </div>

      <div className="border-t px-6 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Carpintería Los Artesanos. Todos los
        derechos reservados.
      </div>
    </footer>
  )
}