import React from 'react';
import './IdCard.css'
const idcard = (props) => {
    return (
        <div className="cardAlign" >
            <div>
            <img className="portrait" src={props.picture} alt="" ></img>
            </div>
            <div className="cardText" >
            <div>First name: {props.firstName}</div>
            <div>Last name: {props.lastName}</div>
            <div>Gender: {props.gender}</div>
            <div>Height: {props.height}m</div>
            <div>Birth: {props.gender}</div>
            </div>
        </div>
    )
}
export default idcard;