import React, {Component} from 'react'

export default class Comment extends Component{

    render() {
        const {comment} = this.props
        return (
            <section>
                <div className="commentAuthor">
                    <b>{comment.user}</b>
                </div>
                <div className="commentText">
                    {comment.text}
                </div>
                    <hr/>
            </section>
        )
    }

}