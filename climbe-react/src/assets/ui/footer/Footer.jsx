import styles from "./footer.module.css";
import { useFetch } from "../../../hooks/useFetch";
import { openLink } from "../../../hooks/useRedirect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showClimbeAlert } from "../../../services/climbeAlert.service";

import Button from "../../../components/button/Button";

const Footer = () => {
  const { request, isLoading } = useFetch(import.meta.env.VITE_PREFIX_API);  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [hoverApimec, setHoverApimec] = useState(false);
  const [hoverCvm, setHoverCvm] = useState(false);
  const [hoverAnbima, setHoverAnbima] = useState(false);
  const [hoverCrcse, setHoverCrcse] = useState(false);
  const [hoverCrcsp, setHoverCrcsp] = useState(false);

  const [services] = useState([
    {
      id: 1,
      service: "Avaliação de Empresas (Valuation)",
      path: "/servicos/valuation",
    },
    { id: 2, service: "Fusões e Aquisições (M&A)", path: "/servicos/mea" },
    {
      id: 3,
      service: "Diretoria Financeira Sob Demanda (CFO)",
      path: "/servicos/cfo",
    },
    { id: 4, service: "Avaliação de Empresas (BPO)", path: "/servicos/bpo" },
    { id: 5, service: "Contabilidade", path: "/servicos/contabilidade" },
  ]);

  const [document] = useState([
    { id: 1, document: "Relatórios", path: "/relatorios" },
    { id: 2, document: "Artigos", path: "/artigos" },
  ]);

  const handleSubmit = async () => {
    if (!email) {
      showClimbeAlert({
        title: "E-mail inválido",
        message: "Informe um e-mail válido para continuar.",
      });
      return;
    }

    try {
      const res = await request("/api/newsletter", {
        method: "POST",
        body: { email },
      });

      if (res?.success) {
        showClimbeAlert({
          title: "Cadastro realizado!",
          message: "Você receberá nossas novidades em breve.",
          avatar: "/favicon/avatar.png",
        });

        setEmail("");
      }
    } catch (error) {
      if (error?.message === "EMAIL_ALREADY_EXISTS") {
        showClimbeAlert({
          title: "E-mail já cadastrado",
          message: "Este e-mail já está inscrito em nossa newsletter.",
        });
        return;
      }

      showClimbeAlert({
        title: "Erro",
        message: "Não foi possível cadastrar seu e-mail. Tente novamente.",
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <section className={styles.footer_header}>
          <img src="/logo/logo.png" alt="logo" />
          <p>
            Estamos aqui para transformar sua relação com o mercado financeiro.
            Combinamos conhecimento, ética e inovação para ajudar você a
            alcançar seus objetivos financeiros. Entre em contato conosco e
            descubra como podemos fazer a diferença no seu futuro.
          </p>
        </section>

        <section className={styles.services_content}>
          <h4>Serviços</h4>
          {services &&
            services.map((item) => (
              <span key={item.id} onClick={() => navigate(item.path)}>
                {item.service}
              </span>
            ))}
        </section>

        <section className={styles.documents_content}>
          <h4>Conteúdo</h4>
          {document &&
            document.map((item) => (
              <span key={item.id} onClick={() => navigate(item.path)}>
                {item.document}
              </span>
            ))}
        </section>

        <section className={styles.news}>
          <h4>Novidades</h4>
          <p>Insira seu e-mail para receber novidades</p>
          <div className={styles.form_section}>
            <input
              type="email"
              value={email}
              placeholder="Insira o seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              customClass="primary"
              txt={isLoading ? "Enviando..." : "Cadastrar"}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>

      <div className={styles.credoras}>
        <h2>
          Nossa empresa segue a legislação das seguintes entidades reguladoras e
          autorreguladoras do mercado:
        </h2>
        <div className={styles.credoras_content}>
          <img
            onClick={() =>
              openLink(
                "https://www.apimecbrasil.com.br/autorregulacao/analistas-de-valores-mobiliarios-pessoa-juridica/"
              )
            }
            src={
              hoverApimec
                ? "/credoras/apimec.png"
                : "/credoras/pretoCinza/apimec.png"
            }
            alt="apimec"
            onMouseEnter={() => setHoverApimec(true)}
            onMouseLeave={() => setHoverApimec(false)}
          />
          <img
            onClick={() =>
              openLink(
                "https://www.anbima.com.br/pt_br/institucional/perfil-da-instituicao/instituicao/350da4e3-cda2-406b-b478-939ba6929b0a/perfil/viggo-asset-management-ltda.htm"
              )
            }
            src={
              hoverAnbima
                ? "/credoras/anbima.png"
                : "/credoras/pretoCinza/anbima.png"
            }
            alt="anbima"
            onMouseEnter={() => setHoverAnbima(true)}
            onMouseLeave={() => setHoverAnbima(false)}
          />
          <img
            onClick={() => openLink("https://sistemas.cvm.gov.br/")}
            src={
              hoverCvm ? "/credoras/cvm.png" : "/credoras/pretoCinza/cvm.png"
            }
            alt="cvm"
            onMouseEnter={() => setHoverCvm(true)}
            onMouseLeave={() => setHoverCvm(false)}
          />
          <img
            onClick={() => openLink("https://crcse.org.br/")}
            src={
              hoverCrcse
                ? "/credoras/crcse.png"
                : "/credoras/pretoCinza/crcse.png"
            }
            alt="crcse"
            onMouseEnter={() => setHoverCrcse(true)}
            onMouseLeave={() => setHoverCrcse(false)}
          />
          <img
            onClick={() =>
              openLink("https://online.crcsp.org.br/portal/index.asp")
            }
            src={
              hoverCrcsp
                ? "/credoras/crcsp.png"
                : "/credoras/pretoCinza/crcsp.png"
            }
            alt="crcsp"
            onMouseEnter={() => setHoverCrcsp(true)}
            onMouseLeave={() => setHoverCrcsp(false)}
          />
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>
          © 2025 Climbe Investimentos Independentes. Todos os direitos
          reservados. Criado por:{" "}
          <span
            onClick={() =>
              openLink(
                "https://www.linkedin.com/in/gustavo-trindade-9183072ab/"
              )
            }
            className={styles.author}
          >
            Gustavo Trindade
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
