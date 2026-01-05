import { useNavigate } from "react-router-dom";
import styles from "./services.module.css";
import { serviceRoutes } from "../../shared/config/services";

const ServicesIndex = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.services}>
      <section className={styles.container}>
        <div className={styles.header_content}>
          <div className={styles.text_content}>
            <span className={styles.badge}>Portfólio de Serviços</span>
            <h1 className={styles.title}>
              Soluções financeiras integradas para cada estágio do seu negócio
            </h1>
            <p className={styles.description}>
              Conectamos governança, eficiência operacional e estratégia para
              apoiar decisões de investimento, captação, M&A e gestão do dia a
              dia. Escolha o serviço e avance para os detalhes.
            </p>
          </div>

          <div className={styles.image_container}>
            <div className={styles.image_wrapper}>
              <img
                src="/hero/bpo1.jpg"
                alt="Equipe Climbe planejando soluções financeiras"
                className={styles.hero_image}
              />
              <div className={styles.image_overlay}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.card_section}>
        <div className={styles.container}>
          <div className={styles.card_header}>
            <span className={styles.badge}>Escolha seu caminho</span>
            <h2 className={styles.title} style={{ fontSize: "32px" }}>
              Explore nossos serviços
            </h2>
            <p className={styles.description}>
              Veja o que cada trilha entrega e navegue para conhecer a proposta
              completa.
            </p>
          </div>

          <div className={styles.card_grid}>
            {serviceRoutes.map((service, index) => (
              <div key={service.id} className={styles.card_item}>
                <div className={styles.card_number}>{String(index + 1).padStart(2, "0")}</div>
                <h3 className={styles.card_title}>{service.name}</h3>
                <p className={styles.card_text}>{service.summary}</p>
                <button
                  className={styles.tab_button}
                  type="button"
                  onClick={() => navigate(service.path)}
                >
                  Ver detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesIndex;
