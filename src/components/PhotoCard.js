import React from "react";
import styled from "styled-components";


const NasaCard = styled.div `
text-align: center;
background: black;
color: white;
`;

const NasaImg = styled.img `
display: flex;
align-content: center;
justify-content: center;
height: 20%;
width: 50%;
border: 2px dashed red;
border-radius: 50%;
margin-left: 25%;
`;

const NasaExp = styled.div `
display: flex;
flex-direction: column;
color: white;
`;



const PhotoCard = (props) => {
    console.log(NasaCard);
    return (

            <NasaCard>
                <div>
                    <header>
                        <img src = "https://api.nasa.gov/assets/footer/img/favicon-192.png" alt = "nasa logo" />
                    </header>
                </div>
                <h1>
                    {props.title}
                </h1>
                <h2>
                    {props.date}
                </h2>
                <NasaImg src = {props.url} alt = "NASA POTD"/>
                <NasaExp>
                    <h3>
                        Explanation
                    </h3>
                    <p>
                        {props.explanation}
                    </p>
                </NasaExp>
         </NasaCard>
    );
};

export default PhotoCard;