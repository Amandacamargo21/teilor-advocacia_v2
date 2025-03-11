import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
// import AreasAtuacao from "../components/AreasAtuacao/AreasAtuacao";
// import Depoimentos from "../components/Depoimentos/Depoimentos";
// import QuemSomos from "../components/QuemSomos/QuemSomos";
// import Faq from "../components/Faq/Faq";
// import Endereco from "../components/Endereco/Endereco";
// import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      {/* <AreasAtuacao />
      <Depoimentos />
      <QuemSomos />
      <Faq />
      <Endereco /> */}
    </>
  );
};

export default Home;