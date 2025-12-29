import styles from "./menu.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Menu = () => {
  const navigate = useNavigate()
    const [menu] = useState([
        {id: 1, menu: "Avaliação de Empresas (Valuation)", path: "/servicos/valuation"},
        {id: 2, menu: "Terceirização de Rotinas Financeiras (BPO)", path: "/servicos/bpo"},
        {id: 2, menu: "Diretoria Financeira Sob Demanda (CFO)", path: "/servicos/cfo"},
        {id: 2, menu: "Fusões e Aquisições (M&A)", path: "/servicos/mea"},
        {id: 2, menu: "Contabilidade", path: "/servicos/contabilidade"},
    ])
  return (
    <nav className={styles.menu}>
        {menu && menu.map((item) => (
            <span key={item.id} onClick={() => navigate(item.path)}>{item.menu}</span>
        ))}
    </nav>
  )
}

export default Menu