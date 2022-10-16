import React, { useEffect, useState } from "react"; 
import { useRouter } from "next/router";
import axios from "axios";
import Pokedex from "../../modules/pokedex/pokedex";//testing build

const PokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState("");

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
    //   gets the descriptions and finds the English version
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setDescription(
          res.data.flavor_text_entries.find(
            (entry) => entry.language.name === "en"
          ).flavor_text
        );
      });

    setLoading(false);
    return () => cancel();
  }, [id]);

  if (loading) return "Loading...";

  if (pokemon.name)
    return (
      <div>
            <Pokedex  pokemon={pokemon} description={description} />  
      </div>
    );
};

export default PokemonDetails;
