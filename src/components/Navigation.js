import React from "react";

const Navigation = () => {
  const small = 576;
  const medium = 768;
  const large = 992;
  const xl = 1200;
  const xxl = 1400;
  const myWidth = window.outerWidth;
  console.log(window.outerWidth);

  if (myWidth <= small) {
    return (
      <div>
        <nav className="navbar ">
          <div>
            <a href="/acceuil" className="text-decoration-none text-light ">
              <img src="./img/race22.png" alt="participate 2022" />
            </a>
          </div>
          <div className="container-fluid">
            <button
              className="navbar-toggler bg-light ms-auto"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light shadow-3 p-4">
            <button className="btn btn-link btn-block border-bottom m-0">
              Link 1
            </button>
            <button className="btn btn-link btn-block border-bottom m-0">
              Link 2
            </button>
            <button className="btn btn-link btn-block m-0">Link 3</button>
          </div>
        </div>
        <div
          className="rec bg-light mt-5 "
          style={{ width: "auto", height: "3px", background: "#fff" }}
        ></div>
      </div>
    );
  } else {
    return (
      <div className="myNav container ">
        <ul
          className=" text-uppercase fw-bold d-flex justify-content-between align-items-center  "
          style={{ paddingLeft: 0 }}
        >
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
          {/* <li>
          <a href="/tt" className="text-decoration-none text-light ">
            <button className="btn btn-outline-light">REGISTER</button>
          </a>{" "}
        </li> */}
        </ul>

        <div
          className="rec bg-light "
          style={{ width: "auto", height: "3px", background: "#fff" }}
        ></div>
      </div>
    );
  }
};

export default Navigation;
