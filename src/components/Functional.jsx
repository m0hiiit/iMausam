import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import Navbar from "./Navbar";
import '../App.css';

const Functional = () => {
    const [value, getValue] = useState('');
    const [data, getData] = useState('');
    const [btnValue, getBtnValue] = useState(value)
    // const noida = "noida"
    const fetch_func = async () => {
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${btnValue}&appid=bb7c4ad32a38811f7814ed5ae3f70e43`);
        const get_api = await api.json();
        const { temp, feels_like, temp_min, temp_max, humidity, pressure } = get_api.main;
        const { visibility } = get_api;
        const { speed } = get_api.wind;
        const { main, description, icon } = get_api.weather[0];
        const { all } = get_api.clouds;
        const { sunrise, sunset } = get_api.sys;
        const { name } = get_api;
        const allData = {
            temp, feels_like, main, description, icon, temp_min, temp_max, humidity, pressure, visibility, speed, all, sunrise, sunset, name
        }
        getData(allData)
    }
    useEffect(() => {
        fetch_func()
    }, [btnValue]);
    return (
        <>
            <Navbar />
            < SearchBar
                value={value}
                getValue={getValue}
                getBtnValue={getBtnValue}
                data={data}
            />
        </>
    )
}
export default Functional;