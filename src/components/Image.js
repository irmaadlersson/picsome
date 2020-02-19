import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import UnFavo from "../icons/unFavorite.svg";
import Favo from "../icons/Favorite.svg";
import Add from "../icons/add.svg";
import Added from "../icons/added.svg";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  );
  function heartIcon() {
    if (img.isFavorite) {
      return (
        <img
          src={Favo}
          className="favorite"
          onClick={() => toggleFavorite(img.id)}
        />
      );
    } else if (hovered) {
      return (
        <img
          src={UnFavo}
          className="favorite"
          onClick={() => toggleFavorite(img.id)}
        />
      );
    }
  }
  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === img.id);
    if (alreadyInCart) {
      return (
        <img
          src={Added}
          className="addCart"
          onClick={() => removeFromCart(img.id)}
        />
      );
    } else if (hovered) {
      return (
        <img src={Add} className="addCart" onClick={() => addToCart(img)} />
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
};

export default Image;
