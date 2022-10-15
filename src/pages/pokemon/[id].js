import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import PokeDexEntry from "../../common/components/PokeDexEntry";
import Link from "next/link";

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
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then((res) => { 
        setDescription(res.data.flavor_text_entries.find(entry => entry.language.name === "en").flavor_text);
      });

    setLoading(false);
    return () => cancel();
  }, []);

  if (loading) return "Loading...";

  if (pokemon.name)
    return (
      <div>
        <PokeDexEntry pokemon={pokemon} description={description} />
      </div>
    );
};

export default PokemonDetails;
