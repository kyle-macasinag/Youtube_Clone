import React from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";
import CommentForm from "../../components/Comments/CommentForm/CommentForm";
import Comment from "../../components/Comments/Comment/Comment";
import DisplayRelatedVids from "../../components/VideoPlayer/VideoPlayer"
import {useState} from "react";

const DisplayVideo = ({ID, Title, Description, RelatedVideos, setRelatedVideos}) => {
    const[Posts, setComments] = useState([]);
    const header = Comment

function createNewComment(Comment){
    let tempComment = [Comment, ...Comment];
    setComments(tempComment);
}
return (
    <div>
        <div className="VideoAndTitle">
            <div className="Video">
                <iframe id={ID} />
            </div>
            <div className = "ButtonAndTitle">
                <h2>{Title}</h2><CustomButton/>
            </div>
        </div>
        <h5>{Description}</h5>
        <div className="Comments">
            <createNewComment createNewComment={createNewComment}/>
            <p>{header}</p>
            <Comment parentComments={Comment}/>
        </div>
    </div>
    
)
}

export default DisplayVideo;