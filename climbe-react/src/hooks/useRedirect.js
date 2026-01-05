import { openExternalLink, openWhatsapp } from "../shared/lib/navigation"

// Mantido por compatibilidade, mas preferir openWhatsapp/openExternalLink direto.
export function useRedirect() {
  openWhatsapp()
}

export function openLink(url) {
  openExternalLink(url)
}

export { openExternalLink, openWhatsapp }
