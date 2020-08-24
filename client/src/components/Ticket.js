import React from "react";
import "./Ticket.css"
import {Button} from "@material-ui/core"

function Ticket(props){
    if (props.labels) {
        var labels = props.labels.map(label => {
            return (
                <Button variant="contained" color="primary" className="label">{label}</Button>
                    )
        })
    }

    return(
        <div className="ticket">
            <h1>{props.title}</h1>
            {props.content}
            <div className="labels">{labels}</div>
            
        </div>
    )
}

export default Ticket;