import React from "react";
import { Button, Card, ListGroup, Badge } from "react-bootstrap";
import Link from "next/link";
import StatsList from "./StatsList";

const PokeDexEntry = ({ pokemon }) => {

  return (
    <div className="pokedex-layout">
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
      <div className="details">
        <Card>
          <Card.Body>
            <StatsList stats={pokemon.stats} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PokeDexEntry;
