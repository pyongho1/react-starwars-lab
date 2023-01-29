import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { getStarshipDetails } from "../../services/sw.api";
import { useLocation } from "react-router-dom";
import "./StarshipDetails.css";

const StarshipDetails = () => {
  const [shipDetails, setShipDetails] = useState({});
  // const { shipNo } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchShipDetails = async () => {
      const shipData = await getStarshipDetails(location.state.starship.url);
      setShipDetails(shipData);
    };
    fetchShipDetails();
  }, [location.state.starship.url]);

  return (
    <>
      <div className="detailContainer">
        <div className="cardContainer">
          <p>NAME: {shipDetails.name}</p>
          <p>MODEL: {shipDetails.model}</p>
          <a href="/">RETURN</a>
        </div>
      </div>
    </>
  );
};

export default StarshipDetails;
