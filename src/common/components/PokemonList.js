import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemon }) => {
  return (
    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
      {pokemon.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
};
export default PokemonList;
