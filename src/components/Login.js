import React, { useState } from "react";
import { Redirect } from "react-router-dom";
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
      <form className="formContainer h-96 w-1/3 flex flex-col items-center justify-center rounded-xl">
        <div className="flex text-brand-dark items-center ">
          <div className="text-2xl ">Username</div>
          <input
            className=" text-center"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex  text-brand-dark items-center ">
          <div className="text-2xl">Password </div>
          <input
            className=" text-center"
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
