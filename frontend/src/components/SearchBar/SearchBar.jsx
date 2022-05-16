import React, {useState} from 'react';
import { SearchVideos } from "../../utils/Search";

const SearchBar = () => {
    const [searchParam, setSearchParam] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        console.log(SearchVideos(searchParam))
    }
    return (
        <div className='container'>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={searchParam} onChange={(e) => setSearchParam(e.target.value)}/>
                <button className='btn btn-primary'>Search</button>
            </form>
        </div>
    )

}

export default SearchBar;