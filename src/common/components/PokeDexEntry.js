import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";

const PokeDexEntry = ({ pokemon }) => {
  return (
    <div>
      <div className="sidebar">
        <Card>
          <Card.Img
            variant="top"
            src={pokemon.sprites.other.home.front_default}
          />
          <Card.Title>
            <h1>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h1>
          </Card.Title>

          <Link href="/">
            <Button>Back</Button>
          </Link>
        </Card>
      </div>
      <div className="main-entry">
        <Card>
          <Card.Img
            variant="top"
            src={pokemon.sprites.other.home.front_default}
          />
          <Card.Title>
            <h1>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h1>
          </Card.Title>

          <Link href="/">
            <Button>Back</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default PokeDexEntry;
