import React from "react";
import Logo from "../components/Logo";
import Formulaire from "../components/Formulaire";

const Footer = () => {
  return (
    <div className="container">
      <div
        className="rec bg-light my-5"
        style={{ width: "auto", height: "3px", background: "#fff" }}
      ></div>
      <div className="d-flex row">
        <div>
          <ul className="d-flex justify-content-center">
            <li>
              {" "}
              <div>
                <ul className="list-group text-light text-decoration-none">
                  <li>
                    <a href="acceuil">EVENTS</a>
                  </li>
                  <li>
                    <a href="acceuil">RACES</a>
                  </li>
                  <li>
                    <a href="acceuil">SPONSORS</a>
                  </li>
                  <li>
                    <a href="acceuil">TESTIMONIALS</a>
                  </li>
                  <li>
                    <a href="acceuil">CONTACT US</a>
                  </li>
                </ul>
              </div>
              <li>
                <div className="d-flex flex-column text-center">
                  <Logo />
                  <a
                    href="/acceuil"
                    className="text-decoration-none text-light "
                  >
                    <img src="./img/race22.png" alt="participate 2022" />
                  </a>{" "}
                </div>
              </li>
            </li>
            <li>
              <Formulaire />
            </li>
          </ul>
        </div>
      </div>
      <div
        className="rec bg-light my-5"
        style={{ width: "auto", height: "3px", background: "#fff" }}
      ></div>
    </div>
  );
};

export default Footer;
