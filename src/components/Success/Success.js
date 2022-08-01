import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import { useParams} from 'react-router-dom';

export default function Success(props) {


    const params = useParams();

    console.log("idSessão", params.sessionId)

    const getSessionId = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.seatsId}/seats`;

    const [sessionSeats, setSessionSeats] = useState(null);

    useEffect(() => {

		const request = axios.get(getSessionId);


		request.then(response => {
			setSessionSeats(response.data);
		});
        
        console.log("Dentro do useEffect", sessionSeats);


	}, []);

    if (sessionSeats === null) {
        return(
            <p>Espera ai...</p>
        )
    }

    return (
        <>
        <div>
            <h4 className="">Pedido feito com sucesso!</h4>
        </div>
        <div className="movie">
            <h2>Filme e sessão</h2>
            <p className='selectedMovieName'>{sessionSeats.movie.title}</p>
            <p className='selectedMovieDate'>{sessionSeats.day.weekday} - {sessionSeats.name}</p>
        </div>
        </>
    )
}