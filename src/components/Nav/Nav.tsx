import React from "react";
import { motion } from "framer-motion";
import styles from "./Nav.module.scss";

const Nav: React.FC = () => {
  return (
    <motion.nav
      className={styles.nav}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logo}>
        <img src="/src/assets/images/logo200.svg" alt="Logo Teilor Advocacia" />
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
