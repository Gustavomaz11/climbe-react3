export const isPdfFile = (file) => {
  if (!file) return false
  const mime = file.mimeType || file.mime_type
  const name = file.name || ""
  return (
    (mime && mime.toLowerCase().includes("pdf")) ||
    name.toLowerCase().endsWith(".pdf")
  )
}

export const filterPdfs = (files = []) => files.filter(isPdfFile)
