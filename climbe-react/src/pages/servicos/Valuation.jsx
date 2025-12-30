import styles from "./services.module.css"
import FormService from "../../components/form/FormService"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons"

const Valuation = () => {

  const [check] = useState([
    {id: 1, title: "Metodologia Profissional de Valuation", text: "Utilizamos métodos consagrados como Fluxo de Caixa Descontado (DCF), Múltiplos de Mercado e Avaliação Patrimonial, sempre adequando a metodologia ao perfil e ao momento da empresa avaliada."},
    {id: 2, title: "Suporte à Tomada de Decisão", text: "O valuation fornece uma base sólida para decisões estratégicas, como entrada de investidores, venda parcial ou total do negócio, reorganizações societárias e planejamento de crescimento."},
    {id: 3, title: "Relatórios Claros e Fundamentados", text: "Entregamos relatórios completos, objetivos e bem estruturados, com premissas transparentes, cenários projetados e justificativas técnicas que facilitam a compreensão e a apresentação a terceiros."},
    {id: 4, title: "Atendimento Especializado e Personalizado", text: "Nossa equipe acompanha todo o processo de avaliação, esclarecendo dúvidas e adaptando a análise às necessidades específicas de cada empresa, sempre com confidencialidade e compromisso técnico."},
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
      active: true,
      content: "Análise profunda da empresa, combinando dados financeiros históricos, projeções futuras e contexto de mercado, garantindo um valuation alinhado à realidade do negócio."
    },
    {
      id: "objetivos",
      label: "Objetivos do Projeto",
      content: "Definir o valor justo da empresa para suportar decisões como venda, entrada de investidores, reorganizações societárias, planejamento sucessório ou captação de recursos."
    },
    {
      id: "advisory",
      label: "Assessoria (Advisory)",
      content: "Acompanhamos o cliente durante todo o processo, explicando premissas, cenários e impactos estratégicos do valuation, indo além do relatório técnico."
    }
  ]
  
  return (
    <div className={styles.services}>
      <section className={styles.container}>
        
        <div className={styles.header_content}>
          <div className={styles.text_content}>
            <span className={styles.badge}>Avaliação Estratégica de Empresas</span>
            <h1 className={styles.title}>Valuation Empresarial com Precisão e Credibilidade</h1>
            <p className={styles.description}>
              Realizamos avaliações de empresas com base em metodologias reconhecidas pelo mercado, 
              entregando análises claras, técnicas e confiáveis para apoiar decisões estratégicas, 
              societárias e financeiras.
            </p>
            <p className={styles.description}>
              Nosso processo considera dados financeiros, operacionais e de mercado, garantindo uma 
              visão realista do valor do negócio, alinhada aos objetivos dos sócios, investidores e gestores.
            </p>
          </div>
          
          <div className={styles.image_container}>
            <div className={styles.image_wrapper}>
              <img src="/hero/hero3.jpeg" alt="Valuation Empresarial" className={styles.hero_image} />
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
                <img src="/hero/hands.jpg" alt="great-meet" className={styles.hero_image_how}/>
                <div className={styles.image_overlay}></div>
              </div>
            </div>

            <div className={styles.text_content}>
              <span className={styles.badge}>Como Conduzimos o Valuation</span>
              <h1 className={styles.title}>Nossa Avaliação de Empresas Permite que Você Tome Decisões com Segurança</h1>
              <p className={styles.description}>
                Nosso processo de valuation é estruturado para entregar clareza, precisão e respaldo técnico, permitindo que sócios, investidores e gestores tomem decisões estratégicas com total confiança no valor apurado do negócio.
              </p>
              <p className={styles.description}>
                Atuamos de forma analítica e personalizada, considerando a realidade financeira, operacional e mercadológica de cada empresa.
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

export default Valuation