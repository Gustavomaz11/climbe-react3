import { z } from "zod"
import { postJson } from "../../shared/api/client"

export const newsletterRequestSchema = z.object({
  email: z.string().email("Informe um e-mail válido"),
})

export const newsletterResponseSchema = z.object({
  success: z.boolean(),
})

export const submitNewsletter = async (email) => {
  const parsed = newsletterRequestSchema.parse({ email })
  return postJson("/api/newsletter", parsed, {
    schema: newsletterResponseSchema,
    timeout: 12000,
  })
}
