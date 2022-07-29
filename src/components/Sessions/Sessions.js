import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Sessions.css";
import Session from "./Session.js";
import { useParams } from 'react-router-dom';

export default function Sessions() {
    // https://mock-api.driven.com.br/api/v5/cineflex/movies/ID_DO_FILME/showtimes

    

    const [movieSessions, setMovieSessions] = useState(null);

    const params = useParams();


    const getMovieId = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.movieId}/showtimes`

    useEffect(() => {

		const request = axios.get(getMovieId);


		request.then(response => {
			setMovieSessions(response.data);
		});

        console.log(movieSessions);

	}, []);

    if(movieSessions === null) {
		return <h2>Buscando os melhores horários pra vc assistir seu filminho numa telona enquanto vc esquece do mundo lá fora...</h2>
	}

    console.log("oq é", movieSessions);

    return (
        <>
            <div className="sessions">
                <h2 className='subtitulo'>Escolha um horário</h2>
                <ul className="sessionsList">
                {movieSessions.days.map((s) => {
            return <Session s={s} />
        })}
                </ul>
            </div>
            <div className='footer'>
                <div className='selectedMovie' >
                    <img alt="poster" src={movieSessions.posterURL} />
                </div>
                <div className='selectedMovieInfo' >
                    <p className='selectedMovieName'>{movieSessions.title}</p>
                </div>
            </div>
            <div className='footerPadding'></div>
        </>
    )
}