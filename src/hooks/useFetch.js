import { useState, useEffect } from "react";
import axios from "axios";
async function useFetch(url) {
  const [data, setData] = new useState();
  const [isLoading, setIsLoading] = new useState();
  const [error, setError] = new useState();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((resp) => {
        setData(resp.data.data.movie);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setIsLoading(true);
        setError("could not fetch any data from server");
      });
  }, [url]);
  return { data, isLoading, error };
}
export default useFetch;
