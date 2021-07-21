import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Art1 from "../assets/art/mandala1.png";
import Art2 from "../assets/art/mandala2.png";

export default function Login(props) {
  // const admin = props.params.match;
  const userinfo = { username: "haripriya", password: "art@haripriya" };
  const [wrongMail, setWrongMail] = useState(false);
  const [email, setEmail] = useState();
  const [redirect, setRedirect] = useState(localStorage.getItem("redirect"));
  // const [password, setPassword] = useState();
  const validateEmail = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const loginHandler = (e) => {
    e.preventDefault();
    if (validateEmail.test(email)) {
      setWrongMail(false);
      localStorage.setItem("auth", true);
      setRedirect(true);
      // props.toggleAuth();
    } else {
      setWrongMail(true);
    }

    // if (username === userinfo.username && password === userinfo.password) {
    //   props.toggleAuth();
    //   return <Redirect to="/" />;
    // } else alert("Wrong username or password!");
  };

  return (
    <div className="loginScreen h-screen flex justify-center items-center">
      {redirect ? <Redirect to="/" /> : null}
      <img className=" fixed art1" src={Art1} alt="" />
      <img className=" fixed art2" src={Art2} alt="" />
      <form className="formContainer h-96 md:w-1/3 w-11/12 flex flex-col items-center justify-center rounded-xl">
        <div className="flex text-brand-dark items-center ">
          <div className="md:text-2xl text-xl ">Email</div>
          <input
            className=" text-center"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className=" text-xl font-semibold bg-brand-pink text-brand-dark rounded px-5 py-1 my-5 hover:bg-brand-dark hover:text-brand-pink"
          onClick={(e) => loginHandler(e)}
        >
          Login
        </button>
        {wrongMail && (
          <div className="text-red-500 font-semibold font-mono">
            Enter a correct email!
          </div>
        )}
      </form>
    </div>
  );
}
