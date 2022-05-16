import { SearchVideos } from "../../utils/Search";
import { Link } from "react-router-dom";

const Searchbar = ({searchParam, setSearchParam, setVideo}) => {
    const setSearchParms = (event) => {
        const searchWords = event.target.value;
        setSearchParam(searchWords)
    };
    const search = () => {
        SearchVideos(searchParam).then((videos) => setVideo(videos));
    };


    return <div className="search">searchbar</div>;
    <div>
        <form
        className="form-inline"
        onSubmit={(e) => {
            e.preventDefault();
        }}>
        <input className="form-control" 
        type="text" 
        placeholder="Search" 
        onChange={setSearchParam} 
        aria-label="Search Bar"/>
        <link to="/main"><button onClick={search}>
        <i class="bi bi-search"/>
        </button>
        </link>
        </form>
    </div>

}

export default Searchbar;