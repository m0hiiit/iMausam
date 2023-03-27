import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import axios from "axios";
import '../App.css';


const option = {
    method: "GET",
    contentType: 'application/json'
};
const WeatherLocations = () => {
    const [lati, getLati] = useState()
    const [longi, getLongi] = useState()
    const [data, getData] = useState();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getLati(position.coords.latitude)
            getLongi(position.coords.longitude)
        })
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=bb7c4ad32a38811f7814ed5ae3f70e43`, option)
            .then((res) => {
                const { temp, feels_like, temp_min, temp_max, humidity, pressure } = res.data.main;
                const { visibility } = res.data;
                const { speed } = res.data.wind;
                const { main, description, icon } = res.data.weather[0];
                const { all } = res.data.clouds;
                const { sunrise, sunset } = res.data.sys;
                const { name } = res.data;
                const AllData = {
                    temp, feels_like, main, description, icon, temp_min, temp_max, humidity, pressure, visibility, speed, all, sunrise, sunset, name
                }
                getData(AllData)
            }).catch((error) => {
                console.log(error.name);
            })

    }, [lati, longi])
    return (
        <>
            <Navbar />
            <Card data={data} />
        </>
    )
}

export default WeatherLocations;