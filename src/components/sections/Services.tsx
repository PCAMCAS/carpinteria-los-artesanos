import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Muebles a medida",
    description: "Diseño personalizado adaptado a cada espacio y cliente.",
  },
  {
    title: "Restauración",
    description: "Recuperamos piezas antiguas respetando su esencia original.",
  },
  {
    title: "Carpintería estructural",
    description: "Soluciones robustas para proyectos arquitectónicos.",
  },
]

export function Services() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold">Servicios</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
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