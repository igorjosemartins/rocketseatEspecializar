import React, { useState } from 'React';
import './styles.css';
import { Card } from '../../components/Card';

export function Home() {

  const [workerName, setWorkerName] = useState();

  return (
    <div className="container">
      
      <h1>Lista</h1>
      
      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={event => setWorkerName(event.target.value)}
      />
      
      <button type="button">Adicionar</button>

      <Card name="Igor" timeEntrada="09:00" timeSaida="15:00"/>
      <Card name="Test" timeEntrada="08:00" timeSaida="17:00"/>
    </div>
  )
}
