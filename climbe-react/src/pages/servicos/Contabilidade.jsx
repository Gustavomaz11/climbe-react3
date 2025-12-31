import styles from "./services.module.css"
import FormService from "../../components/form/FormService"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons"

const Contabilidade = () => {

  const [check] = useState([
    {id: 1, title: "Conformidade Fiscal e Legal", text: "Atendimento rigoroso às normas contábeis e fiscais, assegurando que a empresa esteja em conformidade com a legislação vigente e protegida contra riscos e penalidades."},
    {id: 2, title: "Informações Contábeis Confiáveis", text: "Elaboração de demonstrações contábeis claras e precisas, permitindo uma visão real da saúde financeira da empresa."},
    {id: 3, title: "Apoio à Gestão Empresarial", text: "A contabilidade como ferramenta de apoio à administração, fornecendo dados que auxiliam no planejamento, no controle e na tomada de decisões."},
    {id: 4, title: "Atendimento Próximo e Personalizado", text: "Relacionamento direto com profissionais especializados, com acompanhamento contínuo e soluções ajustadas às necessidades de cada empresa."},
  ])

  const [activeTab, setActiveTab] = useState("abordagem")
  const tabs = [
    {
      id: "abordagem",
      label: "Nossa Abordagem",
      active: true,
      content: "Atuação técnica e organizada, com processos bem definidos, cumprimento rigoroso de prazos e constante atualização frente à legislação contábil e fiscal."
    },
    {
      id: "objetivos",
      label: "Objetivos do Projeto",
      content: "Garantir conformidade legal, reduzir riscos fiscais, organizar informações contábeis e fornecer dados confiáveis para apoiar a gestão empresarial."
    },
    {
      id: "advisory",
      label: "Assessoria (Advisory)",
      content: "Atuamos como parceiros do cliente, esclarecendo dúvidas, orientando decisões e apoiando demandas contábeis, fiscais e societárias de forma contínua."
    }
  ]
  
  return (
    <div className={styles.services}>
      <section className={styles.container}>
        
        <div className={styles.header_content}>
          <div className={styles.text_content}>
            <span className={styles.badge}>Contabilidade Estratégica</span>
            <h1 className={styles.title}>Contabilidade Profissional para Segurança, Conformidade e Crescimento</h1>
            <p className={styles.description}>
              Oferecemos serviços contábeis completos, com foco não apenas no cumprimento das obrigações legais, mas também no apoio à gestão e à tomada de decisões estratégicas do negócio.
            </p>
            <p className={styles.description}>
              Nossa atuação garante organização fiscal, contábil e societária, reduzindo riscos, aumentando a transparência e fornecendo informações confiáveis para o crescimento sustentável da empresa.
            </p>
          </div>
          
          <div className={styles.image_container}>
            <div className={styles.image_wrapper}>
              <img src="/hero/contabilidade1.jpg" alt="contabilidade-image" className={styles.hero_image} />
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
                <img src="/hero/contabilidade2.jpg" alt="great-meet" className={styles.hero_image_how}/>
                <div className={styles.image_overlay}></div>
              </div>
            </div>

            <div className={styles.text_content}>
              <span className={styles.badge}>Como Atuamos</span>
              <h1 className={styles.title}>Nossa Contabilidade Garante Conformidade, Organização e Apoio à Gestão</h1>
              <p className={styles.description}>
                Nossa atuação contábil vai além do cumprimento das obrigações legais. Estruturamos processos, asseguramos a conformidade fiscal e entregamos informações claras e confiáveis para apoiar a gestão e a tomada de decisões do negócio.
              </p>
              <p className={styles.description}>
                Trabalhamos de forma próxima ao cliente, com foco em organização, transparência e segurança.
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

export default Contabilidade