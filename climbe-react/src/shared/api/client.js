import { API_BASE_URL } from "../config/env"

export class HttpError extends Error {
  constructor(message, status, body) {
    super(message)
    this.name = "HttpError"
    this.status = status
    this.body = body
  }
}

const DEFAULT_TIMEOUT_MS = 10000

const parseJsonSafe = async (response) => {
  try {
    return await response.json()
  } catch {
    return null
  }
}

export async function request({
  url,
  method = "GET",
  body,
  headers,
  timeout = DEFAULT_TIMEOUT_MS,
  signal,
  schema,
  baseUrl = API_BASE_URL,
} = {}) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)
  const mergedSignal = controller.signal

  if (signal) {
    signal.addEventListener("abort", () => controller.abort(), { once: true })
  }

  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: mergedSignal,
    })

    const data = await parseJsonSafe(response)

    if (!response.ok) {
      const message = data?.message || `Erro: ${response.status}`
      throw new HttpError(message, response.status, data)
    }

    const parsed = schema ? schema.parse(data) : data
    return parsed
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Requisição expirada ou cancelada")
    }
    throw error
  } finally {
    clearTimeout(timeoutId)
  }
}

export const postJson = (url, body, options = {}) =>
  request({ url, method: "POST", body, ...options })
