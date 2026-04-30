import { ContactForm } from "@/components/contact/ContactForm"

export const metadata = {
  title: "Contacto",
  description:
    "Contacta con Carpintería Los Artesanos para solicitar presupuesto o información sobre proyectos a medida.",
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Contacto
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        Solicita tu presupuesto
      </h1>

      <p className="mt-4 text-muted-foreground">
        Cuéntanos qué pieza, reforma o restauración tienes en mente y te
        responderemos con una propuesta personalizada.
      </p>

      <ContactForm />
    </section>
  )
}