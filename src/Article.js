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
                <h5 onClick={this.toggleOpen}>Open Comments</h5>
                <CommentList comments={article.comments}/>
            </section>
        )
    }

    getBody() {
        return this.state.isOpen && <div>{this.props.article.text}</div>
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen,
            commentOpen: !this.state.commentOpen
        })
    }
}