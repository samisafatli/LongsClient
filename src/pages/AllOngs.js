import { useState } from "react";
import OngList from "../components/ongs/OngList";
import baseURL from "../constants";

const AllOngsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedOngs, setLoadedOngs] = useState([]);

  useState(() => {
    setIsLoading(true);
    fetch(baseURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedOngs(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Ongs</h1>
      <OngList ongs={loadedOngs} />
    </section>
  );
};

export default AllOngsPage;
