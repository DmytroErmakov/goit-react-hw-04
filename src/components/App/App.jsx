import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Modal from "react-modal";
import { fetchArticles } from "../../articles-api";
import { Toaster } from "react-hot-toast";

import css from "./App.module.css";

Modal.setAppElement("#root");

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    fetchImages(searchQuery, 1);
  };

  const fetchImages = async (searchQuery, pageNum) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchArticles(searchQuery, pageNum);
      setImages(prevImages => [...prevImages, ...data.results]);
    } catch (error) {
      setError("Failed to fetch images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const openModal = image => {
    if (!selectedImage) {
      setSelectedImage(image);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={Boolean(selectedImage)}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
      <Toaster />
    </div>
  );
}
