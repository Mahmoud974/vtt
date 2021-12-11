import React from "react";

const Navigation = () => {
  return (
    <div className="container">
      <ul className="text-uppercase fw-bold d-flex justify-content-between align-items-center ">
        <li>
          <a href="/acceuil" className="text-decoration-none text-light ">
            <img src="./img/race22.png" alt="participate 2022" />
          </a>{" "}
        </li>
        <li>
          <a href="/ok" className="text-decoration-none text-light ">
            Events
          </a>{" "}
        </li>
        <li>
          <a href="/si" className="text-decoration-none text-light ">
            Races
          </a>{" "}
        </li>
        <li>
          <a href="/okok" className="text-decoration-none text-light ">
            Gallery
          </a>{" "}
        </li>
        <li>
          <a href="/iii" className="text-decoration-none text-light ">
            Sponsors
          </a>{" "}
        </li>
        <li>
          <a href="/iihjij" className="text-decoration-none text-light ">
            testimonials
          </a>{" "}
        </li>
        <li>
          <a href="/yy" className="text-decoration-none text-light ">
            contact us
          </a>{" "}
        </li>
        <li>
          <a href="/tt" className="text-decoration-none text-light ">
            <button className="btn btn-outline-light">REGISTER</button>
          </a>{" "}
        </li>
      </ul>

      <div
        className="rec bg-light "
        style={{ width: "auto", height: "3px", background: "#fff" }}
      ></div>
    </div>
  );
};

export default Navigation;
