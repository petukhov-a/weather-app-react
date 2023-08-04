import { useState } from "react";
import Header from "../header/Header";
import SearchForm from "../searchForm/searchForm";
import Weather from "../weather/Weather";

const App = () => {

    const [location, setLocation] = useState('Moscow');

    const onLocationInput = (location) => {
        setLocation(location);
    }

    return (
        <div className="weather-app">
            <Header/>
            <SearchForm onLocationInput={onLocationInput}/>
            <Weather location={location}/>
        </div>
    );
}

export default App;