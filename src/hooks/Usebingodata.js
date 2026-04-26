import { useState, useEffect } from "react";
import { getTasks } from "../api/endpoint";

export default function Usebingodata() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const tasks = await getTasks();
        setData(tasks);
      } catch (err) {
        setError("Failed to load data");
  console.log("API ERROR:", err.response?.data || err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
  
  };
}