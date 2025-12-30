import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {

  const navigate = useNavigate()
  const [menu] = useState([
    { id: 1, nome: "Relatórios", route: "/relatorios" },
    { id: 2, nome: "Artigos", route: "/artigos" },
    {
      id: 3,
      nome: "Serviços",
      route: "/servicos",
      children: [
        {
          id: 1,
          nome: "Avaliação de Empresas (Valuation)",
          route: "/servicos/valuation",
        },
        {
          id: 2,
          nome: "Diretoria Financeira Sob Demanda (CFO)",
          route: "/servicos/cfo",
        },
        { id: 3, nome: "Fusões & Aquisições (M&A)", route: "/servicos/mea" },
        {
          id: 4,
          nome: "Terceirização de Rotinas Financeiras (BPO)",
          route: "/servicos/bpo",
        },
        { id: 5, nome: "Contabilidade", route: "/servicos/contabilidade" },
      ],
    },
    { id: 4, nome: "Relação com Investidores", route: "/ri" },
  ]);

  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className={styles.nav}>
      <img src="/logo/logo.png" alt="logo-climbe" className={styles.logo} onClick={() => navigate('/')}/>

      <ul className={styles.ul}>
        {menu.map((item) => (
          <li
            key={item.id}
            className={styles.li}
            onMouseEnter={() => item.children && setOpenDropdown(item.id)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span
              className={styles.span}
              onClick={() => !item.children && navigate(item.route)}
            >
              {item.nome}
              {item.children && <span className={styles.arrow}>▼</span>}
            </span>

            {item.children && (
              <ul
                className={`${styles.dropdown} ${
                  openDropdown === item.id ? styles.open : ""
                }`}
              >
                {item.children.map((child) => (
                  <li
                    key={child.id}
                    className={styles.dropdownItem}
                    onClick={() => navigate(child.route)}
                  >
                    {child.nome}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
