import React, { useState } from 'react'
import {Button} from 'react-bootstrap';


export default function NameChoice({ liked_names, setLikedNames}) {

    const [name, setName] = useState("Test")
    
    //set the baby's name
    const handleChange = event => {
        if (event.target.value === "1") {
            const NewList = liked_names.concat( {name} );
            setLikedNames(NewList)
        }
        else { alert("AAAAAAAh")}
        setName("George")
     }

    return (
        <>
        <h1 className="mb-4">
        Aimez vous ce prénom : {name} ? 
        </h1>
        <div className="d-flex justify-content-center">
        <Button variant="outline-success" className="mr-2" size="lg" o outline onClick={handleChange} value="1" > Oui  <i className="fas fa-heart"/> </Button>
        <Button variant="outline-danger" className="mr-2" size="lg"  outline  onClick={handleChange} value="0" > Non <i className="fas fa-times"/> </Button>
        </div>
        </>
    )
}
