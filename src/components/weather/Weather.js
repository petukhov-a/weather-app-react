import CurrentWeather from "./currentWeather/CurrentWeather";
import Forecast from "./forecast/Forecast";

const Weather = ({location}) => {
    return (
        <div className="weather">
            <CurrentWeather location={location}/>
            <Forecast/>
        </div>
    )
}

export default Weather;