

export default function Showtimes(props) {
    return (
        <li className="time">
            <p className="timeButton">
                {props.st.name}
            </p>
        </li>
    )
}