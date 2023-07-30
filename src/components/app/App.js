import { useState } from "react";
import Header from "../header/Header";
import SearchForm from "../searchForm/searchForm";
import CurrentWeather from "../currentWeather/CurrentWeather";

const App = () => {

    const [location, setLocation] = useState('Moscow');

    const onLocationInput = (location) => {
        setLocation(location);
    }

    return (
        <div className="weather-app">
            <Header/>
            <SearchForm onLocationInput={onLocationInput}/>
            <CurrentWeather location={location}/>
        </div>
    );
}

export default App;