import styles from './Button.module.css'

const Button = ({txt, type, onClick, isLoading, customClass}) => {
  return (
    <button type={type} disabled={isLoading} onClick={onClick} className={`${styles.button} ${customClass ? styles[customClass] : ""}`}>{isLoading ? "Carregando..." : txt}</button>
  )
}

export default Button