import React from 'react';
import './ClickablePicture.css'


const clickablepicture = ({img, imgClicked, switchImg, addMethod1, addMethod2}) => {

return (
    <div className="spacing" >
    {
        switchImg
        ? <img onClick={addMethod1} src={imgClicked} alt="" ></img>
        : <img onClick={addMethod2} src={img} alt="" ></img>
        
    }
    </div>
)}

export default clickablepicture;