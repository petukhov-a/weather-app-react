class WeatherService {
    _apiBase = 'http://api.weatherapi.com/v1/forecast.json';
    _apiKey = 'f307338ed98942f6a28203223232406';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getCurrentWeather = async (location) => {
       const res = await this.getResource(`${this._apiBase}?key=${this._apiKey}&q=${location}&days=1&aqi=no&alerts=no`);
       return res.current;
    }
}

export default WeatherService;