import React from "react";

const LogoCenter = () => {
  const textCenter = "mx-auto text-light text-center text-uppercase";
  return (
    <div className={textCenter}>
      <img
        src="./img/race22.png"
        alt="participate 2022"
        style={{ height: "10%", width: "10%" }}
        className="m-3"
      />
      <p className="">
        register for the great race
        <br /> and don't lose your place
      </p>
    </div>
  );
};

export default LogoCenter;
