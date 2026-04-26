import { useState, useEffect } from "react";
import { ubdateTaskState } from "../api/endpoint";

export default function Usetaskstate(id, isSelected) {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

 const updateState = async (id, isSelected) => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await ubdateTaskState(id, isSelected);

      return data;
    } catch (err) {
      console.log("Update error:", err);
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateState, 
    isLoading,
    error,
  };
}