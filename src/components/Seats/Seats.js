import "./Seats.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Seat from "./Seat";

export default function Seats() {

    const [sessionSeats, setSessionSeats] = useState(null);

    const params = useParams();

    const getSessionId = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.sessionId}/seats`;

    const [selectedIds, setSelectedIds] = useState([]);

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
        <>
            <div className="seats">
                <h2 className="subtitulo">Selecione os assentos</h2> 
                <ul className="seatsList">
                    {sessionSeats.seats.map((ss) => {
                return <Seat selectedIds={selectedIds} setSelectedIds={setSelectedIds} ss={ss} />
            })}
                </ul>
                <ul className="guide">
                    <div className="guideBox">
                        <li className="seat selected"></li>
                        <p className="guideText">Selecionado</p>
                    </div>
                    <div className="guideBox">
                        <li className="seat"></li>
                        <p className="guideText">Disponível</p>
                    </div>
                    <div className="guideBox">
                        <li className="seat unavailable"></li>
                        <p className="guideText">Indisponível</p>
                    </div>
                </ul>
            </div>
            <div className="forms">
                <div className="formName">
                    <div className="formTitle">
                        <p className="formTitleText">Nome do comprador:</p>
                    </div>
                    <input name="fullName" placeholder="Seu nome completo...">
                    </input>
                </div>
                <div className="formCPF">
                    <div className="formTitle">
                        <p className="formTitleText">CPF do comprador:</p>
                    </div>
                    <input 
                        type="text"
                        name="CPF"
                        placeholder="Seu CPF, somente números...">
                    </input>
                </div>
            </div>
            <div className="buyButton">
                <div className="buttonActive">
                    <p className="button">Reservar assento(s)</p>
                </div>
            </div>
            <div className='footer'>
                <div className='selectedMovie' >
                    <img alt="poster" src={sessionSeats.movie.posterURL} />
                </div>
                <div className='selectedMovieInfo' >
                    <p className='selectedMovieName'>{sessionSeats.movie.title}</p>
                    <p className='selectedMovieDate'>{sessionSeats.day.weekday} - {sessionSeats.name}</p>
                </div>
            </div>
            <div className='footerPadding'></div>
        </>
    )
}