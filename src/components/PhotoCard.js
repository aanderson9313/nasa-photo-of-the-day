import React from "react";
import styled from "styled-components";


const NasaCard = styled.div `
    background-color: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white; 
`;

const NasaLogo = styled.div `
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
`;

const NasaImg = styled.img `
    display: flex;
    align-content: left;
    justify-content: left;
    height: 20%;
    width: 50%;
    border: 2px dotted red;
    border-radius: 50%;
    margin-left: 20%;
    margin-right: 20%;
`;

const NasaExp = styled.div `
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 15%;
    margin-right: 15%;
    text-align: justify;
    font-size: 16px;
`;

const LinkButton = styled.button`
    color: #61dafb;
    background: #003366;
    margin-top: 2%;
    border: 1px solid black;
    border-radius: 5%;
    font-size: 2rem;
`;

const PhotoCard = (props) => {
    console.log(NasaCard);
    return (

            <NasaCard>
                <NasaLogo>
                    <header>
                        <img src = "https://api.nasa.gov/assets/footer/img/favicon-192.png" alt = "nasa logo" />
                    </header>
                </NasaLogo>
                <h1>
                    {props.title}
                </h1>
                <h2>
                    {props.date}
                </h2>
                <NasaImg src = {props.url} alt = "NASA POTD"/>
                <LinkButton>Click Me! </LinkButton>
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