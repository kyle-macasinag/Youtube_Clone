import React, { useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CommentForm from "../../components/Comments/CommentForm/CommentForm";
import CommentList from "../../components/Comments/CommentList/CommentList";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import { Col, Row, Container } from "react-bootstrap";



const VideoPage = (props) => {
    const videoId = props.pickedVid.id.videoId
    
    useEffect(()=>{
        props.getComments(videoId);
    },[props.pickVideo])

    return (
        <Container>
            <Row>
            <Col sm={8} key ={props.pickedVid.id.videoId}>
                <div>
                <h4>{props.pickedVid.snippet.title}</h4>
                </div>
                <div>
                <VideoPlayer parentVid={props.pickedVid.id.videoId} width="75%" height="500px"/>
                </div>
                <div>
                <p>{props.pickedVid.snippet.description}</p>
                </div>
            
            <CommentList comments={props.comment} getComments={props.getComments} vidId={props.pickedVid.id.videoId}/>
            <CommentForm></CommentForm>
            </Col> 
            <Col sm={4}>
            <div>
                <RelatedVideos relatedVids={props.videos} getRelated={props.getRelated} pickVideo={props.pickVideo}/>
            </div>
            </Col>
            </Row>
        </Container>

    )
}
export default VideoPage;