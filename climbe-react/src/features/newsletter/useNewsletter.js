import { useCallback, useState } from "react"
import { submitNewsletter } from "./api"

export const useNewsletter = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const send = useCallback(async (email) => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await submitNewsletter(email)
      return res
    } catch (err) {
      setError(err?.message || "Erro inesperado")
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { send, isLoading, error }
}
