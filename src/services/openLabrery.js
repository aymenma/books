import axios from "axios";

const API_URL = "https://openlibrary.org/search.json";
export function loadinBooks(query) {
  return axios.get(API_URL, {
    params: {
      q: query,
      fields: "title,author_name,first_publish_year,cover_i,key",
      limit: 4,
    },
  });
}


