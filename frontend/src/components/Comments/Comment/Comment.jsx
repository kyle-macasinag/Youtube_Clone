import React, { useState, useEffect } from 'react';
import CustomButton from '../../CustomButton/CustomButton';
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
                user: props.user,
                video_id: props.videoId,
                text: props.comment,
                likes: props.likes +1,
                dislikes: props.dislikes
            }
            try{
                let result = await axios.put(`http://127.0.0.1:8000/api/comments/${props.id}/update/`, body, {
                    headers: {
                        Authorization: "Bearer " + token
                    }})
            }
            catch(err){
                console.log('Error liking a post')
            }
            }
        else if (dislike === true){
            body = {
                user: props.user,
                video_id: props.videoId,
                text: props.comment,
                likes: props.likes,
                dislikes: props.dislikes + 1
            }
            try{
                let result = await axios.put(`http://127.0.0.1:8000/api/comments/${props.id}/update/`, body, {
                    headers: {
                        Authorization: "Bearer " + token
                    }})
            }
            catch(err){
                console.log('Error disliking a post')
            }
        }
        
    }
    useEffect(()=>{
        likeDislike()
    }, [like, dislike])

    return(<div className='container'>
        <h5>{props.user}</h5>
        <div>{props.comment}</div>
        <button 
            className="btn btn-primary"
            onClick={() => setLike(true)}>
                Like {props.likes}
        </button>
        <button
            className="btn btn-primary"
            onClick={() => setDislike(true)}>
                Dislike {props.dislikes}
        </button>
    </div>)
}

export default Comment;