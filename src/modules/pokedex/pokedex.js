import React from "react";

const Pokedex = ({pokemon, imgSource}) => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={imgSource} className="hero-image" width="30%" />
      <div className="info">
        <p>{pokemon?.name}</p>
        <Pokedex />
      </div>
    </div>
  );
};

export default Pokedex;
