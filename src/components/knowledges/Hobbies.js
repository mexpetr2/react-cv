import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fa-solid fa-basketball"></i>
          <span>Basketball</span>
        </li>
        <li className="hobby">
          <i className="fa-brands fa-bitcoin"></i>
          <span>Crypto-monnaies</span>
        </li>

        <li className="hobby">
          <i className="fa-solid fa-dumbbell"></i>
          <span>Musculation</span>
        </li>

        <li className="hobby">
          <i className="fa-solid fa-gamepad"></i>
          <span>Jeux video</span>
        </li>

        <li className="hobby">
          <i className="fa-solid fa-chess-king"></i>
          <span>Echec</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
