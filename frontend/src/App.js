// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, {useState} from "react";

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
  const [videoId, setVideoId] = useState("")
  const [vidDescription, setVidDescription] = useState("")
  const [vidTitle, setVidTitle] = useState("")



  return (
    <div>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
