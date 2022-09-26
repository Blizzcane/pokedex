import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const Pokedex = ({ pokemon, imgSource }) => {
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(pokemon?.species.url, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => setSpecies(data))
      .catch((error) => console.log(error.message));

    return () => {
      abortController.abort();
    };
  }, [pokemon]);

  return (
    <div>
      <img src={imgSource} width="30%" />
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>
            {pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
          </Card.Title>
          <Card.Text>{species?.flavor_text_entries[0].flavor_text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pokedex;
