import React, { useEffect, useState } from 'react';
import ReplyForm from '../../Reply/ReplyForm/ReplyForm';
import ShowReplies from '../../Reply/ReplyList/ShowReplies';
import Comment from '../Comment/Comment';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import { Card } from 'react-bootstrap';

const CommentList = (props) => {

    useEffect(()=>{
        props.getComments(props.vidId);console.log('commentList useEffect ran')
    },[])

    return (

        <div className='container'>
            <h4>Comments</h4>
            {props.comments.map((el) => {
                return (
                    <Card text="light" bg="secondary" key={el.id} style={{width: '32rem'}}>
                        <Card.Body>
                        <Card.Title>{el.user.username}</Card.Title>
                        <Card.Text>{el.text}</Card.Text>
                        <Comment comment={el} vidId={el.video_id} getComments={props.getComments}/>
                        <ShowReplies commentId={el.id}/>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>

    )
}
export default CommentList;