import styles from "./breadcrumbComponent.module.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useLocation, Link } from "react-router-dom";
import { upperCase } from "../../util/upperCase";
import Nav from "../nav/Nav";

const BreadcrumbComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const lastPath = pathnames[pathnames.length - 1];

  const handlePath = (path) => {
    if (path == "valuation") {
      return "Avaliação de Empresas (Valuation)";
    } else if (path == "bpo") {
      return "Terceirização de Rotinas Financeiras (BPO)";
    } else if (path == "cfo") {
      return "Diretoria Financeira Sob Demanda (CFO)";
    } else if (path == "mea") {
      return "Fusões e Aquisições (M&A)";
    } else if (path == "contabilidade") {
      return path;
    }
  };

  const absolutePath = handlePath(lastPath);
  console.log(absolutePath);

  return (
    <div className={styles.breadcrumb}>
    <Nav />

    <div className={styles.breadcrumb_content}>
      <h2>{absolutePath}</h2>

      <Breadcrumb className={styles.breadcrumb_line}>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Breadcrumb.Item active key={routeTo}>
              {decodeURIComponent(name)}
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item
              key={routeTo}
              linkAs={Link}
              linkProps={{ to: routeTo }}
            >
              {decodeURIComponent(name)}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  </div>
  );
};

export default BreadcrumbComponent;
