import "./Seats.css";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Seat from "./Seat";

export default function Seats(props) {

    let navigate = useNavigate();

    const [sessionSeats, setSessionSeats] = useState(null);

    const params = useParams();

    const getSessionId = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.sessionId}/seats`;

    const [postResponse, setPostResponse] = useState("")

    const postLink = 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many'

    const [selectedIds, setSelectedIds] = useState([]);

    const [name, setName] = useState("");

    const [cpf, setCpf] = useState("");

    const handleChangeName = event => {
        setName(event.target.value);
      };
    const handleChangeCPF = event => {
        setCpf(event.target.value);
    };

    const postObj = {};

    useEffect(() => {

		const request = axios.get(getSessionId);


		request.then(response => {
			setSessionSeats(response.data);
		});
        
        console.log("Dentro do useEffect", sessionSeats);


	}, []);


    if(sessionSeats === null) {
		return <h2>Verificando se um trouxa roubou seu lugar...</h2>
	}

    console.log("oq é", sessionSeats);

    function handleClickButtonPostSeats() {
        console.log(selectedIds, name, cpf);
        postObj.ids = selectedIds;
        postObj.name = name;
        postObj.cpf = cpf;
        post();
    }

    function post() {
        console.log(postObj);
        const request = axios.post(postLink, postObj);

        request.then(response => {
            setPostResponse(response.data);
        })
  
        console.log("a resposta do POST", postResponse);
        
        navigate(`/success/${params.sessionId}`);
    }

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
                    <input
                     type="text"
                     name="fullName"
                     placeholder="Seu nome completo..."
                     onChange={handleChangeName}
                     value={name} />
                </div>
                <div className="formCPF">
                    <div className="formTitle">
                        <p className="formTitleText">CPF do comprador:</p>
                    </div>
                    <input 
                     type="text"
                     name="CPF"
                     placeholder="Seu CPF, somente números..."
                     onChange={handleChangeCPF}
                     value={cpf} />
                </div>
            </div>
            <div className="buyButton">
                <div onClick={() => {
                    handleClickButtonPostSeats();
                   
                }} className="buttonActive">
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