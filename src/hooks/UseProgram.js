import { useEffect, useState } from "react";

const UseProgram = () =>{

    const [program, setProgram] = useState([]);

    useEffect(() => {
        fetch ('https://bby8e7ppz5.execute-api.us-west-1.amazonaws.com/programdata/programs')
        .then ( res => res.json())
        .then ( data => setProgram(data.programs));
        
    }, []);
    
    // return profile item
    return [program] ;
    
}

export default UseProgram;