import React, {useEffect, useState} from 'react';
import {fetchActualWeather} from "./provider";
import Gallery from './gallery';
import Choice from "./form";
import Card from "./card";
function App() {
    const [weather, setWeather] = useState();
    const [city, setCity] = useState('Ordzhonikidze');
    useEffect(() => {
        fetchActualWeather(city).then(res => {
            console.log(res.data);
            setWeather(res.data);
        })

    }, [city]);

    return (
        <div className="main">
            <Choice city={city} handleChange={(city )=>{
                setCity(city);
            }}/>
            {weather && <Card weather={weather}/>}
            {!weather && <p>Loading weather...</p>}
            <Gallery city={city} />

        </div>
    )
}

export default App;
