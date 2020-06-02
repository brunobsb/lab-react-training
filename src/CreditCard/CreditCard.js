import React from 'react';
import './CreditCard.css';
// import '../../public/img/visa.png';
// const logovisa = require("../../public/img/visa.png");


const creditcard = ({type, number, expirationMonth, expirationYear, bank,owner,bgColor,color}) => {
    
    switch (number){
        case "0123456789018845":
            return (<div className="card" style={{backgroundColor:`${bgColor}`, color:`${color}`}} >
                <div className="cardBanner" >{type}</div>
                <div className="cardNumber" >{number}</div> 
                <div className="cardText" > Expires 0{expirationMonth}/{expirationYear}  {bank} </div>
                <div className="cardText" >{owner}</div>
                </div>)
        case "0123456789010995":
            return <div className="card" style={{backgroundColor:`${bgColor}`, color:`${color}`}} > 
                <div className="cardBanner">{type}</div> 
                <div className="cardNumber" >{number}</div> 
                <div className="cardText" > Expires 0{expirationMonth}/{expirationYear}  {bank} </div>
                <div className="cardText" >{owner}</div>
                </div>;
        case "0123456789016984":
            return <div className="card" style={{backgroundColor:`${bgColor}`, color:`${color}`}} >
                <div className="cardBanner">{type}</div> 
                <div className="cardNumber" >{number}</div> 
                <div className="cardText" > Expires {expirationMonth}/{expirationYear}  {bank} </div>
                <div className="cardText" >{owner}</div>
                </div>;
        default:
            return <div className="card" style={{backgroundColor:`${bgColor}`, color:`${color}`}} >100</div>;
    }

    
};

export default creditcard;


