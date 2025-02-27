const BASE_URL = "https://tripadvisor16.p.rapidapi.com";

async function getLocationId(city) {
  console.log(
    "Using API Key (getLocationId):",
    import.meta.env.VITE_RAPIDAPI_KEY_restaurants
  );
  const url = `${BASE_URL}/api/v1/hotels/searchLocation?query=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY_restaurants,
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Response (getLocationId):", data);
    if (data.data && data.data.length > 0) {
      return data.data[0].geoId;
    }
    throw new Error("Location not found");
  } catch (error) {
    console.error("Error fetching location ID:", error);
    throw error;
  }
}

async function fetchRestaurants(locationId) {
  console.log(
    "Using API Key (fetchRestaurants):",
    import.meta.env.VITE_RAPIDAPI_KEY_restaurants
  );

  const url = `${BASE_URL}/api/v1/restaurant/searchRestaurants?locationId=${locationId}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY_restaurants,
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Response (fetchRestaurants):", data);

    if (data.data && data.data.data && data.data.data.length > 0) {
      return data.data.data;
    }
    throw new Error("No restaurants found for this location.");
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
}

export { getLocationId, fetchRestaurants };
