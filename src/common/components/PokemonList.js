import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemon }) => {
  return (
    <div className="layout">
      {pokemon.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
};
export default PokemonList;
