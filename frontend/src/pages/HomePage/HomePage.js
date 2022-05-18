import React from "react";
import useAuth from "../../hooks/useAuth";
import Card from 'react-bootstrap/Card';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { CardGroup } from "react-bootstrap";

const HomePage = (props) => {

  
  const [user, token] = useAuth();


  return (
    <CardGroup>
      
    {Array.from({ length: 4 })}{props.videos[0] && props.videos[0].items.map((video) => (
    <div key ={video.id.videoId}>
    <Card text="light" bg="dark" style={{width: "25rem", padding:"1rem", border:"5rem", paddingLeft:"4rem"}}>
    <Card.Body>
    <Card.Title><h4>{video.snippet.title}</h4></Card.Title>
    <Card.Text><VideoPlayer parentVid={video.id.videoId} width="100%" height="300px"/></Card.Text>
    </Card.Body>
    </Card>
    </div>
  ))}
    </CardGroup>
  );

};

export default HomePage;
