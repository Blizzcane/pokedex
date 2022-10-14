import React from "react";
import { Button, Card } from "react-bootstrap";
import Link from 'next/link'


const PokemonCard = ({ pokemon }) => {
  return (
    <Card
      style={{
        width: "18rem",
        minWidth: "16rem",
        margin: "10px",
        flexBasis: "auto",
      }}
    >
      <Card.Img
        style={{ transform: "translate(0px, 20px)" }}
        variant="top"
        src={pokemon.sprites.other.home.front_default}
      />
      <Card.Body>
        <Card.Text className="text-center fw-bold">
          {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
        </Card.Text>        <Link href="/pokemon/1">

        <Button>Hey</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
