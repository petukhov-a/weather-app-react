import {useState ,useEffect, useCallback} from 'react';
import './currentWeather.scss';
import WeatherService from "../../../services/WeatherService";

const CurrentWeather = ({location}) => {
    const weatherService = new WeatherService();
    const [currentWeather, setCurrentWeather] = useState({});
    const [active, setActive] = useState(false);

    useEffect(() => {
        onRequest();
    }, []);

    const onCurrentWeatherLoaded = (dataWeather) => {
        setCurrentWeather(dataWeather);
    }

    const onRequest = () => {
        weatherService.getCurrentWeather(location)
            .then(onCurrentWeatherLoaded);
    }

    const onLocationClick = () => {
        setActive(prev => !prev);
    }

    const clazz = active ? ' active' : '';

    return (
        <div className="current">
            <div className="current-weather">
                <div className="current-weather-center">
                    <p className="current-weather-center__last-updated"><span>Last updated</span><br/>{currentWeather.last_updated}</p>
                    <button onClick={onLocationClick} className="current-weather-center__location">{location}</button>
                    <img className="current-weather-center__icon-img"/>
                    <p className="current-weather-center__temperature">{currentWeather.temp_c}°C</p>
                </div>
                <div className={"current-weather-left current-weather-side" + clazz}>
                    <p className="current-weather-left__feels"><span>Feels like</span>{currentWeather.feelslike_c}°C</p>
                    <p className="current-weather-left__rain-chance"><span>Humidity</span>{currentWeather.humidity}%</p>

                </div>
                <div className={"current-weather-right current-weather-side" + clazz}>
                    <p className="current-weather-right__wind-speed"><span>Wind speed</span>{currentWeather.wind_kph} km/h</p>
                    <p className="current-weather-right__visibility-km"><span>Visibility</span>{currentWeather.vis_km} km</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;