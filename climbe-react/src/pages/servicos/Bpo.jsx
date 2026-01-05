import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./services.module.css";
import FormService from "../../components/form/FormService";

const benefits = [
  {
    id: 1,
    title: "Gestão financeira estruturada",
    text: "Organização e padronização das rotinas financeiras, garantindo controle do fluxo de caixa, contas a pagar e a receber, com acompanhamento contínuo dos resultados.",
  },
  {
    id: 2,
    title: "Redução de custos operacionais",
    text: "Eliminação de retrabalho, redução de erros e otimização de recursos ao substituir estruturas internas complexas por uma operação eficiente e escalável.",
  },
  {
    id: 3,
    title: "Informações confiáveis para decisão",
    text: "Relatórios claros e atualizados para dar visão real da saúde financeira e embasar decisões estratégicas com dados.",
  },
  {
    id: 4,
    title: "Equipe especializada e continuidade",
    text: "Atendimento por profissionais qualificados, assegurando continuidade das rotinas mesmo em crescimento, férias ou transições internas.",
  },
];

const tabs = [
  {
    id: "abordagem",
    label: "Nossa abordagem",
    content:
      "Mapeamento de processos financeiros, definição de rotinas, integração de sistemas e implementação de controles adequados à operação do cliente.",
  },
  {
    id: "objetivos",
    label: "Objetivos do projeto",
    content:
      "Garantir organização financeira, melhoria de processos, confiabilidade das informações e suporte à tomada de decisão.",
  },
  {
    id: "advisory",
    label: "Assessoria (Advisory)",
    content:
      "Atuação consultiva contínua, apoiando gestores com análises financeiras, indicadores e recomendações estratégicas.",
  },
];

const Bpo = () => {
  const [activeTab, setActiveTab] = useState("abordagem");

  return (
    <div className={styles.services}>
      <section className={styles.container}>
        <div className={styles.header_content}>
          <div className={styles.text_content}>
            <span className={styles.badge}>Terceirização de Rotinas Financeiras (BPO)</span>
            <h1 className={styles.title}>BPO financeiro para mais controle, eficiência e crescimento</h1>
            <p className={styles.description}>
              Oferecemos BPO Financeiro (Business Outsourcing Process) para empresas que buscam organização,
              previsibilidade e eficiência na gestão das rotinas financeiras, permitindo que gestores foquem no crescimento
              do negócio.
            </p>
            <p className={styles.description}>
              Atuamos de forma estruturada, integrada e personalizada, assumindo processos financeiros essenciais com
              segurança, confidencialidade e alto nível técnico.
            </p>
          </div>

          <div className={styles.image_container}>
            <div className={styles.image_wrapper}>
              <img src="/hero/bpo1.jpg" alt="Equipe em reunião sobre BPO" className={styles.hero_image} />
              <div className={styles.image_overlay}></div>
            </div>
          </div>
        </div>

        <div className={styles.benefits_section}>
          <div className={styles.benefits_grid}>
            {benefits.map((item) => (
              <div key={item.id} className={styles.benefit_card}>
                <div className={styles.icon_wrapper}>
                  <FontAwesomeIcon icon={faCircleCheck} className={styles.check_icon} />
                </div>
                <div className={styles.benefit_content}>
                  <h3 className={styles.benefit_title}>{item.title}</h3>
                  <p className={styles.benefit_text}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.how_section}>
        <div className={styles.container}>
          <div className={styles.header_content_reverse}>
            <div className={styles.image_container_how}>
              <div className={styles.image_wrapper_how}>
                <img src="/hero/bpo2.jpg" alt="Estruturação financeira" className={styles.hero_image_how} />
                <div className={styles.image_overlay}></div>
              </div>
            </div>

            <div className={styles.text_content}>
              <span className={styles.badge}>Como estruturamos o BPO</span>
              <h1 className={styles.title}>Terceirização financeira para você focar no core do negócio</h1>
              <p className={styles.description}>
                Nossa abordagem em BPO é desenhada para trazer clareza, controle e previsibilidade à gestão financeira,
                com processos bem definidos e acompanhamento contínuo.
              </p>
              <p className={styles.description}>
                Atuamos como parceiros estratégicos, integrando a operação financeira à realidade e aos objetivos da empresa.
              </p>

              <div className={styles.tabs_container}>
                <div className={styles.tabs_header}>
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`${styles.tab_button} ${activeTab === tab.id ? styles.active : ""}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className={styles.tabs_content}>
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`${styles.tab_panel} ${activeTab === tab.id ? styles.active : ""}`}
                    >
                      <p>{tab.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormService />
    </div>
  );
};

export default Bpo;
