import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Nav.module.scss";
import { MdCall, MdEmail } from "react-icons/md";
import logo200 from "@/assets/images/logo200.svg";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div className={`${styles.topBar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.topBarContent}>
          <div className={styles.contactInfo}>
            <a href="tel:+554195564466" className={styles.contactLink}>
              <MdCall size={16} />
              <span>(41) 99556-4466</span>
            </a>
            <a
              href="mailto:contato@teiloradvocacia.com.br"
              className={styles.contactLink}
            >
              <MdEmail size={16} />
              <span>contato@teiloradvocacia.com.br</span>
            </a>
          </div>
          <div className={styles.ctaButton}>
            <a href="#contato">Converse com nossa equipe</a>
          </div>
        </div>
      </div>

      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <a href="#home">
              <img src={logo200} alt="Logo Teilor Advocacia" />
            </a>
          </div>

          {/* Links de navegação (desktop) */}
          <ul className={styles.navLinks}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#quem-somos">Sobre Nós</a>
            </li>
            <li>
              <a href="#areas-atuacao">Áreas de Atuação</a>
            </li>
            <li>
              <a href="#depoimentos">Depoimentos</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>

          {/* Botão do menu hamburger (mobile) */}
          <button
            className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </motion.nav>

      {/* Overlay para escurecer o fundo quando o menu mobile está aberto */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className={styles.mobileMenuHeader}>
              <div className={styles.mobileLogo}>
                <img
                  src="/src/assets/images/logo200.svg"
                  alt="Logo Teilor Advocacia"
                />
              </div>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu"
              >
                &times;
              </button>
            </div>

            <ul className={styles.mobileLinks}>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <a href="#home" onClick={handleLinkClick}>
                  Home
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <a href="#quem-somos" onClick={handleLinkClick}>
                  Sobre Nós
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a href="#areas-atuacao" onClick={handleLinkClick}>
                  Áreas de Atuação
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a href="#depoimentos" onClick={handleLinkClick}>
                  Depoimentos
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a href="#faq" onClick={handleLinkClick}>
                  FAQ
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a href="#contato" onClick={handleLinkClick}>
                  Contato
                </a>
              </motion.li>
            </ul>

            <div className={styles.mobileContact}>
              <h3>Entre em Contato</h3>
              <div className={styles.mobileContactItem}>
                <MdCall size={18} />
                <span>(41) 99556-4466</span>
              </div>
              <div className={styles.mobileContactItem}>
                <MdEmail size={18} />
                <span>contato@teiloradvocacia.com.br</span>
              </div>
              <a
                href="#contato"
                className={styles.mobileCtaButton}
                onClick={handleLinkClick}
              >
                Agende uma Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
