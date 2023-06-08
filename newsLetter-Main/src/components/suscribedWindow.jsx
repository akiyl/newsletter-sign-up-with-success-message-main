import React, { useState } from "react";
import FormAction from "./FormAction";
import success from "../images/icon-success.svg";
const SuscribedWindow = ({ email }) => {
  const [isDismiss, setIsDismiss] = useState(false);

  const handleDismiss = () => {
    setIsDismiss(true);
  };
  return (
    <>
      {isDismiss ? (
        <FormAction />
      ) : (
        <>
          {/* <div className="background"></div> */}
          <div className="main-window-container">
            <div className="icon">
              <img src={success} alt="sucess" />
            </div>
            <h1 className="main-window-head">Thanks for subscribing!</h1>
            <p className="image">
              A confirmation email has been seen to{" "}
              <span className="email-main"> {email}</span>. Please open it and
              click the button inside to confirm your subscription
            </p>
            <button className="dismiss" onClick={handleDismiss}>
              Dismiss message
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default SuscribedWindow;
