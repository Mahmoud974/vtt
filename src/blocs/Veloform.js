import React from "react";
import Formulaire from "../components/Formulaire";

const Veloform = () => {
  let ok = false;
  return (
    <div className="container my-5">
      <div className="row  ">
        <div className="col d-flex justify-content-center">
          <img src="./img/biking.png" alt="faire du velo" />
        </div>

        <div className="col d-flex justify-content-center">
          <Formulaire
            ok={ok}
            title="subscribe to our newsletter
         and find out the dates, awards and
         modalities of the great race."
          />
        </div>
      </div>
    </div>
  );
};

export default Veloform;
