import React, {Component} from 'react'

export default class Comment extends Component{
    state = {
        isOpen: false
    }

    render() {
        const {comment} = this.props
        return (
            <section>
                <div>***************************************************</div>
                <div>
                    {comment.user}
                </div>
                <div>***************************************************</div>
                <div>
                    {comment.text}
                </div>
            </section>
        )
    }

    // getBody() {
    //     return this.state.isOpen && <div>{this.props.article.text}</div>
    // }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}