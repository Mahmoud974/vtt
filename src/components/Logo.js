import React from "react";

const Logo = props => {
  return (
    <div>
      <p className="text-light text-center mt-5" style={{ fontSize: "22px" }}>
        {props.what}
      </p>
      <h4 className="text-uppercase text-center display-5 fw-bolder">
        MOUNTAIN <br />
        <span className="">biking</span>
      </h4>
    </div>
  );
};

export default Logo;
