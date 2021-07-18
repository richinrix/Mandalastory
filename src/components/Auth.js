import React from "react";
export default function Auth(props) {
  const handler = () => {
    props.toggleAuth();
  };
  return (
    <div>
      {props.auth && (
        <button
          className="signout-btn fixed right-2 bg-brand-dark hover:bg-brand-pink1 text-brand-pink1 hover:text-brand-dark  rounded px-5 py-2  m-3 "
          style={{ zIndex: "1000000" }}
          onClick={handler}
        >
          Sign Out
        </button>
      )}
    </div>
  );
}
