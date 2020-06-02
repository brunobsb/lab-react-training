import React from 'react';
import './LikeButton.css';

const likebutton = ({id, counter1, counter2, addMethod1, addMethod2}) => {


if(id === "button1"){
return    <button onClick={addMethod1} className="styleButton" >{counter1} Likes</button>
}
else {
return    <button onClick={addMethod2} className="styleButton" >{counter2} Likes</button>
}

};


export default likebutton;