import React, {useState, useEffect} from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from 'axios';
import { CardGroup, Card, Row, Col } from "react-bootstrap";

const SearchPage = (props) => {

    let goToPage = useNavigate()

    function handleSubmit(video){
        let vid = video
        props.selection(vid)
        goToPage("/video")
    }
    
    return (
        <CardGroup>

            {props.videos.map((video, index) =>{
                return (
                    <div key="key={index}">
                    <Card text="light" bg="dark" style={{width: "60%", height: "60%", borderBlock:"1rem", textAlign:"center"}}>
                    <Card.Body>
                        <Card.Title>{video.snippet.title}</Card.Title>
                        <Card.Img varient="center"src={video.snippet.thumbnails.high.url}/>
                        <Card.Text><a href="#" onClick={()=>{handleSubmit(video)}}>Play</a></Card.Text>
                    </Card.Body>
                    </Card>
                    </div>
                )
            })}


        </CardGroup>
    )
}
export default SearchPage;