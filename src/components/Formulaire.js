import React, { useEffect, useState } from "react";

const Formulaire = props => {
  let baliseI = document.querySelector("i");
  const [direction, setDirection] = useState("down");
  const [hiddenForm, setHiddenForm] = useState("d-none");
  const [arrow, setArrow] = useState(
    "arrow fas fa-chevron-down text-light display-6 my-2 d-flex justify-content-end"
  );
  const [hiddenAgree, sethiddenAgree] = useState(true);

  const afficheFormulaire = () => {
    setHiddenForm("d-block");
    setArrow(
      "arrow fas fa-chevron-up text-light display-6 my-2 d-flex justify-content-end"
    );
    console.log("Function correctement");
  };

  if (props.ok) {
    return (
      <div className="w-50 myForm ">
        <h2 className="text-uppercase text-light">
          register and <br /> participate
          <br /> in the great mountain
          <br /> bike race 2022{" "}
        </h2>
        <i className={arrow} onClick={afficheFormulaire}></i>

        <div
          className="rec bg-light mb-5"
          style={{ width: "auto", height: "3px", background: "#fff" }}
        ></div>
        <form>
          <div className={hiddenForm}>
            <div className="my-3 ">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="CATEGORY"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="NAME"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="EMAIL"
              />
            </div>

            <button
              type="submit"
              className="btn btn-light text-dark text-uppercase fw-bold w-100 my-3"
            >
              next step
            </button>
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sed
              laboriosam. Asperiores, expedita tenetur. Eligendi laborum natus
              numquam fugiat doloribus sit autem quae est quidem?
            </p>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="  myForm  ">
        <h2 className="text-uppercase text-light text-right">
          subscribe to our newsletter
          <br /> and find out the dates, awards and
          <br /> modalities of the great race.
        </h2>
        <form className="w-50">
          <div className="my-3  ">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="EMAIL"
            />
          </div>

          <button
            type="submit"
            className="btn btn-light text-dark text-uppercase fw-bold w-100 my-1"
          >
            sign up
          </button>
          <p className="rightForm  text-light text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sed
            laboriosam. Asperiores, expedita tenetur. Eligendi laborum natus
            numquam fugiat doloribus sit autem quae est quidem?
          </p>
        </form>
      </div>
    );
  }
};

export default Formulaire;
