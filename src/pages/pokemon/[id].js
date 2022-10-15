import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const PokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel;

    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokemon(res.data);
      });

    setLoading(false);
    return () => cancel();
  }, [id]);
    
  if (loading) return "Loading...";

  return (
    <div>
      <h1>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h1>
      <img src={pokemon.sprites.other.home.front_default} />
    </div>
  );
};

export default PokemonDetails;
