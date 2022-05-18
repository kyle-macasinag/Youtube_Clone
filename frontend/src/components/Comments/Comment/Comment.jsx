import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../../../hooks/useAuth";

const Comment = (props) => {

    const [user, token] = useAuth();

    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)
    
    async function likeDislike(){
        let body = {}
        if (like === true){
            body = {
                user: user.id,
                video_id: props.comment.video_id,
                text: props.comment.text,
                likes: props.comment.likes +1,
                dislikes: props.comment.dislikes
            }
            try{
                let result = await axios.put(`http://127.0.0.1:8000/api/comments/${props.comment.id}/update/`, body, {
                    headers: {
                        Authorization: "Bearer " + token
                    }})
                console.log(result)
            }
            catch(err){
                console.log('Error liking a post')
            }
            }
        else if (dislike === true){
            body = {
                user: user.id,
                video_id: props.comment.video_id,
                text: props.comment.text,
                likes: props.comment.likes,
                dislikes: props.comment.dislikes + 1
            }
            try{
                let result = await axios.put(`http://127.0.0.1:8000/api/comments/${props.comment.id}/update/`, body, {
                    headers: {
                        Authorization: "Bearer " + token
                    }})
                console.log(result)
            }
            catch(err){
                console.log('Error disliking a post')
            }
        }
        if (Response.status === 200){
            await props.getComments(props.vidId)
        }  
    }
    useEffect(()=>{
        likeDislike(); console.log('useEffect in Comment ran')
    }, [like, dislike]);

    return(<div className='container'>
        <button 
            className="btn btn-primary"
            onClick={() => setLike(true)}>
                Like {props.comment.likes}
        </button>
        <button
            className="btn btn-primary text-align=right"
            onClick={() => setDislike(true)}>
                Dislike {props.comment.dislikes}
        </button>
    </div>)
}

export default Comment;