import React, { useState } from "react";
import "./Styles.scss";

const Register = ({ Registernprops }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name"> Full Name</label>
        <input type="text" value={name} onChange={changeName} />

        <label htmlFor="email">Email</label>
        <input type="text" value={email} onChange={changeEmail} />

        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={changePassword} />

        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
      <button className="btn" onClick={() => Registernprops("login")}>
        Already have an account?Login here.
      </button>
    </div>
  );
};
export default Register;
