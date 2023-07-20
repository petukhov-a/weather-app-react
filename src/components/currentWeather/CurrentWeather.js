import './currentWeather.scss';

const CurrentWeather = () => {
    return (
        <div className="current">
            <div className="current-weather">
                <div className="current-weather-center">
                    <p className="current-weather-center__last-updated">12-08-2023</p>
                    <p className="current-weather-center__location">Moscow</p>
                    <img className="current-weather-center__icon-img"/>
                    <p className="current-weather-center__temperature">23</p>
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