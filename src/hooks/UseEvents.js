import { useEffect, useState } from "react";

const UseEvents = () =>{

    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch ('https://secret-peak-05523.herokuapp.com//event')
        .then ( res => res.json())
        .then ( data => setEvent(data));
        
    }, []);
    
    // return profile item
    return [event] ;
    
}

export default UseEvents;