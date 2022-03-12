import { useEffect, useState } from "react";

const UseEvents = () =>{

    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch ('https://shrouded-retreat-25778.herokuapp.com/event')
        .then ( res => res.json())
        .then ( data => setEvent(data));
        
    }, []);
    
    // return profile item
    return [event] ;
    
}

export default UseEvents;