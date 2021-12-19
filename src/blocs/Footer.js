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
      <div className="d-flex row align-items-center">
        <div
          className="myFooter d-flex justify-content-center"
          style={{ padding: 0 }}
        >
          <div className="col">
            <ul className="list-group text-light text-decoration-none ">
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

          <div className="col">
            <Logo />
            <a href="/acceuil" className="text-decoration-none text-light ">
              <img src="./img/race22.png" alt="participate 2022" />
            </a>{" "}
          </div>

          <div className="col">
            <Formulaire title="subscribe to our newsletter." />
          </div>
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
