import React from "react";
import { motion } from "framer-motion";
import styles from "./AreasAtuacao.module.scss";
import { MdWork, MdHealthAndSafety, MdFamilyRestroom, MdGavel, MdAccessible, MdShoppingCart, MdWhatsapp } from "react-icons/md";

interface AreaCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const AreaCard: React.FC<AreaCardProps> = ({ icon, title, description, delay }) => {

  const whatsappMessage = encodeURIComponent(`Olá, gostaria de saber mais sobre seus serviços de assessoria jurídica em ${title}`);
  const whatsappUrl = `https://wa.me/554195564466?text=${whatsappMessage}`;

  return (
    <motion.div 
      className={styles.areaCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    >
      <div className={styles.areaIcon}>{icon}</div>
      <h3 className={styles.areaTitle}>{title}</h3>
      <p className={styles.areaDescription}>{description}</p>
      <motion.a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.areaButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Saiba mais
        <MdWhatsapp size={18} style={{ marginLeft: '8px' }} />
      </motion.a>
    </motion.div>
  );
};

const AreasAtuacao: React.FC = () => {
  const areas = [
    {
      icon: <MdWork size={40} />,
      title: "Direito do Trabalho",
      description: "Atuamos na defesa dos direitos dos trabalhadores, garantindo que todos os benefícios e proteções legais sejam respeitados pelos empregadores."
    },
    {
      icon: <MdGavel size={40} />,
      title: "Direito Civil",
      description: "Assessoria jurídica em contratos, responsabilidade civil, direito de família e sucessões, buscando soluções eficientes para questões civis."
    },
    {
      icon: <MdHealthAndSafety size={40} />,
      title: "Direito Previdenciário",
      description: "Garantimos seus direitos previdenciários com expertise em aposentadorias, pensões, auxílios e benefícios do INSS."
    },
    {
      icon: <MdShoppingCart size={40} />,
      title: "Direito do Consumidor",
      description: "Protegemos seus direitos nas relações de consumo, combatendo práticas abusivas e buscando reparação para danos causados por empresas e fornecedores."
    },
    {
      icon: <MdFamilyRestroom size={40} />,
      title: "Direito da Família",
      description: "Protegemos seus direitos nas relações de consumo, combatendo práticas abusivas e buscando reparação para danos causados."
    },
    {
      icon: <MdAccessible size={40} />,
      title: "Direito da Pessoa com Deficiência",
      description: "Especialistas na defesa dos direitos e na inclusão social das pessoas com deficiência, garantindo acesso a benefícios e proteções legais."
    }
  ];

  return (
    <div className={styles.areasContainer}>
      <div className={styles.areasHeader}>
        <h2 className={styles.areasTitle}>Áreas de Atuação</h2>
        <p className={styles.areasSubtitle}>Conhecimento especializado a serviço da sua causa</p>
      </div>
      <div className={styles.areasGrid}>
        {areas.map((area, index) => (
          <AreaCard 
            key={index}
            icon={area.icon}
            title={area.title}
            description={area.description}
            delay={0.1 * (index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default AreasAtuacao;