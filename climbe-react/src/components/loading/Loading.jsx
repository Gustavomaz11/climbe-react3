import styles from "./Loading.module.css"

const LOGO_PATH = "/logo/logo.png"

const Loading = () => {
  return (
    <div className={styles.loadingScreen} role="status" aria-live="polite">
      <div className={styles.logoSpinner} aria-hidden="true">
        <img
          className={`${styles.logoImage} ${styles.logoOriginal}`}
          src={LOGO_PATH}
          alt=""
        />
        <img
          className={`${styles.logoImage} ${styles.logoToneSweep}`}
          src={LOGO_PATH}
          alt=""
        />
      </div>
      <span className={styles.screenReaderOnly}>Carregando...</span>
    </div>
  )
}

export default Loading
