import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";

const PokeDexEntry = ({ pokemon }) => {
  return (
    <Card className="text-center d-flex p-2 flex-row ">
      <Card.Img variant="top" src={pokemon.sprites.other.home.front_default} />
      <Card.Title>
        <h1>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h1>
      </Card.Title>
    </Card>
  );
};

export default PokeDexEntry;
