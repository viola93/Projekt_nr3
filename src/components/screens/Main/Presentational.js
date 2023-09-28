import React, { useState } from "react";
import ShopItem from "./components/ShopItem/Presentational";
import NewItem from "./components/NewItem/Presentational";
import "./Styles.scss";

const Main = () => {
  const [items, setItem] = useState([]);

  const addItem = (newItemData) => {
    setItem((oldItem) => [...oldItem, newItemData]);
  };

  let content = items.length ? (
    <>
      {" "}
      {items.map((item) => (
        <ShopItem
          key={item.id}
          codeprops={item.code}
          nameprops={item.name}
          amountprops={item.amount}
        />
      ))}
    </>
  ) : (
    <h2 className="no-item">All items are out of stock!</h2>
  );

  return (
    <div className="main-container">
      <NewItem addItemprops={addItem} />
      {content}
    </div>
  );
};
export default Main;
