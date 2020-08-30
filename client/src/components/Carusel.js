import React, { useState, useEffect } from "react";
import "./Carusel.css";

function Carusel(props){
    const [items,setItems]=useState([]);
    const [styles,setStyles]=useState(Array(props.children.length).fill({}))
    useEffect(()=>{
        setStyles(getStyles())
    },[props.children])
    useEffect(()=>setItems(props.children.map((x,i)=><div key={i} style={styles[i]} className="carusel-element">{x}</div>)),[styles])
    function getStyles(){
        let elems=props.children
        let result=[]
        elems.forEach((element,i,slides) => {
            let style={}
            let R=400*slides.length/2.5
            let r=R/2
            const degree=(360/slides.length)*i
            const rad=degree*Math.PI/180
            let pos=Math.sin(rad)*(r)
            let ang=Math.sin(rad)*90
            let size=(10-(-1*Math.cos(rad)+1))/10
            let high=(-1*Math.cos(rad)+1)*-10
            style.transform="translateX("+pos+"px) translateY("+high+"%)  rotateY("+ang+"deg) scale("+size+")"
            style.zIndex=Math.round(Math.abs(degree-180))
            result.push(style)
        });
        console.log(result)
        return result;
    }
    
    function next(){
        setStyles(state=>{
            let styles=[...state]
            let first=styles.shift()
            styles.push(first)
            return styles;
        })
    }
    return(
        <div className="carusel">
            <div className="base">
                {items}
            </div>
            <button style={{position:"absolute",top:"-30px"}} onClick={()=>next()}>next</button>
        </div>
    )
}

export default Carusel;