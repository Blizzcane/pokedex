import React from "react";

const PokemonList = ({pokemon}) => {
  return (
    <>
      <ul>
        {pokemon.map((pokemon) => (
          <li key={pokemon.url}>{pokemon.name}</li>
        ))}
      </ul>
      
    </>
  );
};
export default PokemonList;
