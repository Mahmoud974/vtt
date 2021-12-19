import React from "react";
import Logo from "../components/Logo";

const WhatisM = () => {
  let what = "WHAT IS";
  return (
    <div className="container">
      <Logo what={what} />
      <div className="row">
        <div className="myParag d-flex">
          <p className=" text-center text-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            doloribus magni laboriosam dolor. Hic saepe debitis dolor placeat
            <br />
            <br />
            earum commodi! Quasi saepe voluptates tempora officiis qui a sit
            perferendis facilis aperiam omnis eveniet placeat recusandae soluta
            officia perspiciatis eius, iusto asperiores corrupti nulla, nostrum
            harum accusamus voluptatibus voluptatum. Repellendus, praesentium.
          </p>

          <p className="text-center text-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            doloribus magni laboriosam dolor. Hic saepe debitis dolor placeat
            earum commodi! Quasi saepe voluptates tempora officiis qui a sit
            <br />
            <br />
            perferendis facilis aperiam omnis eveniet placeat recusandae soluta
            officia perspiciatis eius, iusto asperiores corrupti nulla, nostrum
            harum accusamus voluptatibus voluptatum. Repellendus, praesentium.
          </p>
        </div>
        <div className="row text-center ">
          <h4 className="bike">Bike Lovers</h4>
          <div className="d-flex justify-content-center mx-auto">
            <div className="d-flex flex-column text-start justify-content-center">
              <h2 className="text-uppercase text-light text-start">
                All cycling
                <br /> equipment with
              </h2>
              <p
                className="outlineM text-light display-2"
                style={{ marginBottom: 0 }}
              >
                20%
              </p>
              <p className="text-light fw-bold">DISCOUNT</p>
            </div>
            <div className="vttAcceuil">
              <img src="./img/geantVtt.png" alt="faire du velo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisM;
