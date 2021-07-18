import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Art1 from "../assets/art/mandala1.png";
import Art2 from "../assets/art/mandala2.png";

export default function Login(props) {
  const userinfo = { username: "poly", password: "poly" };
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const loginHandler = () => {
    if (username === userinfo.username && password === userinfo.password) {
      props.toggleAuth();
      return <Redirect to="/" />;
    } else alert("Wrong username or password!");
  };

  return (
    <div className="loginScreen h-screen flex justify-center items-center">
      <img className=" fixed art1" src={Art1} alt="" />
      <img className=" fixed art2" src={Art2} alt="" />
      <form className="formContainer h-96 md:w-1/3 w-11/12 flex flex-col items-center justify-center rounded-xl">
        <div className="flex text-brand-dark items-center ">
          <div className="md:text-2xl text-xl ">Username</div>
          <input
            className=" text-center"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex  text-brand-dark items-center ">
          <div className="md:text-2xl text-xl ">Password </div>
          <input
            className=" text-center "
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className=" text-xl font-semibold bg-brand-pink text-brand-dark rounded px-5 py-1 my-5 hover:bg-brand-dark hover:text-brand-pink"
          onClick={loginHandler}
        >
          Login
        </button>
      </form>
    </div>
  );
}
