import styles from "./about.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileCircleCheck,
  faUpDown,
  faPuzzlePiece
} from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"
import { useRedirect } from "../../../hooks/useRedirect"

import Button from "../../../components/button/Button"

const iconMap = {
  "file-circle-check": faFileCircleCheck,
  "up-down": faUpDown,
  "puzzle-piece": faPuzzlePiece
}


const About = () => {
    const [about] = useState([
        {id: 1, icon: "up-down", title: "Serviço Automatizado e Mobilidade", text: "A Climbe está investindo em tecnologias, como área logada para clientes , que permitem aos clientes acessar conteúdos, facilitando a gestão dos investimentos em qualquer lugar."},
        {id: 2, icon: "puzzle-piece", title: "Ecossistema de Investidores e Consultores", text: "Criamos uma rede de analistas, consultores e investidores de todo o Brasil, permitindo discussões diárias e compartilhamento de conhecimentos sobre o mercado financeiro, fortalecendo a comunidade de clientes."},
        {id: 3, icon: "file-circle-check", title: "Transparência e Ética no Mercado Financeiro", text: "Nossos serviços são guiados por princípios éticos, buscando sempre o alinhamento com os objetivos dos clientes, sem conflito de interesses. Nosso compromisso é oferecer segurança e confiança para quem está começando ou já investe no mercado financeiro."}
    ])
  return (
    <div className={styles.about}>
        <div className={styles.section_title}>
          <h2>Climbe Investimentos Independentes</h2>
          <p>Seja você um iniciante ou um investidor experiente, nossas ferramentas, relatórios e recomendações são criadas pensando no seu crescimento e na sua independência financeira.</p>
        </div>
        <div className={styles.wrapper_about_section}>
          {about && about.map((item) => (
              <div className={styles.about_us} key={item.id}>
                <FontAwesomeIcon
                    icon={iconMap[item.icon]}
                    className={`${styles.icon}`}
                />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
          ))}
        </div>
        <Button txt="Fale Conosco" customClass="primary" onClick={() => useRedirect()} />
    </div>
  )
}

export default About