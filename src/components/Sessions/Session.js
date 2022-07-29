import Showtimes from "./Showtimes"

export default function Session(props) {
    return(
        <li className="session">
            <h3 className="sessionDate" >{props.s.weekday} - {props.s.date}</h3>

            <ul className="times">
                {props.s.showtimes.map((st) => {
        return <Showtimes st={st} />
      })}
            </ul>
           


        </li>
    )
}