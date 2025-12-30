import styles from "./services.module.css"
import FormService from "../../components/form/FormService"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons"

const Cfo = () => {

  const [check] = useState([
    {id: 1, title: "Gestão Financeira Profissional", text: "Estruturação de controles, fluxo de caixa, orçamento e indicadores financeiros, garantindo maior previsibilidade e segurança nas decisões."},
    {id: 2, title: "Suporte Estratégico à Gestão", text: "Apoio contínuo à diretoria e aos sócios na análise de resultados, definição de estratégias e avaliação de riscos e oportunidades."},
    {id: 3, title: "Modelo Flexível e Sob Medida", text: "Atendimento ajustado à realidade da empresa, com escopo, carga horária e foco definidos conforme o estágio do negócio."},
    {id: 4, title: "Liderança Financeira Especializada", text: "Atuação direta de um CFO experiente, trazendo visão estratégica, organização financeira e melhores práticas de mercado para dentro da empresa."},
  ])

  const [activeTab, setActiveTab] = useState("advisory")
  const [necessidade] = useState([
    {id: 1, title: "Balanços Patrimoniais e Demonstrativos de resultados do exercício (DRE)", text: "Dos últimos 5 anos de empresa, se houver."},
    {id: 2, title: "Posição atual de eventuais dívidas ou empréstimos bancários contraídos em nome da empresa ", text: "Saldo devedor, número e valor das parcelas, taxa de juros e etc"},
    {id: 3, title: "Indicadores de saúde financeira", text: "Cotejando com a média do setor em que atuam"},
    {id: 4, title: "Análise", text: "Macroeconômica do setor"},
    {id: 5, title: "Projeção Futura", text: "Resultados financeiros para os próximos anos."},
    {id: 6, title: "Valor Econômico da Empresa", text: "Dentro de um intervalo de cenários de negociação (pessimista, neutro e otimista)"},
  ])

  const tabs = [
    {
      id: "abordagem",
      label: "Nossa Abordagem",
      content: "Atuamos de forma estratégica e prática, estruturando processos financeiros, indicadores de desempenho e rotinas de controle, sempre alinhados aos objetivos da empresa."
    },
    {
      id: "objetivos",
      label: "Objetivos do Projeto",
      content: "Fortalecer a gestão financeira, aumentar a previsibilidade de caixa, apoiar decisões estratégicas e preparar a empresa para crescimento, captação ou reorganização."
    },
    {
      id: "advisory",
      label: "Assessoria (Advisory)",
      active: true,
      content: "Atuamos como parceiros da liderança, traduzindo números em insights claros, orientando decisões e apoiando negociações com bancos, investidores e stakeholders."
    }
  ]
  
  return (
    <div className={styles.services}>
      <section className={styles.container}>
        
        <div className={styles.header_content}>
          <div className={styles.text_content}>
            <span className={styles.badge}>Diretoria Financeira Estratégica</span>
            <h1 className={styles.title}>CFO Sob Demanda para Decisões Financeiras Mais Inteligentes</h1>
            <p className={styles.description}>
              Oferecemos o serviço de Diretoria Financeira Sob Demanda para empresas que precisam de liderança financeira estratégica, sem os custos e a complexidade de um CFO em tempo integral.
            </p>
            <p className={styles.description}>
              Atuamos de forma próxima à gestão, organizando as finanças, estruturando processos e transformando dados financeiros em decisões claras, sustentáveis e orientadas ao crescimento.
            </p>
          </div>
          
          <div className={styles.image_container}>
            <div className={styles.image_wrapper}>
              <img src="/hero/cfo1.jpg" alt="cfo" className={styles.hero_image} />
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
                <img src="/hero/cfo2.jpg" alt="great-meet" className={styles.hero_image_how}/>
                <div className={styles.image_overlay}></div>
              </div>
            </div>

            <div className={styles.text_content}>
              <span className={styles.badge}>Como Atuamos</span>
              <h1 className={styles.title}>Nossa Diretoria Financeira Sob Demanda Permite que Você Foque no Crescimento do Negócio</h1>
              <p className={styles.description}>
                A Diretoria Financeira Sob Demanda oferece liderança financeira estratégica sem a necessidade de uma estrutura interna robusta. Atuamos lado a lado com a gestão, organizando números, melhorando resultados e apoiando decisões críticas com visão de longo prazo.
              </p>
              <p className={styles.description}>
                Nosso modelo é flexível, escalável e adaptado à realidade de cada empresa.
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

      <section className={styles.card_section}>
        <div className={styles.container}>
          <div className={styles.card_header}>
            <span className={styles.badge}>Do que precisamos</span>
            <h1 className={styles.title}>A Climbe faz análise baseada no seu cenário</h1>
          </div>
          <div className={styles.card_grid}>
            {necessidade && necessidade.map((item, idx) => (
              <div className={styles.card_item} key={item.id}>
                <div className={styles.card_number}>{idx + 1}</div>
                <h4 className={styles.card_title}>{item.title}</h4>
                <p className={styles.card_text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FormService />
      
    </div>
  )
}

export default Cfo