import React, { useContext } from "react";
import Navigation from "../components/Navigation";
import Formulaire from "../components/Formulaire";
import Logo from "../components/Logo";

const Acceuil = () => {
  let ok = true;

  // const { bgYellow } = useContext(Context);
  return (
    <div className="container ">
      <div className="row d-flex ">
        <div className="">
          <Logo />
          <Navigation />

          <div className="row myBikeText">
            <div style={{ position: "relative", zIndex: 6 }} className="col">
              <h2 className="text-uppercase text-light mt-5">
                What makes mountain <br />
                biking different?
              </h2>
              <div className="w-auto text-light">
                <p className="py-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                  mollitia consequuntur veniam? Voluptatem ipsam consequuntur
                  consequatur, sed perspiciatis repellat maiores. Voluptatum,
                  iste quisquam distinctio ducimus tempore non inventore rem
                  similique quasi quos sed, in hic nesciunt
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
            </div>

            <div className="vttAcceuil col">
              <img
                src=" ./img/vtt.png"
                style={{
                  position: "relative",
                  zIndex: 4,
                  marginTop: "50px"
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
