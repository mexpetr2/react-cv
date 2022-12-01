import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/reacticons.png" alt="profil-pic" />
          <h3>Clément FERREIRA</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/">
              <i className="fas fa-home navActive"></i>
              <span>Acceuil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/competences">
              <i className="fas fa-mountain navActive"></i>
              <span>Compétence</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <i className="fa-solid fa-address-book navActive"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/cl%C3%A9ment-ferreira-436944217/"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/mexpetr2"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Clément FERREIRA - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
