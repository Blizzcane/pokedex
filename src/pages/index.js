import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.log(error.message));
    console.log(pokemon)

    return () => {
      abortController.abort();
    };
  }, []);

  const imgSource = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png";
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column", 
            alignItems: "center",
          }}
        >
          <img src={imgSource} className="hero-image" width="30%" />
          <div className="info"><p>dsfasfsa</p></div>

        </div>
      </main>
    </div>
  );
}
