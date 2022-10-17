import React, { useRef } from "react"; 
import { useHovering } from "use-hovering";
import { Button, Card, ListGroup, Badge } from "react-bootstrap";
import Link from "next/link";
import StatsList from "./StatsList"; 

const PokeDexEntry = ({ pokemon, description }) => {
  const ref = useRef();
  const isHovering = useHovering(ref);  

  return (
    <div className="flex-container">
      <div className="item1">
        <Card>
          <Card.Img
            variant="top"
            src={pokemon.sprites.other.home.front_default}
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
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PokeDexEntry;
