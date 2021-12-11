import React from "react";
import Formulaire from "../components/Formulaire";

const Veloform = () => {
  let ok = false;
  return (
    <div className="container">
      <div className="d-flex justify-content-center  ">
        <div>
          <img src="./img/biking.png" alt="faire du velo" />
        </div>

        <div>
          <Formulaire ok={ok} />
        </div>
      </div>
    </div>
  );
};

export default Veloform;
