import React, {useEffect, useState} from 'react';
import Ticket from './components/Ticket'
import PopUpSearch from'./components/PopUpSearch'
import './App.css';

function App() {
  const [tickets,setTickets]=useState([])
  useEffect(()=>{
    fetch("/api/tickets").then(res=>res.json()).then(res=>{
      setTickets(res)
  })
},[])
  const renderTickets=()=>tickets.map(ticket=><Ticket key={ticket.id} title={ticket.title}
    content={ticket.content} labels={ticket.labels}/>)
  const search=(input)=>{
    let url="/api/tickets?searchText="+encodeURIComponent(input)
    fetch(url).then(res=>res.json()).then(res=>setTickets(res))
  }
  return (
    <main className="main">
      {renderTickets()}
      <PopUpSearch search={(input)=>search(input)}/>
    </main>
  );
}

export default App;
