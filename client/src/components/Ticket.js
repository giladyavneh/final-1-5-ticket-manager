import React, {useState, useEffect} from 'react';
import "./Ticket.css"

function Ticket(props){
    const [klass,setKlass]=useState("ticket")
    if (props.labels) {
        var labels = props.labels.map(label => {
            return (
                <span className="label">{label}</span>
                 )
        })
    }
    useEffect(()=>setKlass("ticket"),[props.restore])

    const hide=()=>{
        setKlass("hiddenTicket")
        props.increaseCounter()
    }

    return(
        <div className={klass} >
            <button className="hideTicketButton" onClick={hide}>Hide</button>
            <h1>{props.title}</h1>
            <div className="content">{props.content}</div>
            <div className="footer">
                <div className="info">
                    <span>{props.email}</span> | <span>{props.time}</span>
                </div>
                <div className="labels">{labels}</div>
            </div>

            
        </div>
    )
}

export default Ticket;