import React from "react";
import "./Styles.scss";
import ItemForm from "./components/ItemForm/Presentational";

const NewItem = ({ addItemprops }) => {
  const saveNewItem = (itemData) => {
    addItemprops({
      ...itemData,
      id: Math.random(),
    });
  };
  return (
    <div className="new-item">
      <ItemForm saveNewItemProps={saveNewItem} />
    </div>
  );
};
export default NewItem;
