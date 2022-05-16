import axios from "axios";
import { KEY } from './localKey';

export const RelatedVideos = async (query) => {
    try {
//        let related = await axios.get (`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${KEY}&fields=items(id,snippet(channelId,title,description))&part=snippet&type=video`)
//        return related.data.items;
    }
    catch (err){
        console.log("Error getting related videos")
    }
}
