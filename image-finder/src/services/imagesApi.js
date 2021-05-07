import axios from "axios";



const fetchImagesWithQuery = (searchQuery, page) => {
  const apiKey = "21141880-535734ac686e4cb0f7e819d7c";
    return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits); 
};

export default {
  fetchImagesWithQuery,
};