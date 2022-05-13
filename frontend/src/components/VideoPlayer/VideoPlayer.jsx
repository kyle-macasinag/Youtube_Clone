import React from "react";

const VideoPlayer = (Videos) => {
    return (
        <div className="dataResults">
            {Videos.map((value, index) => {
                return (
                    <div key={index}>
                        <div>{value.id.videoId}</div>
                        </div>
                );
            })}
        </div>
    );
};

export default VideoPlayer;