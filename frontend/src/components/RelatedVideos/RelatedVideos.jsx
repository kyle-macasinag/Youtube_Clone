import iframe from "./VideoPlayer";
import React from "react";

const VideoCard = ({ id}) => {
    return (
        <div>
            <div style={{ width: "12rem" }}>
                <iframe id={id}/>
                <div>
                    {/*}
                </div>
            </div>
        </div>
    )
}