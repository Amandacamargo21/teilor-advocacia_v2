import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import heroImage from "@/assets/images/hero.svg";
import { MdBalance, MdKeyboardArrowDown } from 'react-icons/md';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('quem-somos') || 
                        document.getElementById('areas-atuacao');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className={styles.heroContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.heroBackground}>
        <img src={heroImage} alt="Banner Teilor Advocacia" className={styles.heroImage}/>
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroWrapper}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={styles.heroTextContainer}
          > 
            <h1 className={styles.heroTitle}>
              Excelência jurídica com resultados efetivos
            </h1>
            
            <p className={styles.heroText}>
              Há mais de uma década, nossa equipe especializada atua nas áreas de Direito do Trabalho, Civil, Previdenciário, Consumidor e da Pessoa com Deficiência. Com atendimento personalizado e estratégias eficientes, transformamos conhecimento jurídico em resultados que realmente impactam sua vida.
            </p>
            
            <div className={styles.heroActions}>
              <motion.a 
                href="#contato"
                className={`${styles.heroButton} ${styles.primaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agende uma Consulta
                <MdBalance size={20} />
              </motion.a>
              
              <motion.a 
                href="#areas-atuacao"
                className={`${styles.heroButton} ${styles.secondaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça Nossas Áreas
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          onClick={scrollToNextSection}
        >
          <span>Deslize para ver mais</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <MdKeyboardArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;