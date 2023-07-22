import {useState, useEffect} from 'react';

import './hourlyForecast.scss'

const HourlyForecast = () => {
    return (
        <div class="forecast-hour-wrapper">
            <h3 class="forecast-hour-heading forecast-heading">Hourly forecast</h3>
            <div class="forecast-for-hours"></div>
        </div>
    );
}

export default HourlyForecast;