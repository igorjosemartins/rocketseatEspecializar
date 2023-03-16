import React, { useState, useEffect } from 'React';
import './styles.css';
import { Card } from '../../components/Card';


export function Home() {

  const [workerName, setWorkerName] = useState('');
  const [workers, setWorkers] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '' })

  function handleAddWorker() {
    
    const newWorker = {
      name: workerName,
      timeEntrada: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      timeSaida: '15:00:00' 
    };

    setWorkers(prevState => [...prevState, newWorker]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/igorjosemartins')
    .then(res => res.json())
    .then(data => { 
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
    .catch(e => console.error(e))
  }, []);

  return (
    <div className="container">
      
      <header>
        <h1>Lista</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>
      
      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={event => setWorkerName(event.target.value)}
      />
      
      <button type="button" onClick={handleAddWorker}>
        Adicionar
      </button>

      {
        workers.map(worker => (
          <Card 
            key={worker.timeEntrada}
            name={worker.name} 
            timeEntrada={worker.timeEntrada} 
            timeSaida={worker.timeSaida}
          />
        ))
      }

    </div>
  )
}
