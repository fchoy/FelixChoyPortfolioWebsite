import React, { useEffect } from "react";
import Header from "../Home/Components/Header";
import PortfolioCardGroup from "./Components/PortfolioCardGroup";

const Portfolio = () => {

  useEffect(() => {
    document.title = "Felix Choy's Portfolio Website | Portfolio"
  }, []);

  return (
    <>
      <Header/>
      <PortfolioCardGroup/>
    </>
  );
};

export default Portfolio;
