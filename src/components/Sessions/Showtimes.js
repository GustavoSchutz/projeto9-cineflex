import { Link } from "react-router-dom";


export default function Showtimes(props) {
    return (
        <Link to={`/seats/${props.st.id}`} >
            <li className="time">
                <p className="timeButton">
                    {props.st.name}
                </p>
            </li>
        </Link>
    )
}