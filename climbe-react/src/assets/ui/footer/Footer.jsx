import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./footer.module.css";

import { showClimbeAlert } from "../../../services/climbeAlert.service";
import Button from "../../../components/button/Button";
import { openExternalLink } from "../../../shared/lib/navigation";
import { serviceRoutes, documentRoutes } from "../../../shared/config/services";
import { useNewsletter } from "../../../features/newsletter/useNewsletter";

const Footer = () => {
  const { send, isLoading } = useNewsletter();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [hoverApimec, setHoverApimec] = useState(false);
  const [hoverCvm, setHoverCvm] = useState(false);
  const [hoverAnbima, setHoverAnbima] = useState(false);
  const [hoverCrcse, setHoverCrcse] = useState(false);
  const [hoverCrcsp, setHoverCrcsp] = useState(false);

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      showClimbeAlert({
        title: "E-mail inválido",
        message: "Informe um e-mail válido para continuar.",
      });
      return;
    }

    try {
      const res = await send(email);

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
        message: error?.message || "Não foi possível cadastrar seu e-mail. Tente novamente.",
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
          {serviceRoutes.map((item) => (
            <button
              key={item.id}
              className={styles.linkButton}
              type="button"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </button>
          ))}
        </section>

        <section className={styles.documents_content}>
          <h4>Conteúdo</h4>
          {documentRoutes.map((item) => (
            <button
              key={item.id}
              className={styles.linkButton}
              type="button"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </button>
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
          Nossas empresas seguem a legislação das seguintes entidades reguladoras
          e autorreguladoras do mercado:
        </h2>
        <div className={styles.credoras_content}>
          <img
            onClick={() =>
              openExternalLink(
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
              openExternalLink(
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
            onClick={() => openExternalLink("https://sistemas.cvm.gov.br/")}
            src={
              hoverCvm ? "/credoras/cvm.png" : "/credoras/pretoCinza/cvm.png"
            }
            alt="cvm"
            onMouseEnter={() => setHoverCvm(true)}
            onMouseLeave={() => setHoverCvm(false)}
          />
          <img
            onClick={() => openExternalLink("https://crcse.org.br/")}
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
              openExternalLink("https://online.crcsp.org.br/portal/index.asp")
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
              openExternalLink(
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
