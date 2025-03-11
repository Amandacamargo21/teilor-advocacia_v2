import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <motion.div
      className={styles.heroContainer}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Teilor Advocacia</h1>
      <p>Atuando em diversas áreas do direito</p>
    </motion.div>
  );
};

export default Hero;
