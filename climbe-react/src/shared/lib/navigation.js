export const openExternalLink = (url) => {
  if (!url || typeof window === "undefined") return
  window.open(url, "_blank", "noopener,noreferrer")
}

export const openWhatsapp = (message) => {
  const encoded = encodeURIComponent(message || "Olá, gostaria de saber mais informações")
  openExternalLink(
    `https://api.whatsapp.com/send/?phone=5579991269378&text=${encoded}&type=phone_number&app_absent=0`
  )
}
