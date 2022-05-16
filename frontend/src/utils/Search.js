import axios from "axios";
import { KEY } from './localKey';

export const SearchVideos = async (query = '') => {
    try {
//        let results = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${KEY}&fields=items(id,snippet(channelId,title,description))&part=snippet&type=video`)
//        return results
    }
    catch (err) {
        console.log('error getting search')
    }
}
