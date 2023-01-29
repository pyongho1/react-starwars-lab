import { Link } from "react-router-dom";
import "./StarshipCard.css";

const StarshipCard = ({ starship }) => {
  return (
    <>
      <Link to={"/starships"} state={{ starship }}>
        <div className="card">{starship.name}</div>
      </Link>
    </>
  );
};

export default StarshipCard;
