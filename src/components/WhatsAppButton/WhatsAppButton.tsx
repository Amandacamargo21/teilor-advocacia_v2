import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppButton.module.scss";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Olá! Gostaria de agendar uma consulta."
}) => {
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return (
    <motion.a
      href={whatsappUrl}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entre em contato pelo WhatsApp"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <FaWhatsapp size={24} />
      <span className={styles.tooltip}>Fale conosco</span>
    </motion.a>
  );
};

export default WhatsAppButton;