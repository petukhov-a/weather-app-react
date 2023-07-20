import Header from "../header/Header";
import SearchForm from "../searchForm/searchForm";
import CurrentWeather from "../currentWeather/CurrentWeather";

const App = () => {
    return (
        <div className="weather-app">
            <Header/>
            <SearchForm/>
            <CurrentWeather/>
        </div>
    );
}

export default App;