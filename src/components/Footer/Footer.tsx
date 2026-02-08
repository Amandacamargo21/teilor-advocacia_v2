import React from "react";
import styles from "./Footer.module.scss";
import { MdFacebook, MdOutlineArrowUpward, MdEmail, MdLocationOn } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import logo200 from "@/assets/images/logo200.svg";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const whatsappMessage = encodeURIComponent(`Olá, gostaria de saber mais sobre seus serviços de assessoria jurídica.`);
  const whatsappUrl = `https://wa.me/554195564466?text=${whatsappMessage}`;


  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <img src={logo200} alt="Logo Teilor Advocacia" />
            <p className={styles.footerTagline}>
              Excelência jurídica com resultados efetivos
            </p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Navegação</h3>
              <ul className={styles.footerList}>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#areas-atuacao">Áreas de Atuação</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Áreas de Atuação</h3>
              <ul className={styles.footerList}>
                <li>Direito Trabalhista</li>
                <li>Direito Civil</li>
                <li>Direito Previdenciário</li>
                <li>Direito do Consumidor</li>
                <li>Direito da Pessoa com Deficiência</li>
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Contato</h3>
              <ul className={styles.footerContactList}>
                <li>
                  <FaWhatsapp size={18} />
                  <span>(41) 99556-4466</span>
                </li>
                <li>
                  <MdEmail size={18} />
                  <span>contato@teiloradv.com.br</span>
                </li>
                <li>
                  <MdLocationOn size={18} />
                  <span>Rua Lodovico Geronazzo, 240</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.footerSocial}>
            <a href="https://www.facebook.com/profile.php?id=100064185278911" aria-label="Facebook" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
              <MdFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/teiloradv/" aria-label="Instagram" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vanessa-let%C3%ADcia-teilor-3b521145" aria-label="LinkedIn" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={24} />
            </a>
            <a href={whatsappUrl} aria-label="WhatsApp" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} />
            </a>
          </div>
          
          <div className={styles.footerCopyright}>
            <p>&copy; {new Date().getFullYear()} Teilor Advocacia. Todos os direitos reservados.</p>
            <p>OAB/PR 64863</p>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className={styles.scrollTopButton}
            aria-label="Voltar ao topo"
          >
            <MdOutlineArrowUpward size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;