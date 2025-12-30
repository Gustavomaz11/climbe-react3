import styles from "./breadcrumbComponent.module.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useLocation, Link } from "react-router-dom";
import Nav from "../nav/Nav";

const BreadcrumbComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean).filter(path => path !== "servicos");
  const lastPath = pathnames[pathnames.length - 1];

  const handlePath = (path) => {
    const paths = {
      valuation: "Avaliação de Empresas (Valuation)",
      bpo: "Terceirização de Rotinas Financeiras (BPO)",
      cfo: "Diretoria Financeira Sob Demanda (CFO)",
      mea: "Fusões e Aquisições (M&A)",
      contabilidade: "Contabilidade",
      ri: "Relação com Investidores",
      nossoValuation: "Nosso Valuation",
      acordoSocios: "Acordo de Sócios",
      contratoSocial: "Contrato Social",
      educacaoContinua: "Educação Contínua",
      nps: "NPS",
      balancoPatrimonial: "Balanço Patrimonial",
      resultados: "Resultados",
      planejamentoEstrategico: "Planejamento Estratégico",
      compliance: "Compliance",
      atasReunioes: "Atas de Reuniões",
      relatorios: "Relatórios",
      artigos: "Artigos",
      nacionais: "Relatórios Nacionais",
      internacionais: "Relatórios Internacionais",
      cripto: "Relatórios Cripto"
    };
    return paths[path] || path;
  };

  const absolutePath = handlePath(lastPath);

  return (
    <div className={styles.breadcrumb}>
      <Nav />

      <div className={styles.breadcrumb_content}>
        <h2 className={styles.breadcrumb_title}>{absolutePath}</h2>

        <Breadcrumb className={styles.breadcrumb_line}>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            <span className={styles.breadcrumb_item}>Início</span>
          </Breadcrumb.Item>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              <Breadcrumb.Item active key={routeTo}>
                <span className={styles.breadcrumb_item_active}>
                  {handlePath(decodeURIComponent(name))}
                </span>
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item
                key={routeTo}
                linkAs={Link}
                linkProps={{ to: routeTo }}
              >
                <span className={styles.breadcrumb_item}>
                  {handlePath(decodeURIComponent(name))}
                </span>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;