import { useEffect, useState } from "react";

const UseCareer = () =>{

    const [career, setCareer] = useState([]);

    useEffect(() => {
        fetch ('https://shrouded-retreat-25778.herokuapp.com/career')
        .then ( res => res.json())
        .then ( data => setCareer(data));
        
    }, []);
    
    // return profile item
    return [career] ;
    
}

export default UseCareer;