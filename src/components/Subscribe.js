import React, { useState } from "react";
import MailIcon from "@material-ui/icons/MailOutlineRounded";
export default function Subscribe(props) {
  const toggleSubscribed = props.toggleSubscribed;
  const [email, setEmail] = useState();
  const toggleS = props.toggleS;
  const [submitStat, setSubmitStat] = useState(false);
  const [wrongMail, setWrongMail] = useState(false);
  const validateEmail = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const submitHandler = () => {
    if (validateEmail.test(email)) {
      setWrongMail(false);
      toggleSubscribed();
      setSubmitStat(true);
      setTimeout(() => toggleS(), 400);
    } else {
      setWrongMail(true);
    }
  };
  return (
    <div
      className="bg-gray-700 opacity-90 fixed h-screen w-screen blur-md flex items-center justify-center"
      style={{ zIndex: "9999999" }}
    >
      <div className="h-80 w-96 bg-brand-pink1 rounded  ">
        <div className="flex justify-center text-brand-dark items-center mt-10 mb-5">
          <MailIcon style={{ fontSize: "50px" }} />
        </div>
        <div className="flex flex-col items-center  ">
          <div className="md:text-md font-semibold text-md my-2">
            Enter your email to subscribe for new posts.{" "}
          </div>
          <input
            className=" text-center py-2"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {!submitStat ? (
            <button
              className="bg-brand-dark ring-2 ring-brand-dark hover:bg-brand-pink1 text-brand-pink1 hover:text-brand-dark p-2 rounded my-3"
              onClick={submitHandler}
            >
              Submit
            </button>
          ) : (
            <button
              className="bg-green-500 text-brand-pink1 p-2 rounded my-3"
              onClick={submitHandler}
            >
              Submitted
            </button>
          )}
          {wrongMail && (
            <div className="text-red-500 font-semibold font-mono">
              Enter a correct email!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
