import React, {useState} from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import useCustomForm from "../../../hooks/useCustomForm";
import { Navigate, useNavigate } from "react-router-dom"

let defaultData = {
    user: "3",
    comment: "3",
    text: "",
}

const ReplyForm = (props) => {

    const [user, token] = useAuth();
    
    const [replyData, handleChange, handleSubmit] = useCustomForm(
        defaultData,
        addNewReply
    );

    async function addNewReply(){
        try{
            let results = await axios.post(`http://127.0.0.1:8000/api/reply/${props.commentId}/`, replyData, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
        }
        catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div className = "container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                Leave a Reply:
                <input type="text" name="text" value={replyData.text} onChange={handleChange}/>
                </label>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default ReplyForm;