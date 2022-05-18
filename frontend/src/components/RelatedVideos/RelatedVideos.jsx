
const RelatedVideos = (props) => {
    function handleClick(videoId){
        props.pickVideo(videoId)
    }
    return(
        <div className="container">
            <h2>Related Videos</h2>
            {props.relatedVids &&
                props.relatedVids.map((video)=>{
                return (<p key={video.id.videoId}>
                    {video.snippet.title}
                    <img src={video.snippet.thumbnails.medium.url} onClick={() => {handleClick(video.id.videoId)}}/>
                </p>
            )})}
        </div>
    )



}
export default RelatedVideos;