import React from "react";
import "./Ticket.css"
import {Button} from "@material-ui/core"

function Ticket(props){

    if (props.labels) {
        var labels = props.labels.map((label,i) => {
            return (
                <Button key={i} variant="contained" color="primary" className="label">{label}</Button>
                    )
        })
    }
    return(
        <div className="ticket">
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