import React, {useState} from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import useCustomForm from "../../../hooks/useCustomForm";
import { Navigate, useNavigate } from "react-router-dom"


let defaultData = {
    user: "3",
    video_id: "gkBqVVbnZ1c",
    text: "",
    likes: "0",
    dislikes: "0"
}

const CommentForm = (props) => {
    const [user, token] = useAuth();
    const [commentData, handleChange, handleSubmit] = useCustomForm(
        defaultData,
        addNewComment
    );
    const nav = useNavigate();

    async function addNewComment(){
        try{
            let results = await axios.post('http://127.0.0.1:8000/api/comments/', commentData, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
        nav("/")
        }
        catch (err) {
            console.log('Error posting comment')
        }
    }
    return (
        <div className = "container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Comment: [" "]
                    <input type="text" name="text" value={commentData.text} onChange={handleChange}/>
                </label>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default CommentForm