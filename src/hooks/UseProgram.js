import { useEffect, useState } from "react";

const UseProgram = () =>{

    const [program, setProgram] = useState([]);

    useEffect(() => {
        fetch ('./program.json')
        .then ( res => res.json())
        .then ( data => setProgram(data));
    }, []);

    // return profile item
    return [program] ;
}

export default UseProgram;