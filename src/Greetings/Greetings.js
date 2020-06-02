import React from 'react';
import './Greetings.css';

const greetings = ({lang, children}) => {

if(lang === "de"){
    return <div className="greetBorder" >Hallo {children}</div>;
}
else{
    return <div className="greetBorder" >Bonjour {children}</div>
}

};

export default greetings;

