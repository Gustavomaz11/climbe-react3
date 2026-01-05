import { useState } from "react";
import { openWhatsapp } from "../../../shared/lib/navigation";

import styles from "./header.module.css";

import Nav from "../../../components/nav/Nav";
import Button from "../../../components/button/Button";
import Modal from "../../../components/modal/Modal";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.backImage}>
      <Nav />
      <div className={styles.hero_content}>
        <h4 className={styles.hero_subtitle}>
          Climbe Investimentos Independentes
        </h4>
        <h1 className={styles.hero_title}>
          O melhor investimento precisa da melhor orientação!
        </h1>
        <h4 className={styles.hero_description}>
          Agora você pode contar com a nossa consultoria e informações
          qualificadas do mercado.
        </h4>
        <div className={styles.btn_section}>
          <Button
            txt="Saiba mais"
            customClass="primary"
            onClick={() => openWhatsapp()}
          />

          <Button
            txt="Assista"
            customClass="secondary"
            onClick={() => setOpen(true)}
          />
        </div>
        <Modal open={open} onClose={() => setOpen(false)} size="lg">
          <video src="/video/video.mp4" autoPlay></video>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
