import React, {useEffect, useState} from 'react';
import Ticket from './components/Ticket'
import PopUpSearch from'./components/PopUpSearch'
import Carusel from "./components/Carusel"
import './App.css';

function App() {
  const [tickets,setTickets]=useState([])
  useEffect(()=>{
    fetch("/api/tickets").then(res=>res.json()).then(res=>{
      setTickets(res)
  })
},[])
  const renderTickets=()=>tickets.map(ticket=><Ticket key={ticket.id} title={ticket.title}
    content={ticket.content} email={ticket.userEmail}
    time={new Date(ticket.creationTime).toISOString().slice(0,-5).replace("T"," ")} labels={ticket.labels}/>)
  const search=(input)=>{
    let url="/api/tickets?searchText="+encodeURIComponent(input)
    fetch(url).then(res=>res.json()).then(res=>setTickets(res))
  }
  return (
    <main className="main">
      <Carusel>
      {renderTickets()}
      </Carusel>
      <PopUpSearch search={(input)=>search(input)}/>
    </main>
  );
}

export default App;
