import React from "react"; 
import PokeDexEntry from "../../common/components/PokeDexEntry";

const Pokedex = ({ pokemon, description }) => {
  return (
    <div  className="pokedex" style={{minHeight:"100vh"}}>
      <PokeDexEntry pokemon={pokemon} description={description} /> 
    </div>
  );
};

export default Pokedex;
