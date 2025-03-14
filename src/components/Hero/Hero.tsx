import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import heroImage from "@/assets/images/hero.svg";
import { MdBalance } from 'react-icons/md'

const Hero: React.FC = () => {
  return (
    <motion.div
      className={styles.heroContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.heroBackground}>
        <img src={heroImage} alt="Banner Teilor Adv" className={styles.heroImage}/>
      </div>
      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={styles.heroTextContainer}
        >
          <h1 className={styles.heroTitle}>Excelência jurídica com resultados efetivos</h1>
          <p className={styles.heroText}>
          Há mais de uma década, nossa equipe especializada atua nas áreas de Direito do Trabalho, Civil, Previdenciário, Consumidor e da Pessoa com Deficiência. Com atendimento personalizado e estratégias eficientes, transformamos conhecimento jurídico em resultados que realmente impactam sua vida.
          </p>
          <div>
    </div>
          <motion.button 
            className={styles.heroButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Garanta a defesa que você merece
            <MdBalance size={24} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;