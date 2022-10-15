import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";

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
            <ul>
              <li>#{pokemon.id}</li>
              <li>Height: {pokemon.height}</li>
              <li>Weight: {pokemon.weight}</li>
              {pokemon.stats &&
                pokemon.stats.map((stat) => (
                  <li>{`${
                    stat.stat.name[0].toUpperCase() +
                    stat.stat.name.substring(1)
                  }: ${stat.base_stat}`}</li>
                ))}
            </ul>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PokeDexEntry;
