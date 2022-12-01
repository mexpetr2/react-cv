import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Paris</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0695648847">
                <span
                  className="clickInput"
                  onClick={() => {
                    toast("✅ Téléphone copié !");
                  }}
                >
                  06 95 64 88 47
                </span>
              </CopyToClipboard>
            </li>

            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="clem8260@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => toast("✅ E-mail copié !")}
                >
                  Mon mail
                </span>
              </CopyToClipboard>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/cl%C3%A9ment-ferreira-436944217/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/mexpetr2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};
<script></script>;
export default Contact;
