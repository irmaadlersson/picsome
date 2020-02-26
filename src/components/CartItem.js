import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "./hooks/useHover";
import Delete from "../icons/delete.svg";
import DeleteHover from "../icons/deleteHover.svg";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, ref] = useHover();

  return (
    <div className="cart-item">
      <img
        ref={ref}
        src={hovered ? DeleteHover : Delete}
        onClick={() => removeFromCart(item.id)}
      />
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};
export default CartItem;
