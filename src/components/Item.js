import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  function addToCartClick() {
    setIsInCart((isInCart) => !isInCart)
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={addToCartClick}>
        {isInCart ? "Remove From" : "Add To"} Add to Cart
      </button>
    </li>
  );





}

export default Item;
