import { Link } from "react-router-dom";

function PokemonCard({ data }) {
  console.log(data);
  return (
    <Link to={`/pokemon/${data.id}`}>
      <div className="pokemon-card">
        <img src={data.image} alt="pokemon image" />
        <p>{data.id}</p>
        <p>{data.name}</p>
      </div>
    </Link>
  );
}

export default PokemonCard;
