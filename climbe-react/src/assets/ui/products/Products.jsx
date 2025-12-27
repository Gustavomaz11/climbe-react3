import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileCircleCheck,
  faChartArea,
  faUpDown,
  faPuzzlePiece
} from "@fortawesome/free-solid-svg-icons"
import styles from "./products.module.css"

const iconMap = {
  "file-circle-check": faFileCircleCheck,
  "chart-area": faChartArea,
  "up-down": faUpDown,
  "puzzle-piece": faPuzzlePiece
}

const Products = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const [product] = useState([
    {
      id: 1,
      product: "Avaliação de Empresas (Valuation)",
      icon: "file-circle-check",
      text: "Nosso objetivo é fornecer uma análise precisa e detalhada, com base em métodos reconhecidos como fluxo de caixa descontado (DCF), múltiplos de mercado e avaliação de ativos, entre outros. Com isso, ajudamos nossos clientes a tomar decisões mais assertivas em processos de venda, compra, fusões, reestruturações ou busca por investidores.",
      colorClass: styles.icon_blue
    },
    {
      id: 2,
      product: "Diretoria Financeira Sob Demanda (CFO)",
      icon: "chart-area",
      text: "Oferecemos a expertise de um diretor financeiro experiente, sem a necessidade de contratar um executivo em tempo integral. Esse serviço é ideal para empresas em crescimento que buscam uma gestão financeira estratégica e eficiente, mas que não têm os recursos ou a necessidade de um CFO permanente.",
      colorClass: styles.icon_green
    },
    {
      id: 3,
      product: "Terceirização de Rotinas Financeiras (BPO)",
      icon: "up-down",
      text: "Nosso objetivo é oferecer soluções completas para a gestão das rotinas financeiras da sua empresa, como contas a pagar, a receber, conciliação bancária e fluxo de caixa. Com a terceirização desses processos, buscamos otimizar o tempo e os recursos do cliente, garantindo maior eficiência, controle e segurança na gestão financeira.",
      colorClass: styles.icon_amber
    },
    {
      id: 4,
      product: "Fusões e Aquisições (M&A)",
      icon: "puzzle-piece",
      text: "Auxiliamos empresas em processos estratégicos de compra, venda, fusões ou reestruturações. Nosso trabalho abrange todas as fases dessas operações, desde a análise inicial e due diligence até a negociação e integração pós-transação.",
      colorClass: styles.icon_purple
    }
  ])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className={styles.products}>
      <div className={`${styles.container} ${isVisible ? styles.animate : ''}`}>
        {product.map((item, index) => (
          <div 
            key={item.id} 
            className={styles.product_item}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={styles.icon_wrapper}>
              <FontAwesomeIcon 
                icon={iconMap[item.icon]} 
                className={`${styles.icon} ${item.colorClass}`}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.product_title}>{item.product}</h3>
              <p className={styles.product_text}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products