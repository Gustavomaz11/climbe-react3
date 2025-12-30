import Aurora from "../Aurora"
import { useState, useEffect } from "react"
import styles from "./formService.module.css"
import Button from "../button/Button"

const FormService = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [auroraError, setAuroraError] = useState(false)

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
            console.error('WebGL não é suportado neste navegador');
            setAuroraError(true);
        } else {
            console.log('WebGL suportado:', gl.getParameter(gl.VERSION));
            console.log('Renderer:', gl.getParameter(gl.RENDERER));
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ nome, email, servico, mensagem })
    }

    return (
        <div className={styles.container}>
            <div className={styles.overlay} />

            {auroraError ? (
                <div className={styles.auroraContainer}>
                    <p className={styles.errorMessage}>
                        WebGL não é suportado neste navegador
                    </p>
                </div>
            ) : (
                <div className={styles.auroraContainer}>
                    <Aurora
                        colorStops={["#39c6bb", "#222222", "#ffffff"]}
                        amplitude={1.0}
                        blend={0.5}
                    />
                </div>
            )}

            <div className={styles.wrapper}>
                {/* Left Column - Info */}
                <div className={styles.infoSection}>
                    <p className={styles.workInquiry}>Climbe Investimentos</p>
                    
                    <h1 className={styles.title}>
                        Vamos Otimizar<br />
                        A Realidade da Sua Empresa ?
                    </h1>
                    
                    <p className={styles.subtitle}>
                        Decisões estratégicas sustentadas por<br />
                        inteligência financeira.
                    </p>

                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className={styles.contactText}>
                                <span className={styles.contactLabel}>Telefone para contato</span>
                                <span className={styles.contactValue}>+55 79 9 9126-9378</span>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className={styles.contactText}>
                                <span className={styles.contactLabel}>Entre em contato</span>
                                <span className={styles.contactValue}>contato@climbe.com.br</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Form */}
                <div className={styles.formSection}>
                    <h2 className={styles.formTitle}>Foco em decisão e valor!</h2>
                    <p className={styles.formSubtitle}>
                        A inteligência que impulsiona o valor da sua empresa.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputRow}>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    placeholder="Seu nome completo"
                                    className={styles.input}
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <input
                                    type="email"
                                    placeholder="seu@email.com"
                                    className={styles.input}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <input
                                type="text"
                                placeholder="Nome da sua empresa"
                                className={styles.input}
                                value={empresa}
                                onChange={(e) => setEmpresa(e.target.value)}
                                required
                            />
                        </div>

                        <div className={`${styles.textareaGroup} ${styles.fullWidth}`}>
                            <textarea
                                placeholder="Como podemos ajudar sua empresa?"
                                className={styles.textarea}
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                required
                            />
                        </div>

                        <Button type="button" customClass="primary" txt="Enviar Mensagem"></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormService