import React from "react";

const Logo = props => {
  return (
    <div className="text-center">
      <p
        className="text-light  mt-5"
        style={{ fontSize: "22px", marginBottom: 0 }}
      >
        {props.what}
      </p>
      <h4 className="text-uppercase mb-5 display-5 fw-bolder">
        MOUNTAIN <br />
        <span>biking</span>
      </h4>
    </div>
  );
};

export default Logo;
