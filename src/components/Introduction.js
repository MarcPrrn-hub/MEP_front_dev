import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


export default function Introduction( {setFirstVisit}) {
    const text = [
        "Renseignez le sexe de l'enfant",
        "Indiquez si vous aimez ou non le prénom proposé",
        "Formez la liste de vos prénoms préférez",
        "Partagez / téléchargez votre liste de prénoms"
    ]
    const [step, setStep] = useState(0);

    //set the baby's name and the array of available name 
    const nextDial = (e) => {
        e.preventDefault();
        if (step + 1 < text.length) {
            setStep(step + 1);
        } else {
            setFirstVisit(false);
        }
    };

    const prevDial = () => {
        if (step - 1 >= 0) {
            setStep(step - 1);
        }
    };


    return (
        <>
            <h1 className="d-flex justify-content-center">
                Vous cherchez un nom pour votre enfant ?
            </h1>

            <h2 className="d-flex justify-content-center">
                Suivez ces étapes :
            </h2>

            <li className="d-flex align-items-center justify-content-center mb-4">{step < text.length ? text[step] : ""}</li>

            <div className="d-flex justify-content-center">
                <Button variant="outline-primary" className="mr-2" size="lg" onClick={prevDial} outline> <i className="fas fa-backward"></i> Précédent  </Button>
                <Button variant="outline-primary" className="mr-2" size="lg" onClick={nextDial} outline> Suivant  <i className="fas fa-forward"></i> </Button>
            </div>
        </>

    )
}
