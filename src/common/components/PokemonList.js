import React from "react";

const PokemonList = ({pokemon, goToNextPage, goToPrevPage}) => {
  return (
    <>
      <ul>
        {pokemon.map((pokemon) => (
          <li key={pokemon.url}>{pokemon.name}</li>
        ))}
      </ul>
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </>
  );
};
export default PokemonList;
