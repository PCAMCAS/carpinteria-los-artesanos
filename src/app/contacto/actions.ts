"use server"

export type ContactState = {
  success: boolean
  message: string
  errors?: {
    name?: string
    email?: string
    message?: string
  }
}

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const message = String(formData.get("message") || "").trim()

  const errors: ContactState["errors"] = {}

  if (name.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres."
  }

  if (!email.includes("@") || email.length < 5) {
    errors.email = "Introduce un email válido."
  }

  if (message.length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres."
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Revisa los campos del formulario.",
      errors,
    }
  }

  return {
    success: true,
    message: "Mensaje enviado correctamente. Te responderemos lo antes posible.",
  }
}