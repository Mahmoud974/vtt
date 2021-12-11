import React from "react";
import Navigation from "../components/Navigation";
import Formulaire from "../components/Formulaire";
import Logo from "../components/Logo";

const Acceuil = () => {
  let ok = true;
  return (
    <div className="container ">
      <div className="d-flex ">
        <div className="">
          <Logo />
          <Navigation />

          <div className="myBikeText">
            <h2 className="text-uppercase text-light mt-5">
              What makes mountain <br />
              biking different?
            </h2>
            <div className="w-50 text-light">
              <p className="pt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                mollitia consequuntur veniam? Voluptatem ipsam consequuntur
                consequatur, sed perspiciatis repellat maiores. Voluptatum, iste
                quisquam distinctio ducimus tempore non inventore rem similique
                quasi quos sed, in hic nesciunt
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates alias, provident commodi eos voluptas doloribus non
                enim sint autem tenetur.
              </p>
            </div>
            <div className="py-5">
              <h2 className="display-1 fw-bolder text-light ">
                VERSATILE SPORT
              </h2>
            </div>
            <div className="">
              <Formulaire ok={ok} />
            </div>

            {/* <img
              src=" ./img/vtt.png"
              style={{ position: "absolute", zIndex: 2, marginTop: "-990px" }}
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
