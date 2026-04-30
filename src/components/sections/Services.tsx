import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    title: "Muebles a medida",
    description:
      "Diseño y fabricación de piezas únicas adaptadas a cada espacio, estilo y necesidad del cliente.",
  },
  {
    title: "Restauración",
    description:
      "Recuperación de muebles y elementos de madera, respetando su historia y mejorando su durabilidad.",
  },
  {
    title: "Carpintería estructural",
    description:
      "Soluciones resistentes y funcionales para proyectos arquitectónicos y espacios profesionales.",
  },
]

export function Services() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Qué hacemos
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Servicios de carpintería artesanal
          </h2>

          <p className="mt-4 text-muted-foreground">
            Trabajamos cada proyecto de forma personalizada, cuidando el diseño,
            la selección de materiales y los acabados para garantizar resultados
            duraderos y de alta calidad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="transition duration-300 hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="text-lg">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}