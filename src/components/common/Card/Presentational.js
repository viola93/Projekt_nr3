import React from "react";
import "./Styles.scss";

const Card = ({ children, customClassName }) => {
  return (
    <div className={`card-container ${customClassName || ""}`}>{children}</div>
  );
};

export default Card;
