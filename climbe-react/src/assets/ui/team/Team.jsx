import React, { useRef, useState, useEffect } from 'react';
import { useFetch } from "../../../hooks/useFetch";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from './team.module.css';

export default function Team() {
  const [member, setMembers] = useState([]);
  const { request } = useFetch();

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (!progressCircle.current || !progressContent.current) return;

    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    const req = async () => {
      try {
        const res = await request('/team.json');
        setMembers(res);
        console.log('Dados recebidos:', res); 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    req();
  }, [request]);

  
  useEffect(() => {
    console.log('Estado member atualizado:', member);
  }, [member]);

  return (
    <section className={styles.team}>
      <div className={styles.team_container}>
        <h2 className={styles.team_title}>Nossa Equipe</h2>
        
        <Swiper
          className={styles.swiper}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          {member.map((m) => (
            <SwiperSlide key={m.id}>
              <div className={styles.member_card}>
                <img 
                  src={m.path_photo} 
                  alt={m.member} 
                  className={styles.member_photo}
                />
                <div className={styles.member_info}>
                  <h3 className={styles.member_name}>{m.member}</h3>
                  <p className={styles.member_position}>{m.position}</p>
                  
                  {m.experience && (
                    <div className={styles.member_experience}>
                      <ul>
                        {m.experience.map((exp) => (
                          <li key={exp.id}>{exp.item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="autoplay-progress" slot="container-end">
            {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg> */}
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
