import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./nav.module.css";
import { navItems } from "../../shared/config/navigation";

const Nav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  // Ao fechar o menu mobile, garante dropdown recolhido
  useEffect(() => {
    if (!isMenuOpen) {
      setOpenDropdown(null);
    }
  }, [isMenuOpen]);

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
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`${styles.ul} ${isMenuOpen ? styles.mobileOpen : ""}`}>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={styles.li}
            onMouseEnter={() => !isMenuOpen && item.children && handleMouseEnter(item.id)}
            onMouseLeave={() => !isMenuOpen && item.children && handleMouseLeave()}
          >
            <button
              type="button"
              className={styles.span}
              onClick={() => {
                if (item.children) {
                  if (isMenuOpen) {
                    toggleMobileDropdown(item.id);
                    return;
                  }
                  setOpenDropdown(item.id);
                  return;
                } else {
                  handleNavigate(item.route);
                }
              }}
              aria-haspopup={!!item.children}
              aria-expanded={openDropdown === item.id}
            >
              {item.label}
              {item.children && <span className={styles.arrow}>▼</span>}
            </button>

            {item.children && (
              <ul
                className={`${styles.dropdown} ${
                  openDropdown === item.id ? styles.open : ""
                }`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {item.children.map((child) => (
                  <li key={child.id} className={styles.dropdownItem}>
                    <button
                      type="button"
                      className={styles.dropdownButton}
                      onClick={() => handleNavigate(child.path || child.route)}
                    >
                      {child.name || child.label}
                    </button>
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
