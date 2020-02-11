import React from "react";
import Img from "../icons/shopping-cart.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>

      <Link to="/cart">
        {/* <img src={Img} style={{ width: "4%" }} /> */}
        <h2>Cart</h2>
      </Link>
    </header>
  );
}

export default Header;
