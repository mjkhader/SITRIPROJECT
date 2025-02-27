import axios from "axios";

const BASE_URL = "https://tripadvisor16.p.rapidapi.com";
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY_restaurants; 

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  },
  timeout: 10000,
});

async function getLocationId(city) {
  try {
    console.log("Using API Key (getLocationId):", API_KEY);
    const response = await axiosInstance.get(`/api/v1/hotels/searchLocation`, {
      params: { query: city },
    });

    console.log("API Response (getLocationId):", response.data);
    if (response.data?.data?.length > 0) {
      return response.data.data[0].geoId;
    } else {
      throw new Error("Location not found");
    }
  } catch (error) {
    console.error("Error fetching location ID:", error.message);
    throw error;
  }
}
async function fetchRestaurants(locationId) {
  try {
    console.log("Using API Key (fetchRestaurants):", API_KEY);
    const response = await axiosInstance.get(`/api/v1/restaurant/searchRestaurants`, {
      params: { locationId },
    });

    console.log("API Response (fetchRestaurants):", response.data);
    if (response.data?.data?.data?.length > 0) {
      return response.data.data.data;
    } else {
      throw new Error("No restaurants found for this location.");
    }
  } catch (error) {
    console.error("Error fetching restaurants:", error.message);
    throw error;
  }
}

export { getLocationId, fetchRestaurants };
