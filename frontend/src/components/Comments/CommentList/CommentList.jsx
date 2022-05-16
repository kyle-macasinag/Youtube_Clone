import React from 'react';
import Comment from '../Comment/Comment';

const CommentList = (props) => {

    useEffect(() => {
        props.getVidComments(props.videoId)
    }, [])

    return (
        <div className='container'>
            <h4>Comments</h4>
            {props.comments.map((el) => {
                return (
                    <div key={el.id}>
                    <Comment user={el.user.username} videoId={el.video_id} comment={el.text} likes={el.likes} dislikes={el.dislikes}/>
                    </div>
                )
            })}
        </div>
    )
}