import React from "react";

import css from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ image }) => (
  <div className={css.card}>
    <img
      src={image.urls.small}
      alt={image.alt_description}
      className={css.image}
    />
  </div>
);


export default ImageCard;