import React from "react";
import "./Styles.scss";
import Card from "../../../../common/Card/Presentational";

const ShopItem = ({ codeprops, nameprops, amountprops }) => {
  return (
    <Card customClassName="shop-item">
      <div className="code-name">
        <span className="code">{codeprops}</span>
        <h2 className="name">{nameprops}</h2>
      </div>

      <div className="amount">{amountprops}</div>
    </Card>
  );
};
export default ShopItem;
