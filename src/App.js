import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PhotoCard from "./components/PhotoCard";


function App() {
  const [nasaPhoto, setNasaPhoto] = useState([]);
  useEffect(() => {

    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response.data);
        setNasaPhoto(response.data);
      });
      
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Nasa Photo Of The Day</h1>
      </header>
      <PhotoCard title = {nasaPhoto.title} url = {nasaPhoto.url} explanation = {nasaPhoto.explanation} date = {nasaPhoto.date} />
    </div>
  );
}

export default App;
