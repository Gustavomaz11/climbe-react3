import styles from "./services.module.css"
import FormService from "../../components/form/FormService"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons"

const Mea = () => {

  const [check] = useState([
    {id: 1, title: "Estruturação Completa da Operação", text: "Planejamento detalhado da operação de M&A, incluindo análise estratégica, definição de tese de investimento, estrutura da transação e alinhamento entre as partes envolvidas."},
    {id: 2, title: "Apoio à Negociação", text: "Condução técnica das negociações, auxiliando na definição de preço, condições contratuais, cláusulas de proteção e estrutura financeira mais adequada à operação."},
    {id: 3, title: "Previsibilidade e Segurança Jurídico-Financeira", text: "Atuação integrada com assessores jurídicos e financeiros para reduzir riscos, garantir conformidade e aumentar a segurança durante todas as etapas da transação."},
    {id: 4, title: "Equipe Especializada e Confidencialidade", text: "Atendimento dedicado, com profissionais experientes em M&A, assegurando sigilo absoluto e acompanhamento próximo até o fechamento da operação."},
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
      content: "Visão estratégica do negócio, análise profunda da empresa e do mercado, definição de posicionamento e condução estruturada do processo de M&A."
    },
    {
      id: "objetivos",
      label: "Objetivos do Projeto",
      content: "Viabilizar operações de compra, venda ou fusão com foco em geração de valor, alinhamento estratégico e segurança para todas as partes envolvidas."
    },
    {
      id: "advisory",
      label: "Assessoria (Advisory)",
      content: "Atuação ativa durante todo o processo, incluindo preparação da empresa, negociação, coordenação de due diligence e suporte até o fechamento."
    }
  ]
  
  return (
    <div className={styles.services}>
      <section className={styles.container}>
        
        <div className={styles.header_content}>
          <div className={styles.text_content}>
            <span className={styles.badge}>Assessoria Estratégica em Fusões e Aquisições</span>
            <h1 className={styles.title}>M&A com Estrutura, Segurança e Foco em Valor</h1>
            <p className={styles.description}>
              Prestamos assessoria completa em processos de Fusões e Aquisições, apoiando empresas em operações de compra, venda, incorporação ou entrada de sócios estratégicos, com foco na maximização de valor e mitigação de riscos.
            </p>
            <p className={styles.description}>
              Atuamos desde a preparação da empresa até a conclusão da transação, conduzindo negociações de forma técnica, confidencial e estratégica.
            </p>
          </div>
          
          <div className={styles.image_container}>
            <div className={styles.image_wrapper}>
              <img src="/hero/mea1.jpg" alt="mea" className={styles.hero_image} />
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
                <img src="/hero/mea2.jpg" alt="great-meet" className={styles.hero_image_how}/>
                <div className={styles.image_overlay}></div>
              </div>
            </div>

            <div className={styles.text_content}>
              <span className={styles.badge}>Como Conduzimos Operações de M&A</span>
              <h1 className={styles.title}>Nossa Assessoria em Fusões e Aquisições Permite que Você Foque no que Realmente Importa</h1>
              <p className={styles.description}>
                Nossa abordagem em M&A é estruturada para apoiar decisões estratégicas complexas, assegurando clareza, controle e eficiência ao longo de todo o processo de transação.
              </p>
              <p className={styles.description}>
                Atuamos como parceiros estratégicos, alinhando interesses, reduzindo riscos e maximizando o valor da operação.
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

export default Mea