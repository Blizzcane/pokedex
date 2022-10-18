import React, { useRef } from "react";
import { useHovering } from "use-hovering";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";

const PokemonCard = ({ pokemon }) => {
  const ref = useRef();
  const isHovering = useHovering(ref);

  const pokemonArtwork = {
    home: pokemon.sprites.other.home.front_default,
    official: pokemon.sprites.other["official-artwork"].front_default,
    dreamWorld: pokemon.sprites.other.dream_world.front_default,
  };

  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <Card
        ref={ref}
        className={
          isHovering ? "shadow pokemon-card" : "shadow-sm pokemon-card"
        }
      >
        <Card.Img
          style={{ transform: "translate(0px, 20px)" }}
          variant="top"
          src={isHovering ? pokemonArtwork.official : pokemonArtwork.home}
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
