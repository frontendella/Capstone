import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
  return (
    <header>
      <Link to="/Photo-e-commerce-website/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        <i className={`${cartClassName} ri-fw ri-3x`}></i>
      </Link>
    </header>
  );
}

export default Header;
