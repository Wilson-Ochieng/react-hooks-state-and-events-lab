import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [addItemInCart,setaddItemInCart]= useState(false)
  function handleClick(){
    setaddItemInCart((addItemInCart) => !addItemInCart)
  }
    const cartState = addItemInCart ? "addItem-InCart " : "" ;
  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addItemInCart ? "remove" : "add"}
        onClick={handleClick}>Add to Cart</button>
        {addItemInCart ? "Remove from" : "Add to"} Cart
    </li>
  );
}

export default Item;
