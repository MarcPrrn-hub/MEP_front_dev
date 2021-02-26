import React, { useState } from 'react';
import './App.css';
import { Button, Container } from 'react-bootstrap';

import Introduction from './Introduction';
import SexChoice from './SexChoice';
import NameChoice from './NameChoice';

function App() {
  const [first_visit, setFirstVisit] = useState(true);
  const [sexe, setSexe] = useState("NA");
  const [liked_names, setLikedNames]= useState([]);


    // Reset all parameters
    const Reset = () => {
      setSexe('NA');
    }
  
    //Get list of names 
    const List = () => {

    }

  return (

    <div className="Main">
    <Container>
     { first_visit ? <Introduction setFirstVisit={setFirstVisit}/> : (sexe ==="NA") ? 
        <SexChoice setSexe={setSexe}/> :<NameChoice liked_names={liked_names} setLikedNames={setLikedNames} /> }

    <div className="d-flex justify-content-between align-items-end">
    <Button variant="outline-secondary" className="mr-2 mt-4" size="lg" outline onClick={Reset} > Réinitialiser  <i className="fas fa-undo"/> </Button>
    <Button variant="outline-secondary" className="mr-2 mt-4" size="lg" outline onClick={List} > Liste  <i className="fas fa-list"/> </Button>
    </div>
            
    </Container>
    </div>
  );
}

export default App;
