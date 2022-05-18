import React, {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './SearchBar.css'
const SearchBar = (props) => {
    const [searchParam, setSearchParam] = useState("")
    const goToPage = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        props.updateSearchParams(searchParam)
        goToPage("/search")
    }
    return (
        <div className='container'>
            <form className="form-group" onSubmit={handleSubmit}>
                <input type="text" value={searchParam} onChange={(e) => setSearchParam(e.target.value)}/>
                <button className='btn btn-primary'>Search</button>
            </form>
        </div>
    )

}

export default SearchBar;