import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./Section.module.scss";

interface SectionProps {
  children: ReactNode;
  variant?: "light" | "dark" | "primary";
  id?: string;
  title?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  variant = "light",
  id,
  title,
  className = "",
}) => {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${styles[variant]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionContainer}>
        {title && (
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </motion.section>
  );
};

export default Section;