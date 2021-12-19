import React from "react";

const Character = () => {
  return (
    <div className="myCharacter text-center">
      <img src=" ./img/leo.png" className="leonard img-responsive" alt="" />
      <div className="leoBlock d-flex mx-auto justify-content-center">
        <h2
          className="outlineM display-2  fw-bold text-light "
          style={{ position: "relative", marginTop: "-80px" }}
        >
          LEONARD <br />
          <span className="">STURART</span>
        </h2>
        <h3 className=" text-start text-light align-self-end py-3 px-2">
          WINNER OF <br /> 4 CONSECUTIVE RACES
        </h3>
      </div>

      <div>
        <button className="px-5 fw-bold rounded-1 border ">
          {" "}
          LEARN MORE ABOUT HIS EXPERIENCE
        </button>
      </div>
    </div>
  );
};

export default Character;
