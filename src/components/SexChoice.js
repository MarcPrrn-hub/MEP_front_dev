import React from 'react';

import {Button} from 'react-bootstrap';


export default function SexChoice( {setSexe} ) {

        //set the baby's name
        const handleChange = event => {
            setSexe(event.target.value);    
        }
    return (
        <>
        <h1 className="mb-4">
            Quel est le sexe de l'enfant ?  
        </h1>
        <Button variant="outline-primary" className="mr-2" size="lg" outline onClick={handleChange} value="m" > Garçon <i className="fas fa-male"/> </Button>
        <Button variant="outline-primary" className="mr-2" size="lg" outline onClick={handleChange} value="f" > Fille <i className="fas fa-female"/> </Button>
        </>
    )
}
