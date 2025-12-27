import { useEffect, useRef, useState } from "react"
import styles from "./kpi.module.css"

const Kpi = () => {
  const ref = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)

  const [numbers, setNumbers] = useState([
    { id: 1, value: 0, target: 90, title: "NPS" },
    { id: 2, value: 0, target: 200, title: "Clientes PJ", signal: "+" },
    { id: 3, value: 0, target: 150, title: "Em Empresas Avaliadas", signal: "+R$", lastSignal: "M" }
  ])

  /* OBSERVA QUANDO A SEÇÃO APARECE */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [hasStarted])

  /* ANIMA OS NÚMEROS */
  useEffect(() => {
    if (!hasStarted) return

    numbers.forEach((item, index) => {
      let start = 0
      const duration = 1500
      const increment = item.target / (duration / 16)

      const animate = () => {
        start += increment

        if (start < item.target) {
          setNumbers(prev =>
            prev.map((n, i) =>
              i === index ? { ...n, value: Math.floor(start) } : n
            )
          )
          requestAnimationFrame(animate)
        } else {
          setNumbers(prev =>
            prev.map((n, i) =>
              i === index ? { ...n, value: item.target } : n
            )
          )
        }
      }

      requestAnimationFrame(animate)
    })
  }, [hasStarted])

  return (
    <section ref={ref} className={styles.kpi}>
      {numbers.map(item => (
        <div className={styles.kpi_item} key={item.id}>
          <div className={styles.signal_content}>
            {item.signal && <span>{item.signal}</span>}
            <h2>{item.value}</h2>
            {item.lastSignal && <span>{item.lastSignal}</span>}
          </div>
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Kpi
