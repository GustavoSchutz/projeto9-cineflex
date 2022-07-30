import "./Seats.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Seat from "./Seat";

export default function Seats() {

    const [sessionSeats, setSessionSeats] = useState(null);

    const params = useParams();

    const getSessionId = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.sessionId}/seats`;

    useEffect(() => {

		const request = axios.get(getSessionId);


		request.then(response => {
			setSessionSeats(response.data);
		});

        console.log(sessionSeats);

	}, []);

    if(sessionSeats === null) {
		return <h2>Verificando se um trouxa roubou seu lugar...</h2>
	}

    console.log("oq é", sessionSeats);


    return (
        <div className="seats">
            <h2 className="subtitulo">Selecione os assentos</h2> 
            <ul className="seatsList">
                {sessionSeats.seats.map((ss) => {
            return <Seat ss={ss} />
        })}
            </ul>
            <ul className="guide">
                <li className="seat selected"></li>
                <li className="seat"></li>
                <li className="seat unavailable"></li>
            </ul>
        </div>
    )
}