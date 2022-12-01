import React from "react";
import Navigation from "../components/Navigation";

const Homes = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Clément FERREIRA</h1>
          <h2>Développeur react.JS junior</h2>
          <div className="pdf">
            <a href="./media/CV.PDF" target="blank">
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
