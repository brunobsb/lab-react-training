import React from 'react';
import './DriverCard.css';


const drivercard = ({name, rating, img, car }) => {
if(name === "Dara Khosrowshahi"){
    return (
    <div className="driverbox" >
            <div>
                <img src={img} alt="" className="roundimg1" />
            </div>
            <div>
                <div className="nameSize" >{name}</div>
                <div>{rating}</div>
                <div className="modelplateSize" >{car.model} - {car.licensePlate}</div>
            </div>
    </div>
        )}
else{
    return (
    <div className="driverbox" >
            <div>
                <img src={img} alt="" className="roundimg2" />
            </div>
            <div>
                <div className="nameSize" >{name}</div>
                <div>{rating}</div>
                <div className="modelplateSize" >{car.model} - {car.licensePlate}</div>
                
            </div>
    </div>
    )}

}

export default drivercard;