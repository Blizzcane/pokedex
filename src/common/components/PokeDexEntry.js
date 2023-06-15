import React, { useRef } from "react";
import { useHovering } from "use-hovering";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import StatsList from "./StatsList";

const PokeDexEntry = ({ pokemon, description }) => {
  const ref = useRef();
  const isHovering = useHovering(ref);
  const pokemonArtwork = {
    home: pokemon.sprites.other.home.front_default,
    official: pokemon.sprites.other["official-artwork"].front_default,
    dreamWorld: pokemon.sprites.other.dream_world.front_default,
  };

  return (
    <div className="flex-container">
      <div className="item1">
        <Card>
          <Card.Img
            variant="top"
            src={pokemonArtwork.official}
            className="pokemon-image"
          />
          <Card.Title className="text-center">
            <h1>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h1>
          </Card.Title>

          <Link href="/">
            <Button className={isHovering ? "shadow" : ""} ref={ref}>
              Back
            </Button>
          </Link>
        </Card>
      </div>
      <div className="item2">
        <Card>
          <Card.Body>
            <StatsList stats={pokemon.stats} />
            <div className="font-monospace">
              {description.replaceAll("\f", " ")}
            </div>
            <div className="font-monospace">
              <ul>
                <li>{`Height: ${pokemon.height}`}</li>
                <li>{`Weight: ${pokemon.weight}`}</li>
                <li>
                  Abilities:{" "}
                  {pokemon.abilities.map((x, index) => (
                    <span key={index}>
                      {`${index ? ", " : ""}${
                        x.ability.name[0].toUpperCase() +
                        x.ability.name.substring(1)
                      }`}
                    </span>
                  ))}
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PokeDexEntry;
