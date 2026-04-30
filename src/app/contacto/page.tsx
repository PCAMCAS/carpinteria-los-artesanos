import { ContactForm } from "@/components/contact/ContactForm"

export const metadata = {
  title: "Contacto",
  description:
    "Solicita presupuesto a Carpintería Los Artesanos para muebles a medida, restauraciones y proyectos de carpintería artesanal.",
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Contacto
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Cuéntanos tu próximo proyecto en madera
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Escríbenos si necesitas un mueble a medida, una restauración o una
            solución de carpintería para tu hogar o negocio.
          </p>

          <div className="mt-8 rounded-3xl border bg-muted/30 p-6">
            <h2 className="text-lg font-semibold">Qué puedes solicitar</h2>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>• Presupuesto para muebles personalizados</li>
              <li>• Restauración de piezas antiguas</li>
              <li>• Carpintería estructural o decorativa</li>
              <li>• Asesoramiento sobre materiales y acabados</li>
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}