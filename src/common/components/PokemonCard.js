import React from "react";
import { Button, Card } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card style={{ width: "18rem" , minWidth: "16rem", margin: "10px" , flexBasis: "auto"}}>
      <Card.Img
        style={{ transform: "translate(0px, 20px)" }}
        variant="top"
        src={pokemon.sprites.other.home.front_default}
      />
      <Card.Body style={{ backgroundColor: "blue" }}>
        <Card.Title>
          {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
        </Card.Title>
        <Card.Text>
          <ul>
            <li>#{pokemon.id}</li>
            <li>Height: {pokemon.height}</li>
            <li>Weight: {pokemon.weight}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
