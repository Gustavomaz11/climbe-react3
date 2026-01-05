import styles from "./about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleCheck, faUpDown, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/button/Button";
import { openWhatsapp } from "../../../shared/lib/navigation";

const aboutData = [
  {
    id: 1,
    icon: faUpDown,
    title: "Serviço automatizado e mobilidade",
    text: "Investimos em tecnologias, como área logada para clientes, que permitem acessar conteúdos e gerenciar investimentos de qualquer lugar.",
  },
  {
    id: 2,
    icon: faPuzzlePiece,
    title: "Ecossistema de investidores e consultores",
    text: "Rede de analistas, consultores e investidores de todo o Brasil para discussões diárias e troca de conhecimento sobre o mercado financeiro.",
  },
  {
    id: 3,
    icon: faFileCircleCheck,
    title: "Transparência e ética no mercado financeiro",
    text: "Serviços guiados por princípios éticos, alinhados aos objetivos dos clientes, reduzindo conflitos e entregando segurança e confiança.",
  },
];

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.section_title}>
        <h2>Climbe Investimentos Independentes</h2>
        <p>
          Seja você iniciante ou investidor experiente, nossas ferramentas, relatórios e recomendações são criadas para o
          seu crescimento e independência financeira.
        </p>
      </div>
      <div className={styles.wrapper_about_section}>
        {aboutData.map((item) => (
          <div className={styles.about_us} key={item.id}>
            <FontAwesomeIcon icon={item.icon} className={styles.icon} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <Button txt="Fale Conosco" customClass="primary" onClick={() => openWhatsapp()} />
    </div>
  );
};

export default About;
