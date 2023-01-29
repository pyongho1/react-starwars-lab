import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStarshipDetails } from "../../services/sw.api";
import { useLocation } from "react-router-dom";

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
      <div>
        <h1>Starship Details</h1>
        <h1>{shipDetails.name}</h1>
      </div>
    </>
  );
};

export default StarshipDetails;
