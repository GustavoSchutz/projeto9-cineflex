import { useState, useEffect } from 'react';


export default function Seat(props) {

    const [className, setClassName] = useState("seat");

    const [selectedSeat, setSelectedSeat] = useState(false);


    useEffect(() => {

        if (props.ss.isAvailable === false){
                    setClassName("seat unavailable");
        } else if (props.ss.isAvailable === true) {
                    setClassName("seat");
        }

	}, []);
 
    function handleClickSeat() {
        if (className === "seat") {
            setClassName("seat selected");
            props.setSelectedIds([...props.selectedIds, props.ss.id]);
        } else if (className === "seat selected") {
            setClassName("seat");
            props.setSelectedIds(props.selectedIds.filter(id => {
                return id !== props.ss.id
            }))
        }
        console.log("finale", props.selectedIds)
    }

    // const className = "seat " + props.ss.isAvailable

    console.log(className)

    // const [seatAvailability, setSeatAvailability] = useState(true);

    // const availability = props.ss.isAvailable

    // setSeatAvailability();



    return(
        <li onClick={() => handleClickSeat()} className={className}>
            <p>{props.ss.name}</p>
        </li>
    )
}