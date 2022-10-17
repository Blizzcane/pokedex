import React, { useRef } from "react";
import { useHovering } from "use-hovering";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";

const PokemonCard = ({ pokemon }) => {
  const ref = useRef();
  const isHovering = useHovering(ref);

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
