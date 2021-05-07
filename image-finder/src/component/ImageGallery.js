import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import styles from '../styles.module.css';

const ImageGallery = ({ images }) => {
  return <ul className={styles.ImageGallery}>
      {images.map(image => 
          <ImageGalleryItem
          key ={image.id}
          src ={image.webformatURL}
          alt ={image.tags}
          largeImageURL ={image.largeImageURL}
          />
      )}</ul>;
};
export default ImageGallery;
