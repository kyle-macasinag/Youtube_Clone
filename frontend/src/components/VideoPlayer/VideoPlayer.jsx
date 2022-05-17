import React from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = (props) => {

    return (
        <div>
            <iframe src={`https://www.youtube.com/embed/${props.parentVid}`}></iframe>
        </div>
    )
};

export default VideoPlayer;