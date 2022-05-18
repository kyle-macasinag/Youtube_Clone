import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Reply } from '../Reply/Reply';
import ReplyForm from '../ReplyForm/ReplyForm';

const ShowReplies = (props) => {
    const [replies, setReplies] = useState([])
    const [user, token] = useAuth()

    async function getReplies (commentId){
        try {
            let result = await axios.get(`http://127.0.0.1:8000/api/reply/${commentId}/`, {
                headers: {
                    Authorization: "Bearer " + token
                }})
            if (result.data !== undefined){
                setReplies(result.data)
            }
        }
        catch(err){
            console.log("Error getting replies")
        }
    }

    useState(()=>{
        getReplies(props.commentId)
    },[])

    return(
        <div className="container">
            <h4>Replies</h4>
            <div>
                {replies.map((el)=> {
                    return (
                        <div key={el.id}>
                        <Reply reply={el} />
                        </div>
                    )
                })}
            </div>
            <ReplyForm commentId={props.commentId}/>
        </div>
    )



    
    


}
export default ShowReplies;