"use client"

import { useActionState } from "react"
import { sendContactMessage, type ContactState } from "@/app/contacto/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const initialState: ContactState = {
  success: false,
  message: "",
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  )

  return (
    <form action={formAction} className="mt-10 space-y-6 rounded-3xl border p-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" placeholder="Tu nombre" />
        {state.errors?.name && (
          <p className="text-sm text-red-600">{state.errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="tu@email.com" />
        {state.errors?.email && (
          <p className="text-sm text-red-600">{state.errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Cuéntanos qué necesitas..."
          rows={6}
        />
        {state.errors?.message && (
          <p className="text-sm text-red-600">{state.errors.message}</p>
        )}
      </div>

      {state.message && (
        <p
          className={
            state.success ? "text-sm text-green-700" : "text-sm text-red-600"
          }
        >
          {state.message}
        </p>
      )}

      <Button type="submit" disabled={isPending}>
        {isPending ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  )
}