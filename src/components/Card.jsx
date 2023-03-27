import wind from "../images/wind.png";
import humidity from "../images/humidity.png";
import clouds from "../images/clouds.png";
import minimum from "../images/minimum.png";
import maximum from "../images/maximum.png";
import pressure from "../images/pressure.png";
import sunrise from "../images/sunrise.png";
import sunset from "../images/sunset.png";
import visibility from "../images/visibility.png";
import '../App.css';


const Card = ({ data }) => {
    return (
        <>
            {!data ? <p></p> : (
                <div className="container">
                    <div className="card mbName-3 bg-transparent bg">
                        <div className="card-body text-center mt-2 flex-class">
                            <div className="first">
                                <h1 className="fw-bolder">{(data.temp - 273.15).toFixed(2)}˚C</h1>
                                <p className="card-title">Feels like {(data.feels_like - 273.15).toFixed(2)}˚C</p>
                            </div>
                            <div className="second">
                                <img src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`} className="img-fluid rounded mx-auto d-block" alt="icon" />
                            </div>
                        </div>
                        <div className="card-body text-center mb-5">
                            <p className="card-title">{data.description.toUpperCase()}</p>
                            <h1 className="card-text fw-bolder">{data.name}</h1>
                        </div>
                    </div>
                    <div className="container d-flex justify-content-center flex-wrap">
                        <div className="card text-center mb-3 m-1 bg-group" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <img src={minimum} className="img-fluid rounded mx-auto d-block image-size mt-3 mb-3" alt="icon" />
                                <p className="card-text">{"minimum temperature".toUpperCase()}</p>
                                <a className="btn min-col ">{(data.temp_min - 273.15).toFixed(2)}˚C</a>
                            </div>
                        </div>
                        <div className="card text-center mb-3 m-1 bg-group" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <img src={maximum} className="img-fluid rounded mx-auto d-block image-size mt-3 mb-3" alt="icon" />
                                <p className="card-text">{"maximum temperature".toUpperCase()}</p>
                                <a className="btn max-col ">{(data.temp_max - 273.15).toFixed(2)}˚C</a>
                            </div>
                        </div>
                        <div className="card text-center mb-3 m-1 bg-group" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <img src={wind} className="img-fluid rounded mx-auto d-block image-size mt-3 mb-3" alt="icon" />
                                <p className="card-text">{"wind speed".toUpperCase()}</p>
                                <a className="btn wind-col">{data.speed} m/s</a>
                            </div>
                        </div>

                        <div className="card text-center mb-3 m-1 bg-group" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <img src={sunrise} className="img-fluid rounded mx-auto d-block image-size mt-3 mb-3" alt="icon" />
                                <p className="card-text">{"Sunrise".toUpperCase()}</p>
                                <a className="btn min-col ">{`${new Date(data.sunrise * 1000).getHours()}:${new Date(data.sunrise * 1000).getMinutes()}:${new Date(data.sunrise * 1000).getSeconds()} AM`}</a>
                            </div>
                        </div>
                        <div className="card text-center mb-3 m-1 bg-group" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <img src={sunset} className="img-fluid rounded mx-auto d-block image-size mt-3 mb-3" alt="icon" />
                                <p className="card-text">{"Sunset".toUpperCase()}</p>
                                <a className="btn min-col ">{`${new Date(data.sunset * 1000).getHours()}:${new Date(data.sunset * 1000).getMinutes()}:${new Date(data.sunset * 1000).getSeconds()} PM`}</a>
                            </div>
                        </div>

                        <div className="card text-center mb-3 m-1 bg-group" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <img src={humidity} className="img-fluid rounded mx-auto d-block image-size mt-3 mb-3" alt="icon" />
                                <p className="card-text">{"humidity".toUpperCase()}</p>
                                <a className="btn humidity-col ">{data.humidity}%</a>
                            </div>
                        </div>
                        <div className="card text-center mb-3 m-1 bg-group" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <img src={clouds} className="img-fluid rounded mx-auto d-block image-size mt-3 mb-3" alt="icon" />
                                <p className="card-text">{"clouds".toUpperCase()}</p>
                                <a className="btn cloud-col ">{data.all}%</a>
                            </div>
                        </div>
                        <div className="card text-center mb-3 m-1 bg-group" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <img src={pressure} className="img-fluid rounded mx-auto d-block image-size mt-3 mb-3" alt="icon" />
                                <p className="card-text">{"Air pressure".toUpperCase()}</p>
                                <a className="btn pres-col ">{data.pressure} hPa</a>
                            </div>
                        </div>
                        <div className="card text-center mb-3 m-1 bg-group" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <img src={visibility} className="img-fluid rounded mx-auto d-block image-size mt-3 mb-3" alt="icon" />
                                <p className="card-text">{"visibility".toUpperCase()}</p>
                                <a className="btn vis-col ">{data.visibility / 1000} KM</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Card;

