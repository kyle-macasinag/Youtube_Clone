import React from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = (props) => {

    return (
        <div>
            <iframe src={`https://www.youtube.com/embed/${props.parentVid}`}width="500" height="500"></iframe>
        </div>
    )
};

export default VideoPlayer;