import React from "react";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import AreasAtuacao from "../../components/AreasAtuacao/AreasAtuacao";
import Depoimentos from "../../components/Depoimentos/Depoimentos";
import QuemSomos from "../../components/QuemSomos/QuemSomos";
import Faq from "../../components/Faq/Faq";
import Endereco from "../../components/Endereco/Endereco";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <div id="home">
        <Hero />
      </div>
      
      <Section id="areas-atuacao" variant="light">
        <AreasAtuacao />
      </Section>
      
      <Section id="depoimentos"  variant="dark">
        <Depoimentos />
      </Section>
      
      <Section id="quem-somos"  variant="light">
        <QuemSomos />
      </Section>
      
      <Section id="faq" variant="light">
        <Faq />
      </Section>
      
      <Section id="contato" variant="dark">
        <Endereco />
      </Section>
      
      <Footer />
    </>
  );
};

export default Home;