import styles from "./services.module.css"
import FormService from "../../components/form/FormService"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons"

const Bpo = () => {

  const [check] = useState([
    {id: 1, title: "Gestão Financeira Estruturada", text: "Organização e padronização das rotinas financeiras, garantindo maior controle do fluxo de caixa, contas a pagar e a receber, e acompanhamento contínuo dos resultados."},
    {id: 2, title: "Redução de Custos Operacionais", text: "Eliminação de retrabalho, redução de erros e otimização de recursos, substituindo estruturas internas complexas por uma operação financeira eficiente e escalável."},
    {id: 3, title: "Informações Confiáveis para Decisão", text: "Relatórios financeiros claros e atualizados, que fornecem visão real da saúde financeira da empresa e suportam decisões estratégicas com base em dados."},
    {id: 4, title: "Equipe Especializada e Continuidade", text: "Atendimento realizado por profissionais qualificados, assegurando continuidade das rotinas financeiras, mesmo em períodos de crescimento, férias ou transições internas."},
  ])

  const [activeTab, setActiveTab] = useState("abordagem")

  const tabs = [
    {
      id: "abordagem",
      label: "Nossa Abordagem",
      active: true,
      content: "Mapeamento dos processos financeiros, definição de rotinas, integração de sistemas e implementação de controles adequados à operação do cliente."
    },
    {
      id: "objetivos",
      label: "Objetivos do Projeto",
      content: "Garantir organização financeira, melhoria de processos, confiabilidade das informações e suporte à tomada de decisão."
    },
    {
      id: "advisory",
      label: "Assessoria (Advisory)",
      content: "Atuação consultiva contínua, apoiando gestores com análises financeiras, indicadores e recomendações estratégicas."
    }
  ]
  
  return (
    <div className={styles.services}>
      <section className={styles.container}>
        
        <div className={styles.header_content}>
          <div className={styles.text_content}>
            <span className={styles.badge}>Terceirização de Rotinas Financeiras (BPO)</span>
            <h1 className={styles.title}>BPO Financeiro para Mais Controle, Eficiência e Crescimento</h1>
            <p className={styles.description}>
              Oferecemos serviços de BPO Financeiro (Business Outsourcing Process) para empresas que buscam organização, previsibilidade e eficiência na gestão das rotinas financeiras, permitindo que gestores foquem no crescimento do negócio.
            </p>
            <p className={styles.description}>
              Atuamos de forma estruturada, integrada e personalizada, assumindo processos financeiros essenciais com segurança, confidencialidade e alto nível técnico.
            </p>
          </div>
          
          <div className={styles.image_container}>
            <div className={styles.image_wrapper}>
              <img src="/hero/bpo1.jpg" alt="bpo" className={styles.hero_image} />
              <div className={styles.image_overlay}></div>
            </div>
          </div>
        </div>

        <div className={styles.benefits_section}>
          <div className={styles.benefits_grid}>
            {check && check.map((item) => (
              <div key={item.id} className={styles.benefit_card}>
                <div className={styles.icon_wrapper}>
                  <FontAwesomeIcon 
                    icon={faCircleCheck} 
                    className={styles.check_icon}
                  />
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
                <img src="/hero/bpo2.jpg" alt="great-meet" className={styles.hero_image_how}/>
                <div className={styles.image_overlay}></div>
              </div>
            </div>

            <div className={styles.text_content}>
              <span className={styles.badge}>Como Estruturamos o BPO Financeiro</span>
              <h1 className={styles.title}>Nossa Terceirização Financeira Permite que Você Foque no Core do Negócio</h1>
              <p className={styles.description}>
                Nossa abordagem em BPO Financeiro é desenhada para trazer clareza, controle e previsibilidade à gestão financeira, por meio de processos bem definidos e acompanhamento contínuo.
              </p>
              <p className={styles.description}>
                Atuamos como parceiros estratégicos, integrando a operação financeira à realidade e aos objetivos da empresa.
              </p>

              {/* Tabs Section */}
              <div className={styles.tabs_container}>
                <div className={styles.tabs_header}>
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`${styles.tab_button} ${activeTab === tab.id ? styles.active : ''}`}
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
                      className={`${styles.tab_panel} ${activeTab === tab.id ? styles.active : ''}`}
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
  )
}

export default Bpo