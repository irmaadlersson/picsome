import React, { useState } from "react";
import UnFavo from "../icons/unFavorite.svg";
import Add from "../icons/add.svg";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const heartIcon = hovered && <img src={UnFavo} className="favorite" />;
  const addIcon = hovered && <img src={Add} className="addCart" />;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon}
      {addIcon}
    </div>
  );
}

export default Image;
