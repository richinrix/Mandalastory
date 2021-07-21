import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import AdminPage from "./Admin";
export default function Auth(props) {
  const [redirect, setRedirect] = useState(false);
  const [redirectAdmin, setRedirectAdmin] = useState(false);
  const redirectHandler = (e) => {
    e.preventDefault();
    setRedirectAdmin(true);
  };
  const handler = () => {
    localStorage.setItem("auth", false);
    setRedirect(true);
    // props.toggleAuth();
  };
  return (
    <div>
      {redirect && <Redirect to="/login" />}
      {redirectAdmin && <Redirect to="/admin" />}
      {props.auth && (
        <button
          className="signout-btn fixed ring-2 ring-brand-dark right-2 bg-brand-dark hover:bg-brand-pink1 text-brand-pink1 hover:text-brand-dark  rounded px-5 py-2  m-3 "
          style={{ zIndex: "1000000" }}
          onClick={handler}
        >
          Sign Out
        </button>
      )}
      {props.auth && (
        <a
          className="admin-btn fixed ring-2 ring-brand-dark right-32 bg-brand-dark hover:bg-brand-pink1 text-brand-pink1 hover:text-brand-dark  rounded px-5 py-2  m-3 "
          style={{ zIndex: "1000000" }}
          href="/admin"
          onClick={(e) => redirectHandler(e)}
        >
          Admin Access
        </a>
      )}
    </div>
  );
}
