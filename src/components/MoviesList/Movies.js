import { Link } from "react-router-dom";
import "./Movies.css";


export default function Movies(props) {
    return (
        <li className="movie">
            <Link to={`/sessions/${props.m.id}`} >
                <div className="poster">
                <img alt="poster" src={props.m.posterURL} />
                </div>
            </Link>
        </li>
    )
}