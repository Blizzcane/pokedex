import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonList from "../common/components/PokemonList";
import Pagination from "../common/components/Pagination";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel;
    setLoading(true);
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        Promise.all(
          res.data.results.map(
            async (x) => await fetch(x.url).then((res) => res.json())
          )
        ).then((res) => setPokemon(res));
      });

    setLoading(false);
    return () => cancel();
  }, [currentPageUrl]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };
  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  if (loading) return "Loading...";
  return (
    <div>
      <Head>
        <title>Pokedex.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <a id="top"></a>

        <PokemonList pokemon={pokemon} />
        <Pagination
          goToNextPage={nextPageUrl ? goToNextPage : null}
          goToPrevPage={prevPageUrl ? goToPrevPage : null}
        />
      </main>
    </div>
  );
}
