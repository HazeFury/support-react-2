import { useState, useEffect } from "react";
import PokemonCard from "../../components/PokemonList/PokemonCard";

function Home() {
  const [pokemons, setPokemon] = useState([]);

  function fetchPokemon() {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/10")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="home-pokemon">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} data={pokemon} />
      ))}
    </div>
  );
}

export default Home;
