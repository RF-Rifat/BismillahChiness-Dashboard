/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { useState, useEffect } from 'react';

export const BASE_URL = 'http://localhost:5000';
// export const BASE_URL = 'https://bismillah-chiness-dashboard-server.vercel.app';

const useFetchData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(BASE_URL + endpoint);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);
  return { data, loading, error };
};

export default useFetchData;
