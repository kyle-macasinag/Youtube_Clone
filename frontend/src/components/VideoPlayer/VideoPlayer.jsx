import React from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = (props) => {

    return (
        <div>
            <iframe src={`https://www.youtube-nocookie.com/embed/${props.parentVid}`} width={props.width} height={props.height}></iframe>
        </div>
    )
};

export default VideoPlayer;