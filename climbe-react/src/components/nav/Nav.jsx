import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const handleMouseEnter = (itemId) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(itemId);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleNavigate = (route) => {
    navigate(route);
    setIsMenuOpen(false);
  };

  const toggleMobileDropdown = (itemId) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId);
  };

  return (
    <nav className={styles.nav}>
      <img
        src="/logo/logo.png"
        alt="logo-climbe"
        className={styles.logo}
        onClick={() => handleNavigate("/")}
      />

      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`${styles.ul} ${isMenuOpen ? styles.mobileOpen : ""}`}>
        {menu.map((item) => (
          <li
            key={item.id}
            className={styles.li}
            onMouseEnter={() => item.children && handleMouseEnter(item.id)}
            onMouseLeave={() => item.children && handleMouseLeave()}
          >
            <span
              className={styles.span}
              onClick={() => {
                if (item.children) {
                  toggleMobileDropdown(item.id);
                } else {
                  handleNavigate(item.route);
                }
              }}
            >
              {item.nome}
              {item.children && <span className={styles.arrow}>▼</span>}
            </span>

            {item.children && (
              <ul
                className={`${styles.dropdown} ${
                  openDropdown === item.id ? styles.open : ""
                }`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {item.children.map((child) => (
                  <li
                    key={child.id}
                    className={styles.dropdownItem}
                    onClick={() => handleNavigate(child.route)}
                  >
                    {child.nome}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Nav;