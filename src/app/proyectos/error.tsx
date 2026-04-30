"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h2 className="text-2xl font-bold">Ha ocurrido un error</h2>

      <p className="mt-4 text-muted-foreground">
        Algo ha fallado al cargar los proyectos.
      </p>

      <Button onClick={() => reset()} className="mt-6">
        Reintentar
      </Button>
    </div>
  )
}