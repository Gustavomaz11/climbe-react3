import { serviceRoutes } from "./services"

export const navItems = [
  { id: 1, label: "Relatórios", route: "/relatorios" },
  { id: 2, label: "Artigos", route: "/artigos" },
  {
    id: 3,
    label: "Serviços",
    route: "/servicos",
    children: serviceRoutes,
  },
  { id: 4, label: "Relação com Investidores", route: "/ri" },
]
