import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

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

  if (pokemon.name)
    return (
      <Card style={{ width: "20rem" }}>
        <Card.Title>
          <h1>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h1>
        </Card.Title>

        <img src={pokemon.sprites.other.home.front_default} />
        <Link href="/">
          <Button>Back</Button>
        </Link>
      </Card>
    );
};

export default PokemonDetails;
