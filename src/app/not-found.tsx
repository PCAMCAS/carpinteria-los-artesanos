import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Error 404
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        Página no encontrada
      </h1>

      <p className="mt-4 text-muted-foreground">
        La página que buscas no existe o ha sido movida.
      </p>

      <Button asChild className="mt-8">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </section>
  )
}
