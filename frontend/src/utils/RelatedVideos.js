import axios from "axios";
import { KEY } from './localKey';

export const RelatedVideos = async (query) => {
    try {
       let related = await axios.get (`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${query}&type=video&key=${KEY}')  
       relatedToVideoId={VIDEO`)
       return related.data.items;
    }
    catch (err){
        console.log("Error getting related videos")
    }
}

export default RelatedVideos