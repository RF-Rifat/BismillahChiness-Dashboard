/* eslint-disable no-useless-catch */
export const BASE_URL = "https://securesavings-2.onrender.com";

export const getData = async (endpoint) => {
  return fetch(BASE_URL + endpoint)
    .then((res) => res.json())
    .then((data) => data);
};

export const modifyData = async (endpoint, method, data) => {
  console.log(endpoint, method, data);
  try {
    const response = await fetch(BASE_URL + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const contentType = response.headers.get("Content-Type");

      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      } else {
        throw new Error("Unexpected response from the server");
      }
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
