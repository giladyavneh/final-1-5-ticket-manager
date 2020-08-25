import React from "react";

function Counter(props){
    
    return(
        props.count>0?
        <div>there are <span id="hideTicketsCounter">{props.count}</span> hidden tickets <button id="restoreHideTickets" onClick={props.restore}>restore</button></div>:
        <div></div>
    )
}

export default Counter;