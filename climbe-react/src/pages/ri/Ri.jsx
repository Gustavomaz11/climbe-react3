import styles from "./ri.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileLines,
  faFileContract,
  faBookOpen,
  faStar,
  faChartPie,
  faChartLine,
  faMoneyBillTrendUp,
  faScaleBalanced,
  faComments
} from "@fortawesome/free-solid-svg-icons"
import { faFileLines as faFileLinesRegular } from "@fortawesome/free-regular-svg-icons"

const Ri = () => {
    const navigate = useNavigate()
    const [ri] = useState([
        {id: 1, ri: "Acordo de Sócios", path: "/relatorios/acordoSocios", icon: faFileLinesRegular},
        {id: 2, ri: "Contrato Social", path: "/relatorios/contratoSocial", icon: faFileContract},
        {id: 3, ri: "Educação Contínua", path: "/relatorios/educacaoContinua", icon: faBookOpen},
        {id: 4, ri: "NPS", path: "/relatorios/nps", icon: faStar},
        {id: 5, ri: "Balanço Patrimonial", path: "/relatorios/balancoPatrimonial", icon: faChartPie},
        {id: 6, ri: "Resultados", path: "/relatorios/resultados", icon: faChartLine},
        {id: 7, ri: "Planejamento Estratégico", path: "/relatorios/planejamentoEstrategico", icon: faChartLine},
        {id: 8, ri: "Nosso Valuation", path: "/relatorios/nossoValuation", icon: faMoneyBillTrendUp},
        {id: 9, ri: "Compliance", path: "/relatorios/compliance", icon: faScaleBalanced},
        {id: 10, ri: "Atas de Reuniões", path: "/relatorios/atasReunioes", icon: faComments},
    ])

    return (
        <div className={styles.ri}>
            <section className={styles.card_section}>
                <div className={styles.container}>
                    <div className={styles.card_header}>
                        <span className={styles.badge}>Relações com Investidores</span>
                        <h1 className={styles.title}>Documentos Institucionais</h1>
                    </div>
                    <div className={styles.card_grid}>
                        {ri && ri.map((item) => (
                            <div 
                                className={styles.card_item} 
                                key={item.id}
                                onClick={() => navigate(item.path)}
                            >
                                <div className={styles.icon_wrapper}>
                                    <FontAwesomeIcon 
                                        icon={item.icon} 
                                        className={styles.card_icon}
                                    />
                                </div>
                                <h4 className={styles.card_title}>{item.ri}</h4>
                                <p className={styles.card_text}>Acesse o documento completo</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ri