import React from "react";
import { motion } from "framer-motion";
import styles from "./Endereco.module.scss";
import { MdLocationOn, MdEmail, MdAccessTime, MdWhatsapp } from "react-icons/md";

interface ContatoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
  delay: number;
}

const ContatoItem: React.FC<ContatoItemProps> = ({ icon, title, content, delay }) => {
  return (
    <motion.div 
      className={styles.contatoItem}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={styles.contatoIcon}>{icon}</div>
      <div className={styles.contatoInfo}>
        <h4 className={styles.contatoTitle}>{title}</h4>
        {typeof content === 'string' ? (
          <p className={styles.contatoContent}>{content}</p>
        ) : (
          content
        )}
      </div>
    </motion.div>
  );
};

const Endereco: React.FC = () => {
  const whatsappNumber = "5511987654321"; // Substitua pelo número real
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta`;

  return (
    <section id="contato" className={styles.enderecoSection}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>Localização e Contato</h2>
        <div className={styles.titleDecoration}></div>
        <p className={styles.sectionDescription}>
          Estamos estrategicamente localizados para melhor atendê-lo
        </p>
      </motion.div>

      <div className={styles.enderecoContainer}>
        <div className={styles.enderecoContent}>
          <motion.div 
            className={styles.enderecoInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.enderecoTitle}>Entre em Contato</h2>
            <p className={styles.enderecoSubtitle}>
              Estamos à disposição para ajudar você com suas questões jurídicas
            </p>
            
            <div className={styles.contatoList}>
              <ContatoItem 
                icon={<MdLocationOn size={24} />}
                title="Endereço"
                content={
                  <>
                    <p className={styles.contatoContent}>Rua Lodovico Geronazzo, 240 - sobreloja</p>
                    <p className={styles.contatoContent}>Boa Vista, Curitiba - PR, 82560-040</p>
                  </>
                }
                delay={0.1}
              />
              
              <ContatoItem 
                icon={<MdWhatsapp size={24} />}
                title="WhatsApp"
                content="(41) 99556-4466"
                delay={0.3}
              />
              
              <ContatoItem 
                icon={<MdEmail size={24} />}
                title="E-mail"
                content="contato@teiloradvocacia.com.br"
                delay={0.4}
              />
              
              <ContatoItem 
                icon={<MdAccessTime size={24} />}
                title="Horário de Atendimento"
                content={
                  <>
                    <p className={styles.contatoContent}>Segunda a Sexta: 9h às 18h</p>
                  </>
                }
                delay={0.5}
              />
            </div>
            
            <motion.a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.agendarButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdWhatsapp size={20} />
              Agendar Consulta via WhatsApp
            </motion.a>
          </motion.div>
          
          <motion.div 
            className={styles.enderecoMapa}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.mapaIframe}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.6629400323764!2d-49.26191692378767!3d-25.373807777708237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce713c2abb9ef%3A0x76d3f427a333c5e8!2sR.%20Lodovico%20Geronazzo%2C%20240%20-%20Boa%20Vista%2C%20Curitiba%20-%20PR%2C%2082560-040!5e0!3m2!1spt-BR!2sbr!4v1710528216372!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do escritório"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Endereco;