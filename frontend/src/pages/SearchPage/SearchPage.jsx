import React, {useState, useEffect} from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from 'axios';

const SearchPage = (props) => {

    let goToPage = useNavigate()

    function handleSubmit(video){
        let vid = video
        props.selection(vid)
        goToPage("/video")
    }
    
    return (
        <div className="container">
            {props.videos.map((video, index) =>{
                return (
                    <div className="card" key={index}>
                        <h4>{video.snippet.title}</h4>
                        <img src={video.snippet.thumbnails.high.url}/>
                        <a href="#" onClick={()=>{handleSubmit(video)}}>Play</a>
                    </div>
                )
            })}
        </div>
    )
}
export default SearchPage;