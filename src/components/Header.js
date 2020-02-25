import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../icons/shopping-cart.svg";
import CartFilled from "../icons/shopping-cart-filled.svg";

import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);

  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>

      <Link to="/cart">
        <img src={cartItems.length > 0 ? CartFilled : Cart} />
      </Link>
    </header>
  );
}

export default Header;
