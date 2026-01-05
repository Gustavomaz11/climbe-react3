import { describe, expect, it } from "vitest"
import { navItems } from "./navigation"
import { serviceRoutes } from "./services"

describe("navigation config", () => {
  it("inclui rota de serviços com filhos", () => {
    const servicesMenu = navItems.find((item) => item.route === "/servicos")
    expect(servicesMenu).toBeDefined()
    expect(servicesMenu.children).toBeDefined()
    expect(servicesMenu.children.length).toBe(serviceRoutes.length)
  })

  it("todas as rotas de serviço têm caminho e nome", () => {
    serviceRoutes.forEach((service) => {
      expect(service.path.startsWith("/servicos")).toBe(true)
      expect(service.name.length).toBeGreaterThan(0)
    })
  })
})
