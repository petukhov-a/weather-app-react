import { useState } from 'react';
import './searchForm.scss';

const SearchForm = ({onLocationInput}) => {
    const [location, setLocation] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        onLocationInput(location);
    }

    const onInput = (e) => {
        setLocation(e.target.value);
    }

    return (
        <form className="search-form" onSubmit={(e) => onFormSubmit(e)}>
            <input onChange={e => onInput(e)} type="text" className="search-form__input" placeholder="Enter Location Name"/>
        </form>
    );
}
export default SearchForm;