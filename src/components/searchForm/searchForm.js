import './searchForm.scss';

const SearchForm = () => {
    return (
        <form className="search-form">
            <input type="text" className="search-form__input" placeholder="Enter Location Name"/>
        </form>
    );
}
export default SearchForm;