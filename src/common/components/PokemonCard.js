import React from "react";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <Card
        style={{
          width: "16rem",
          minWidth: "16rem",
          margin: "10px",
          flexBasis: "auto",
          cursor: "pointer",
        }}
      >
        <Card.Img
          style={{ transform: "translate(0px, 20px)", }}
          variant="top"
          src={pokemon.sprites.other.home.front_default}
        />
        <Card.Body>
          <Card.Text className="text-center fw-bold">
            {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PokemonCard;
