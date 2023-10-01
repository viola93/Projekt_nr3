import React, { useState } from "react";
import "./Styles.scss";

const Login = ({ Loginprops }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({email});

    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          placeholder="youremail@gmail.com"
          id="email"
          onChange={changeEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          value={password}
          placeholder="********"
          id="password"
          onChange={changePassword}
        />

        <button type="submit" className="submit-button">
          Log in
        </button>
      </form>
      <button className="btn" onClick={() => Loginprops("Register")}>
        Don't have account?Register here.
      </button>
    </div>
  );
};
export default Login;
