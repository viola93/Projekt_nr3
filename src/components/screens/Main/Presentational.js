import React, { useState } from "react";

import "./Styles.scss";
import Login from "./components/Login/Presentational";
import Register from "./components/Registration/Presentational";

const Main = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <div>
      {currentForm === "login" ? (
        <>
          {" "}
          <Login Loginprops={toggleForm} />
        </>
      ) : (
        <>
          <Register Registernprops={toggleForm} />
        </>
      )}
    </div>
  );
};
export default Main;
