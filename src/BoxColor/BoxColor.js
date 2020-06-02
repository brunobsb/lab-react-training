import React from 'react';
import './BoxColor.css';

const boxcolor = ({r, g, b}) => {
if(r === 255){

    return <div className="backbox" style={{backgroundColor:`rgb(${r}, ${g}, ${b})`, color:"white"}} > rgb({r},{g},{b}) </div>;
} 
else{
    return <div className="backbox" style={{backgroundColor:`rgb(${r}, ${g}, ${b})`, color:"black"}}>rgb({r},{g},{b})</div>;
}
    };

export default boxcolor;