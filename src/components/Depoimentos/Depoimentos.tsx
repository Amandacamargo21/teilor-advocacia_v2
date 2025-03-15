import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Depoimentos.module.scss";
import { MdFormatQuote, MdNavigateBefore, MdNavigateNext, MdStarRate } from "react-icons/md";

interface DepoimentoProps {
  id: number;
  nome: string;
  texto: string;
  avaliacao: number;
  caso: string;
}

const Depoimentos: React.FC = () => {
  const depoimentos: DepoimentoProps[] = [
    {
      id: 1,
      nome: "Paulo Henrique",
      texto: "Tempos atrás precisei de um advogado para um processo e fui até esse escritório por ser mais perto da minha casa. Assim que cheguei lá fui super bem recebido pela equipe da Dra Teilor. Sem dúvidas, são bem ágeis e prestativos. Compreenderam rapidamente o que eu precisava. A Dra conduziu meu processo com muito profissionalismo. Achei que nem ia dar nada mas ganhamos a causa. Agradeço pelo atendimento e dedicação.",
      avaliacao: 5,
      caso: "Indenização Trabalhista"
    },
    {
      id: 2,
      nome: "Vera Eisfeld",
      texto: "Escritório sério, de profissionais competentes, atenciosos. Dra Vanessa Teilor sempre nos atende com um sorriso no rosto e com muita dedicação ao trabalho. Super recomendo!!",
      avaliacao: 5,
      caso: "Indenização Trabalhista"
    },
    {
      id: 3,
      nome: "FELIPE",
      texto: "Profissionais qualificados com conhecimento pleno. Estou satisfeitíssimo com os serviços prestados. Escritório de referência na região do boa vista. Quem precisar de UMA ADVOGADA conte com a advocacia TEILOR.",
      avaliacao: 5,
      caso: "Benefícios para PCD"
    },
    {
      id: 4,
      nome: "Adriano Padilha",
      texto: "Ótimos profissionais, me senti seguro e confiante desde a primeira conversa. Super recomendo.",
      avaliacao: 5,
      caso: "Direito do Consumidor"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextDepoimento = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentos.length);
  };

  const prevDepoimento = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + depoimentos.length) % depoimentos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextDepoimento();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <div className={styles.depoimentosContainer}>
      <div className={styles.depoimentosHeader}>
        <h2 className={styles.depoimentosTitle}>O que nossos clientes dizem</h2>
        <p className={styles.depoimentosSubtitle}>Depoimentos de pessoas que confiaram em nossos serviços jurídicos</p>
      </div>
      
      <div className={styles.depoimentosSlider}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            className={styles.depoimentoCard}
          >
            <div className={styles.quoteIcon}>
              <MdFormatQuote size={40} />
            </div>
            
            <p className={styles.depoimentoTexto}>{depoimentos[currentIndex].texto}</p>
            
            <div className={styles.avaliacaoStars}>
              {[...Array(depoimentos[currentIndex].avaliacao)].map((_, i) => (
                <MdStarRate key={i} size={24} className={styles.starIcon} />
              ))}
            </div>
            
            <div className={styles.depoimentoInfo}>
              <h4 className={styles.depoimentoNome}>{depoimentos[currentIndex].nome}</h4>
              <p className={styles.depoimentoCaso}>{depoimentos[currentIndex].caso}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className={styles.sliderControls}>
          <button 
            className={styles.sliderButton} 
            onClick={prevDepoimento}
            aria-label="Depoimento anterior"
          >
            <MdNavigateBefore size={24} />
          </button>
          <div className={styles.sliderDots}>
            {depoimentos.map((_, index) => (
              <button
                key={index}
                className={`${styles.sliderDot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
          <button 
            className={styles.sliderButton} 
            onClick={nextDepoimento}
            aria-label="Próximo depoimento"
          >
            <MdNavigateNext size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Depoimentos;