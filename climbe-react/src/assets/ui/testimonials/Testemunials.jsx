import { useState, useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import styles from "./testemunials.module.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const { request, isLoading, error } = useFetch();

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await request("/testimonial.json");
        setTestimonials(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadTestimonials();
  }, [request]);

  useEffect(() => {
    if (!testimonials.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000); 

    return () => clearInterval(interval);
  }, [testimonials]);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <p>Carregando depoimentos...</p>
      </div>
    );
  }

  if (error || !testimonials.length) {
    return (
      <div className={styles.loading}>
        <p>Nenhum depoimento encontrado.</p>
      </div>
    );
  }

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>O Que Nossos Clientes Dizem</h2>

        <div className={styles.sliderWrapper}>
          <div className={styles.sliderContainer}>
            <div
              className={styles.slider}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className={styles.slide}>
                  <p className={styles.testimonialText}>
                    “{item.testimonial}”
                  </p>

                  <div className={styles.clientInfo}>
                    <img
                      src={item.path_photo}
                      alt={item.client}
                      className={styles.clientPhoto}
                    />
                    <h3 className={styles.clientName}>{item.client}</h3>
                    <p className={styles.clientPosition}>{item.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
