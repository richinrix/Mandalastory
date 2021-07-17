import React from "react";
export default function Auth(props) {
  const handler = () => {
    props.toggleAuth();
  };
  return (
    <div>
      {props.auth && (
        <button
          className="signout-btn bg-brand-dark hover:bg-brand-pink1 text-brand-pink1 hover:text-brand-dark  rounded px-5 py-2 float-right m-3"
          onClick={handler}
        >
          Sign Out
        </button>
      )}
    </div>
  );
}
