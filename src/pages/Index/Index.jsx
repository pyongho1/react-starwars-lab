import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/sw.api";
import StarshipCard from "../../components/StarshipCard/StarshipCard";
import "./Index.css";

const Index = () => {
  const [starshipList, setStarshipList] = useState([]);

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships();
      console.log(starshipData);
      setStarshipList(starshipData.results);
    };
    fetchStarshipList();
  }, []);
  return (
    <>
      <div className="mainContainer">
        <h1>StarShipList</h1>
        <div className="container">
          {starshipList.length ? (
            <>
              {starshipList.map((starship, idx) => (
                <div key={idx}>
                  <div className="card">
                    <StarshipCard starship={starship} />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div>Loading starships...</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
