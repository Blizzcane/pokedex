import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemon }) => {
  return (
    <>
      {pokemon.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </>
  );
};
export default PokemonList;
