import React from "react";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => (
  <ul className={css.gallery}>
    {images.map(image => (
      <li
        key={image.id}
        className={css.galleryItem}
        onClick={() => onClick(image)}
      >
        <div className={css.imageWrapper}>
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className={css.image}
          />
        </div>
      </li>
    ))}
  </ul>
);


export default ImageGallery;
