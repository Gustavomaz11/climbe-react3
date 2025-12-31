import styles from "./services.module.css"
import FormService from "../../components/form/FormService"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons"

const Valuation = () => {

  const [check] = useState([
    {id: 1, title: "Metodologia Profissional de Valuation", text: "Utilizamos métodos consagrados como Fluxo de Caixa Descontado (DCF), Múltiplos de Mercado, além de visitarmos in loco a empresa sempre adequando a metodologia ao perfil e ao momento da operação avaliada."},
    {id: 2, title: "Suporte à Tomada de Decisão", text: "O valuation fornece uma base sólida para decisões estratégicas, como entrada de investidores, venda parcial ou total do negócio, reorganizações societárias e planejamento."},
    {id: 3, title: "Relatórios Claros e Fundamentados", text: "Entregamos relatórios completos, objetivos e bem estruturados, com premissas transparentes, cenários projetados e justificativas técnicas que facilitam a compreensão. Nosso time é composto por profissionais credenciados à CVM e com contribuição cientifica em nível internacional."},
    {id: 4, title: "Atendimento Especializado e Personalizado", text: "Nossa equipe multidisciplinar acompanha todo o processo de avaliação, esclarecendo dúvidas e adaptando a análise às necessidades específicas de cada empresa, sempre com confidencialidade e compromisso técnico."},
  ])

  const [activeTab, setActiveTab] = useState(1)
  const [necessidade] = useState([
    {id: 1, title: "Balanços Patrimoniais e Demonstrativos de resultados do exercício (DRE)", text: "Dos últimos 5 anos de empresa, se houver."},
    {id: 2, title: "Posição atual de eventuais dívidas ou empréstimos bancários contraídos em nome da empresa ", text: "Saldo devedor, número e valor das parcelas, taxa de juros e etc"},
    {id: 3, title: "Perspectivas Futuras", text: "Planejamento estratégico, preferencialmente."},
    {id: 4, title: "Estrutua de Governança", text: "Contrato social e acordo de sócios."},
  ])

  const tabs = [
    {
      id: 1,
      label: "1º",
      active: true,
      content: " Definimos o objetivo do valuation que pode ser: Diagnóstico de saúde financeira da empresa, entrada/saída de sócios; fusão, incorporação ou aquisição de negócios (M&A); Planejamento Sucessório; ou Planejamento Estratégico."
    },
    {
      id: 2,
      label: "2º",
      content: "Recebemos os demonstrativos financeiros contábeis e gerenciais dos últimos 5 a 10 anos da empresa a ser avaliada."
    },
    {
      id: 3,
      label: "3º",
      content: "Realizamos a visita de Kick Off na empresa a fim de verificar a operação no seu dia a dia e o nível de fidedignidade da escrituração."
    },
    {
      id: 4,
      label: "4º",
      content: "Time multidisciplinar analisa o setor e a empresa produzindo o relatório."
    },
    {
      id: 5,
      label: "5º",
      content: "Relatório é entregue e apresentado aos sócios e stakeholders estratégicos definidos pelo contratante."
    }
  ]
  
  return (
    <div className={styles.services}>
      <section className={styles.container}>
        
        <div className={styles.header_content}>
          <div className={styles.text_content}>
            <span className={styles.badge}>Avaliação Estratégica de Empresas</span>
            <h1 className={styles.title}>Valuation com Precisão e Credibilidade</h1>
            <p className={styles.description}>
              Realizamos avaliações de empresas com base em metodologias reconhecidas pelo mercado, 
              entregando análises claras, técnicas e confiáveis para apoiar decisões estratégicas, 
              societárias e financeiras.
            </p>
            <p className={styles.description}>
              Nosso processo considera dados financeiros, operacionais e de mercado, garantindo um verdadeiro diagnóstico do negócio, alinhado aos objetivos dos sócios, investidores e gestores.
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
              {/* <h1 className={styles.title}>Nossa Avaliação de Empresas Permite que Você Tome Decisões com Segurança</h1>
              <p className={styles.description}>
                Nosso processo de valuation é estruturado para entregar clareza, precisão e respaldo técnico, permitindo que sócios, investidores e gestores tomem decisões estratégicas com total confiança no valor apurado do negócio.
              </p>
              <p className={styles.description}>
                Atuamos de forma analítica e personalizada, considerando a realidade financeira, operacional e mercadológica de cada empresa.
              </p> */}

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