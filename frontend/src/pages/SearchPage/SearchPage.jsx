import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from 'axios';

const SearchPage = (props) => {
    const [vidID, setVidId] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        console.log(vidID)
    }
    console.log("testing search page", props.videos)
    return (
        <div className="container">
            {props.videos.map((video, index) =>{
                return (
                    <div className="card" key={index}>
                        <h4>{video.snippet.title}</h4>
                        <img src={video.snippet.thumbnails.high.url}/>
                        <h4>
                            <a href={`/${video.id.videoId}`} onClick={function(e){
                                setVidId(video.id.videoId); handleSubmit()
                            }}>Play</a>
                        </h4>
                    </div>
                )
            })}
        </div>
    )
}
export default SearchPage;