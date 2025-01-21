import React from "react";
import "../styles/loader.css";
const Loader = () => {
  return (
    <div className="container">
      <div className="loader">
        <div className="crystal" />
        <div className="crystal" />
        <div className="crystal" />
        <div className="crystal" />
        <div className="crystal" />
        <div className="crystal" />
      </div>
    </div>
  );
};

export default Loader;
