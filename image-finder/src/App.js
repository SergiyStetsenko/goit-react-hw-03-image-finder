import React, { Component } from "react";
import ImageGallery from "./component/ImageGallery"
import ButtonLoadMore from "./component/button";
import LoaderSpinner from "./component/Loader";
import Searchbar from "./component/Searchbar";
import imagesApi from "./services/imagesApi";
import "./styles.module.css"

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImageUrl: null,
    isModalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const { searchQuery, page } = this.state;
    if (prevState.page !== page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (searchQuery) => {
    this.setState({
      searchQuery,
      page: 1,
      images: [],
    });
  };

  render() {
    const { images, loading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <LoaderSpinner />}
        {images.length > 0 && <ButtonLoadMore loadMore={this.fetchImages} />}
      </>
    );
  }
}