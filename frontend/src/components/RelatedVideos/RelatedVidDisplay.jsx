// import RelatedVidRender from "./RelatedRender";
// import RelatedVideos from "../../utils/RelatedVideos";

// const DisplayRelatedVids = ({id, setRelatedVid, RelatedVid}) => {

//     const searchRelatedVid = async () => {
//         RelatedVideos(id).then((videos) => setRelatedVid(videos));
//     }

//     return (
//         <form onSubmit={(e) =>{
//             e.preventDefault();
//         }} className="RelatedVideo">
//             <button onClick={searchRelatedVid}>Related Videos</button>
//             <RelatedVidRender RelatedVid={RelatedVid}/>
//         </form>
//     )
// }
// export default DisplayRelatedVids;