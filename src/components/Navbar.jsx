
import '../App.css';
import { useNavigate } from "react-router-dom";

const Navbar = ({clickEvent}) => {
    const YourWeatherBTN = useNavigate();
    const SearchWeatherBTN = useNavigate();
    const YourWeather = () => {
        YourWeatherBTN("/")
    }
    const SearchWeather = () => {
        SearchWeatherBTN("/Functional")
    }
    return (
        <>
            <div className='container d-flex justify-content-between align-items-center mt-5 width'>
                <button type="button" className="btn btn-primary btn-sm bg_color" onClick={() => {YourWeather() }}>Your Weather</button>
                <button type="button" className="btn btn-secondary btn-sm  bg_color"  onClick={() => { SearchWeather() }}>Search Weather</button>
            </div>
        </>
    )
}

export default Navbar;


