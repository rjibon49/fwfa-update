import { useEffect, useState } from "react";

const UseCareer = () =>{

    const [career, setCareer] = useState([]);

    useEffect(() => {
        fetch ('https://secret-peak-05523.herokuapp.com//career')
        .then ( res => res.json())
        .then ( data => setCareer(data));
        
    }, []);
    
    // return profile item
    return [career] ;
    
}

export default UseCareer;