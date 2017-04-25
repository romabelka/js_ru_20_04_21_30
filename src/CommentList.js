import React from 'react'
import Comment from './Comment'

export default function CommentList({comments}) {
    if(!comments){
        return null
    }
    const comment = comments.map((comment)=> <div key={comment.id}><Comment comment={comment}/></div>)
    return (
        <div>
        {comment}
        </div>
    )
}