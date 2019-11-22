import React from "react";
import styled from "styled-components";


const NasaCard = styled.div `
text-align: center;
background: darkblue;
color: white;
`;
const NasaImg = styled.img `
display: flex;
align-content: center;
justify-content: center;
height: 20%;
width: 50%;
border: 2px dashed red;
border-radius: 45%;
`;




const PhotoCard = (props) => {
    console.log(NasaCard);
    return (
        <NasaCard>
            <h1>
                {props.title}
            </h1>
            <h2>
                {props.date}
            </h2>
            <NasaImg src = {props.url} alt = "NASA POTD"/>
        <NasaCard>
            <h3>
                Explanation
            </h3>
            <p>
                {props.explanation}
            </p>
        </NasaCard>
        </NasaCard>
    );
};

export default PhotoCard;