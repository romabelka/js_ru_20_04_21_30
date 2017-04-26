import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false,
        commentOpen: false
    }

    render() {
        const {article} = this.props
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
                <h5 onClick={this.toggleOpenComment}>{this.state.commentOpen ? "Close Coments" : "Open Coments"}</h5>
                {this.state.commentOpen ? <CommentList comments={article.comments}/>: null}
            </section>
        )
    }
            //{this.getComment(article.comments)}

    getBody() {
        return this.state.isOpen && <div>{this.props.article.text}</div>
    }
    // getComment(comment) {
    //     return this.state.commentOpen && <CommentList comments={comment}/>
    // }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    toggleOpenComment = (ev) => {
        this.setState({
            commentOpen: !this.state.commentOpen
        })
    }
}