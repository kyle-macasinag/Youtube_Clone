import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Col, Row} from "react-bootstrap";
import { defaultVideos } from "../../defaultVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const HomePage = (props) => {

  
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);//SHOULD IT BE MODIFIED TO VIDEOS?

  return (
    <div className="container-flex">

    {Array.from({ length: 4 })}{props.videos[0] && props.videos[0].items.map((video) => (
    <div key ={video.id.videoId}>
    <h4>{video.snippet.title}</h4>
    <VideoPlayer parentVid={video.id.videoId}/>
    </div>
  ))}

    </div>
  );
};

export default HomePage;
