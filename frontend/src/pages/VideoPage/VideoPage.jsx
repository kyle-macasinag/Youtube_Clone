import React from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
//import DisplayRelatedVids from "../../components/RelatedVideos/RelatedVidDisplay";
import CommentForm from "../../components/Comments/CommentForm/CommentForm";
import CommentList from "../../components/Comments/CommentList/CommentList";



const VideoPage = (props) => {
    return (
        <div className="container">
            <div key ={props.pickedVid.id.videoId}>
                <h4>{props.pickedVid.snippet.title}</h4>
                <VideoPlayer parentVid={props.pickedVid.id.videoId}/>
                <p>{props.pickedVid.snippet.description}</p>
            </div>
        </div>
    )
}
export default VideoPage;