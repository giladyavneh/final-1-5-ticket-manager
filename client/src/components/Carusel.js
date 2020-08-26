import React, { useState, useEffect } from "react";
import "./Carusel.css";

function Carusel(props){
    const [items,setItems]=useState([])
    useEffect(()=>{
        const elements=props.children.map((item,i,slides)=>{
            return renderItem(item,i,slides,true)
        })
        setItems(elements)
    },[])
    
    function renderItem(item,i,slides,initial=false){
        debugger;
        let style={}
            let R=400*slides.length/2
            let r=R/2
            const degree=(360/slides.length)*i
            const rad=degree*Math.PI/180
            let pos=Math.sin(rad)*(r)
            let ang=Math.sin(rad)*90
            let size=(10-(-1*Math.cos(rad)+1))/10
            let high=(-1*Math.cos(rad)+1)*-10
            style.transform="translateX("+pos+"px) translateY("+high+"%)  rotateY("+ang+"deg) scale("+size+")"
            style.zIndex=Math.round(Math.abs(degree-180))
            return <div key={i} index={i} style={style} className="carusel-element">{initial?item:item.props.children}</div>
    }
    function next(){
        setItems(slides=>{
             return slides.map((item,i,slides)=>{
                let index=item.props.index
                let elem=renderItem(item,index+1===slides.length?0:index+1,slides)
                return elem;
             })
        })
    }
    return(
        <div className="carusel">
            <div className="base">
                {items}
            </div>
            <button onClick={next}>next</button>
        </div>
    )
}

export default Carusel;