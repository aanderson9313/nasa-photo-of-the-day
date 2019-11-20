import React from "react";


const PhotoCard = (props) => {
    
    return (
        <div>
            <h1>
                {props.title}
            </h1>
            <h2>
                {props.date}
            </h2>
            <img src = {props.url} alt = "NASA Photo of the Day"/>
        <div>
            <h3>
                Explanation
            </h3>
            <p>
                {props.explanation}
            </p>
        </div>
        </div>
    );
};

export default PhotoCard;