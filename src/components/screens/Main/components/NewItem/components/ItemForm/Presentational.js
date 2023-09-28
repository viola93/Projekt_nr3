import React, { useState } from "react";
import "./Styles.scss";

const ItemForm = ({ saveNewItemProps }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeCode = (event) => {
    setCode(event.target.value);
  };
  const changeAmount = (event) => {
    setAmount(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();

    saveNewItemProps({ code, name, amount });

    setName("");
    setCode("");
    setAmount("");
  };

  return (
    <form onSubmit={submitForm} className="item-form">
      <div className="form-group">
        <label htmlFor="code">Code</label>
        <input
          type="number"
          name="code"
          min="0"
          value={code}
          onChange={changeCode}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={changeName} />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          value={amount}
          min="0"
          step="1"
          onChange={changeAmount}
        />
      </div>

      <button type="submit-button" className="submit-button">
        Add Item
      </button>
    </form>
  );
};
export default ItemForm;
