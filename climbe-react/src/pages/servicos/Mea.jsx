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

  const [activeTab, setActiveTab] = useState("abordagem")
  const [necessidade] = useState([
    {id: 1, title: "Balanços Patrimoniais e Demonstrativos de resultados do exercício (DRE)", text: "Dos últimos 5 anos de empresa, se houver."},
    {id: 2, title: "Posição atual de eventuais dívidas ou empréstimos bancários contraídos em nome da empresa ", text: "Saldo devedor, número e valor das parcelas, taxa de juros e etc"},
    {id: 3, title: "Indicadores de saúde financeira", text: "Cotejando com a média do setor em que atuam"},
    {id: 4, title: "Análise", text: "Macroeconômica do setor"}
  ])

  const tabs = [
    {
      id: "abordagem",
      label: "1º",
      active: true,
      content: "Recebemos os demonstrativos financeiros contábeis e gerenciais dos últimos 5 a 10 anos da empresa."
    },
    {
      id: "objetivos",
      label: "2º",
      content: "Realizamos a visita de Kick Off na empresa a fim de verificar a operação no seu dia a dia e o nível de fidedignidade da escrituração."
    },
    {
      id: "multidisciplinar",
      label: "3º",
      content: "Time multidisciplinar analisa o setor e a empresa produzindo o valuation diagnóstico."
    },
    {
      id: "stakeholders",
      label: "4º",
      content: "Relatório é entregue e apresentado aos sócios e stakeholders estratégicos definidos pelo contratante."
    },
    {
      id: "prospecto",
      label: "5º",
      content: "Prospecto comercial é produzido."
    },
    {
      id: "contraparte",
      label: "6º",
      content: "Iniciamos busca pela contraparte, que pode ser ponta compradora ou vendedora, para iniciar negociação."
    },
    {
      id: "indices",
      label: "7º",
      content: "Apresentamos plano de ação para empresa melhorar seus índices enquanto ocorre processo de negociação."
    },{
      id: "juridica",
      label: "8º",
      content: "Cuidamos de toda a parte jurídica referente a transição do controle da empresa quando do fechamento da neogiação."
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