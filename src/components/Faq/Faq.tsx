import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Faq.module.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdWhatsapp
} from "react-icons/md";

interface FaqItemProps {
  pergunta: string;
  resposta: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({
  pergunta,
  resposta,
  isOpen,
  onClick,
  index,
}) => {
  return (
    <motion.div
      className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className={styles.faqQuestion}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{pergunta}</span>
        {isOpen ? (
          <MdOutlineKeyboardArrowUp size={24} />
        ) : (
          <MdOutlineKeyboardArrowDown size={24} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.faqAnswer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{resposta}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq: React.FC = () => {
  const faqs = [
    {
      pergunta: "Como funciona o processo de consulta inicial?",
      resposta:
        "A consulta inicial é realizada de forma presencial ou online, conforme sua preferência. Nesse primeiro contato, você apresentará seu caso, e nossos advogados avaliarão a situação para propor a melhor estratégia jurídica. Esse atendimento inicial tem duração média de 30 a 60 minutos e não implica em compromisso de contratação.",
    },
    {
      pergunta: "Quais documentos devo levar na primeira consulta?",
      resposta:
        "Para a primeira consulta, é recomendável trazer documentos relacionados ao caso, como contratos, notificações, comprovantes, laudos médicos (se aplicável), documentos pessoais (RG, CPF) e quaisquer evidências relevantes que possam auxiliar na análise inicial. Caso não tenha certeza sobre quais documentos são necessários, entre em contato conosco antes da consulta.",
    },
    {
      pergunta: "Quanto tempo leva para resolver um processo trabalhista?",
      resposta:
        "O tempo de resolução de um processo trabalhista varia conforme a complexidade do caso, a demanda do tribunal e a possibilidade de acordo. Em média, processos trabalhistas podem levar de 1 a 3 anos para serem concluídos. No entanto, muitos casos são resolvidos em menos tempo, especialmente quando há possibilidade de acordo entre as partes.",
    },
    {
      pergunta: "Como são cobrados os honorários advocatícios?",
      resposta:
        "Os honorários podem ser estabelecidos de diferentes formas, dependendo do tipo de caso. Trabalhamos com honorários fixos, parcelados ou baseados em percentual do êxito (honorários de êxito). Na primeira consulta, após análise do seu caso, apresentaremos uma proposta transparente de honorários, formalizados em contrato, sem custos surpresa.",
    },
    {
      pergunta: "O escritório atende em quais regiões?",
      resposta:
        "Nosso escritório está localizado em Curitiba no bairro Boa Vista, atendemos em toda a região metropolitana presencialmente e também oferecemos atendimento remoto para clientes de outras localidades. Para casos específicos, podemos realizar deslocamento para outras cidades e estados. Entre em contato conosco para verificar a disponibilidade para sua região.",
    },
    {
      pergunta:
        "Quais são os critérios para aposentadoria por tempo de contribuição?",
      resposta:
        "Após a reforma da Previdência de 2019, os critérios para aposentadoria por tempo de contribuição foram alterados. Atualmente, é necessário cumprir uma idade mínima (65 anos para homens e 62 para mulheres) além do tempo de contribuição. Existem regras de transição para quem já estava contribuindo antes da reforma. Em nossa consultoria previdenciária, analisamos seu caso específico para identificar a melhor estratégia para sua aposentadoria.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(`Olá, gostaria de saber mais sobre seus serviços de assessoria jurídica.`);
  const whatsappUrl = `https://wa.me/554195564466?text=${whatsappMessage}`;


  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqHeader}>
        <h2 className={styles.faqTitle}>Perguntas Frequentes</h2>
        <p className={styles.faqSubtitle}>
          Respostas para as dúvidas mais comuns sobre nossos serviços
        </p>
      </div>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            pergunta={faq.pergunta}
            resposta={faq.resposta}
            isOpen={openIndex === index}
            onClick={() => toggleItem(index)}
            index={index}
          />
        ))}
      </div>

      <div className={styles.faqFooter}>
        <p>Não encontrou sua dúvida aqui?</p>
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.faqButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Entre em contato via WhatsApp
          <MdWhatsapp size={18} style={{ marginLeft: "8px" }} />
        </motion.a>
      </div>
    </div>
  );
};

export default Faq;
