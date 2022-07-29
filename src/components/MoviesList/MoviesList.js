import Movies from "./Movies.js"
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./MoviesList.css";

export default function MoviesList() {

    const [movies, setMovies] = useState([]);

    console.log(movies)

    useEffect(() => {
		const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");


		request.then(response => {
			setMovies(response.data);
		});

        console.log(movies)
	}, []);

    if(movies.length === 0) {
		return <h2>Buscando os melhores filmes sucessos da sessão da tarde direto para sua telinha de celular emulada pelo navegador...</h2>;
	}

    return (
        <ul className="movies">
            {movies.map((m) => {
        return <Movies m={m} />;
      })}
        </ul>
    )
}