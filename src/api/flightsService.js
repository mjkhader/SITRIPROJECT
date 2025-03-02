import axios from "axios";

// console.log("API Key:", import.meta.env.VITE_RAPIDAPI_KEY_flights);
const API_URL = "https://sky-scanner3.p.rapidapi.com/flights/search-everywhere";

export const searchFlights = async (fromEntityId) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        fromEntityId,
        type: "oneway",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY_flights,
        "X-RapidAPI-Host": "sky-scanner3.p.rapidapi.com",
      },
    });
    console.log(response.data);
    return response.data.data.everywhereDestination;
  } catch (error) {
    console.log("Error fetching flights:", error);
    // throw new Error("Failed to fetch flights. Please try again.");
  }
};
