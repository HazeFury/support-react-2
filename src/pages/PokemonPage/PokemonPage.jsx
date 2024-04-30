import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  function fetchPokemon() {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      <img src={pokemon.image} alt="pokemon image" />
      <p>{pokemon.id}</p>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprite} alt="pokemon image" />
    </div>
  );
}

export default PokemonPage;
