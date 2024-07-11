import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {};
axios.defaults.params["client_id"] =
  "7xYOQqa5WzyDFtciUEbwAKFYwPQECnEzvaUeo0uhxLo";

export const fetchArticles = async (topic, page = 1) => {
  try {
    const response = await axios.get("/search/photos", {
      params: { query: topic, page, per_page: 12 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};


