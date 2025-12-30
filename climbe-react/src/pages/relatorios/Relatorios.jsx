import styles from "../ri/ri.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileContract,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons"
import { faFileLines as faFileLinesRegular } from "@fortawesome/free-regular-svg-icons"

const Ri = () => {
    const navigate = useNavigate()
    const [ri] = useState([
        {id: 1, ri: "Relatórios Nacionais", path: "/relatorios/nacionais", icon: faFileLinesRegular},
        {id: 2, ri: "Relatórios Internacionais", path: "/relatorios/internacionais", icon: faFileContract},
        {id: 3, ri: "Relatórios Cripto", path: "/relatorios/cripto", icon: faBookOpen}
    ])

    return (
        <div className={styles.ri}>
            <section className={styles.card_section}>
                <div className={styles.container}>
                    <div className={styles.card_header}>
                        <span className={styles.badge}>Climbe Investimentos</span>
                        <h1 className={styles.title}>Relatórios Profissionais</h1>
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