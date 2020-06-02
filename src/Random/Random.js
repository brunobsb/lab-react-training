import React from 'react';
import './Random.css';

const random = ({min, max}) => {
min = Math.ceil(min);
max = Math.floor(max);
let result = Math.floor(Math.random() * (max -  min + 1)) + min;
if (max === 6){
    return <div className="randomBorder" >Ramdom value between 1 and 6 => {result}</div>; // perguntar sobre erro!
}
else{
    return <div className="randomBorder" >Ramdom value between 1 and 100 => {result}</div>;
}
};

export default random;