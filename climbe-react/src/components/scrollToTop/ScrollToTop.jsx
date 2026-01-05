import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    // Evita restauração automática do browser em navegações
    const { scrollRestoration } = window.history
    window.history.scrollRestoration = "manual"

    const id = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    })

    return () => {
      cancelAnimationFrame(id)
      window.history.scrollRestoration = scrollRestoration
    }
  }, [location.key, location.pathname, location.search])

  return null
}

export default ScrollToTop
