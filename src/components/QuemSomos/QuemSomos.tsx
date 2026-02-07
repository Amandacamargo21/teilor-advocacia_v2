import React from "react";
import { motion } from "framer-motion";
import styles from "./QuemSomos.module.scss";
import {
  MdAccessTimeFilled,
  MdSupportAgent,
  MdVerified,
  MdWhatsapp,
} from "react-icons/md";
import equipeImg from "@/assets/images/advs.svg";
import larissaImg from "@/assets/images/larissa.svg";
import vanessaImg from "@/assets/images/vanessa.svg";

const QuemSomos: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    `Olá, gostaria de saber mais sobre seus serviços de assessoria jurídica.`
  );
  const whatsappUrl = `https://wa.me/554195564466?text=${whatsappMessage}`;

  const valores = [
    {
      icon: <MdAccessTimeFilled size={32} />,
      title: "Compromisso",
      description:
        "Nossa equipe trabalha incansavelmente para defender seus direitos com dedicação e comprometimento.",
    },
    {
      icon: <MdSupportAgent size={32} />,
      title: "Atendimento Personalizado",
      description:
        "Cada caso é único. Oferecemos atenção individualizada para entender suas necessidades específicas.",
    },
    {
      icon: <MdVerified size={32} />,
      title: "Excelência",
      description:
        "Buscamos continuamente aprimorar nossos conhecimentos para oferecer o melhor serviço jurídico.",
    },
  ];

  return (
    <section id="sobre" className={styles.quemSomosContainer}>
      <div className={styles.quemSomosContent}>
        <motion.div
          className={styles.quemSomosInfo}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.quemSomosSubtitle}>Nosso Escritório</h3>
          <h2 className={styles.quemSomosTitle}>
            Mais de uma década de experiência jurídica
          </h2>
          <p className={styles.quemSomosText}>
            A Teilor Advocacia nasceu do compromisso com a justiça e a defesa
            dos direitos de nossos clientes. Fundada há mais de 10 anos, nossa
            equipe é formada por profissionais especializados nas áreas de
            Direito do Trabalho, Civil, Previdenciário, do Consumidor e da
            Pessoa com Deficiência.
          </p>
          <p className={styles.quemSomosText}>
            Acreditamos que o Direito deve ser acessível a todos. Por isso,
            adotamos uma abordagem humanizada, onde cada cliente é atendido com
            respeito e dedicação, e cada caso é tratado com a importância que
            merece.
          </p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quemSomosButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contate nossa equipe
          </motion.a>
        </motion.div>

        <motion.div
          className={styles.quemSomosImage}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageBorder}></div>
          <img src={equipeImg} alt="Equipe Teilor Advocacia" />
        </motion.div>
      </div>

      <div id="equipe" className={styles.equipesContainer}>
        <h3 className={styles.equipesTitle}>Corpo jurídico especializado</h3>

        <div className={styles.advogados}>
          <motion.div
            className={styles.advogadoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.advogadoImagem}>
              <img src={vanessaImg} alt="Vanessa Letícia Teilor" />
            </div>
            <div className={styles.advogadoInfo}>
              <div>
                <h4 className={styles.advogadoNome}>Vanessa Letícia Teilor</h4>
                <p className={styles.advogadoCargo}>Advogada Sócia Fundadora</p>
                <div className={styles.advogadoBio}>
                  <p>
                    Sócia fundadora do escritório Teilor Advocacia, Vanessa
                    Letícia Teilor construiu sua reputação em mais de 14 anos de
                    atuação profissional. Especialista em Direito e Processo do
                    Trabalho, também atua nas áreas Civil, Previdenciária, do
                    Consumidor e da Pessoa com Deficiência, com participação
                    relevante no Conselho Estadual da Pessoa com Deficiência. À
                    frente de uma equipe alinhada com seus valores, Vanessa
                    desenvolveu uma metodologia que une eficiência técnica e
                    sensibilidade humana. Seu trabalho é pautado por princípios
                    éticos, visão estratégica e profundo conhecimento jurídico,
                    sempre buscando soluções personalizadas que façam diferença
                    real na vida de seus clientes. Para Vanessa, o Direito é um
                    instrumento de transformação social e promoção da dignidade
                    humana.
                  </p>
                </div>
              </div>
              <div className={styles.advogadoContato}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contatoLink}
                >
                  <MdWhatsapp size={18} />
                  <span>Falar agora</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.advogadoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.advogadoImagem}>
              <img src={larissaImg} alt="Larissa Cristina Teilor" />
            </div>
            <div className={styles.advogadoInfo}>
              <div>
                <h4 className={styles.advogadoNome}>Larissa Cristina Teilor</h4>
                <p className={styles.advogadoCargo}>Advogada</p>
                <div className={styles.advogadoBio}>
                  <p>
                    Advogada com vocação para o atendimento
                    humanizado, Larissa Cristina Teilor atua com dedicação nas
                    áreas de Direito da Pessoa com Deficiência, Direito de
                    Família e Direito Previdenciário. Com sensibilidade e
                    conhecimento técnico, trabalha para garantir que todos
                    tenham acesso à justiça e seus direitos respeitados. No
                    Direito de Família, orienta seus clientes em momentos
                    delicados como divórcios e questões de guarda, priorizando
                    soluções que preservem os laços afetivos. Na área
                    previdenciária, assegura o acesso a benefícios e
                    aposentadorias com atenção aos detalhes. Sua abordagem
                    combina escuta ativa e compromisso com a transformação
                    social, tratando cada processo como uma oportunidade de
                    promover dignidade e justiça.
                  </p>
                </div>
              </div>
              <div className={styles.advogadoContato}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contatoLink}
                >
                  <MdWhatsapp size={18} />
                  <span>Falar agora</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.valoresContainer}>
        <h3 className={styles.valoresTitle}>Princípios que nos guiam</h3>

        <div className={styles.valoresGrid}>
          {valores.map((valor, index) => (
            <motion.div
              key={index}
              className={styles.valorCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <div className={styles.valorIcon}>{valor.icon}</div>
              <h4 className={styles.valorTitle}>{valor.title}</h4>
              <p className={styles.valorDescription}>{valor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
