import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Col, Row} from "react-bootstrap";
import { defaultVideos } from "../../defaultVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const HomePage = (props) => {

  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
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
      {/* <container>
      <Row>
      <Col>
      <Card>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          
          </Card.Text>
        </Card.Body>
      </Card></Col>
      <Col>      <Card>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This can be the video description
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      </Row>
      </container> */}

      
    </div>
  );
};

export default HomePage;
