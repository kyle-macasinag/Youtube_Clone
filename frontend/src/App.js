// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, {useState} from "react";
import axios from 'axios';
import { KEY } from './utils/localKey';
import { defaultVideos } from "./defaultVideos";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [searchParam, setSearchParam] = useState("")
  const [videos, setVideos] = useState([])
  const [relatedVids, setRelatedVids] = useState([])
  const [vidChoice, setVidChoice] = useState([])
  const defaultVids = useState(defaultVideos)
  const [comments, setComments] = useState([])

  // Get the Video based on a user search
  const SearchVideos = async (query = searchParam) => {
    try {
      let results = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${KEY}&fields=items(id,snippet(channelId,title,description,thumbnails))&part=snippet&type=video&maxResults=8`)
      setVideos(results.data.items)
    }
    catch (err) {
      console.log('Error getting search results')
    }
  }

  // Get the Comments for the Video
  const getVideoComments = async (videoId) => {
    try{
      let results = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/`);
      setComments(results.data)
    }
    catch (err) {
      console.log('Error getting video comments')
    }
  }

  // update the state of the searchParams and search the videos for it
  const updateParams = (searchParams) => {
    setSearchParam(searchParams);
    SearchVideos(searchParams);

  }

  function userChoice(vid) {
    let choice = videos.filter((el) => {
      if (el.id.videoId === vid.id.videoId) {
        return true;
      }
      else{
        return false;
      }
    })
    setVidChoice(vid)
    getVideoComments(vid.id.videoId)
  }

  return (
    <div>
      <Navbar />
      <SearchBar updateSearchParams={updateParams}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage videos={defaultVids}/>
            </PrivateRoute>
          }
        />
        <Route path="/search" element={<SearchPage videos={videos} selection={userChoice}/>} />
        <Route path="/video" element={<VideoPage pickedVid={vidChoice} comment={comments}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
