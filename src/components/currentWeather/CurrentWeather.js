import {useState ,useEffect, useCallback} from 'react';
import './currentWeather.scss';
import WeatherService from "../../services/WeatherService";

const CurrentWeather = (props) => {
    const weatherService = new WeatherService();
    const [currentWeather, setCurrentWeather] = useState({});
    const [location, setLocation] = useState('Moscow');

    useEffect(() => {
        onRequest();
    }, []);

    const onCurrentWeatherLoaded = (dataWeather) => {
        setCurrentWeather(dataWeather);
    }

    console.log(currentWeather);

    const onRequest = () => {
        weatherService.getCurrentWeather(location)
            .then(onCurrentWeatherLoaded);
    }

    return (
        <div className="current">
            <div className="current-weather">
                <div className="current-weather-center">
                    <p className="current-weather-center__last-updated"><span>Last updated</span><br/>12-08-2023</p>
                    <p className="current-weather-center__location">{location}</p>
                    <img className="current-weather-center__icon-img"/>
                    <p className="current-weather-center__temperature">{currentWeather.temp_c}°C</p>
                </div>
                <div className="current-weather-left">
                    <p className="current-weather-left__feels"><span>Feels like</span>100</p>
                    <p className="current-weather-left__rain-chance"><span>Rain chance</span>100%</p>

                </div>
                <div className="current-weather-right">
                    <p className="current-weather-right__wind-speed"><span>Wind speed</span>15 км/ч</p>
                    <p className="current-weather-right__visibility-km"><span>Visibility</span>10км</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;