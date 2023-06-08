import React, { useState } from "react";
import SuscribedWindow from "./suscribedWindow";
import list from "../images/icon-list.svg";
// import FormAction from "./FormAction";
import mainIcon from "../images/illustration-sign-up-desktop.svg";
const FormAction = () => {
  const [email, setTextdata] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const handleData = (e) => setTextdata(e.target.value);
  console.log(email);
  const pageRender = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    if (isValidEmail) {
      setIsSubmit(true);
    }
  };
  return (
    <>
      {isSubmit ? (
        <SuscribedWindow email={email} />
      ) : (
        <div className="main-container">
          <div className="form-container">
            <h1 className="main-head">Stay updated!</h1>
            <p>Join 60,000+ product managers recieving monthly updates on:</p>
            <div className="listed-content">
              <div className="listed-content-inner">
                <img src={list} alt=" icon" />
                <p className="listed-content-text">
                  {" "}
                  product discovery and building waht matters
                </p>
              </div>
              <div className="listed-content-inner">
                <img src={list} alt=" icon" />
                <p className="listed-content-text">
                  {" "}
                  measuring to ensure updates are sucess
                </p>
              </div>
              <div className="listed-content-inner">
                <img src={list} alt=" icon" />
                <p className="listed-content-text"> and much more</p>
              </div>
              <div className="form-container">
                <form className="main-form" onSubmit={pageRender}>
                  <h3>Email address</h3>
                  {!isValid && <span>Valid email required</span>}
                  <input
                    type="text"
                    value={email}
                    placeholder="email@company.com"
                    onChange={handleData}
                  />
                  <button className="form-button">
                    Suscribe to monthly newsletter
                  </button>
                </form>
              </div>
              {/* formdata */}
            </div>
          </div>
          <div className="right-image">
            <img src={mainIcon} alt="mainIcon  " />
          </div>
        </div>
      )}
    </>
  );
};
export default FormAction;
