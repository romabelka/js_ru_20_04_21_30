import React, {Component} from 'react'
import CommentBlock from './CommentBlock'

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
        isOpen: false
    }

    render() {
        const {article} = this.props
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
				
            </section>
        )
    }

    getBody() {
        return this.state.isOpen && 
				(<div>
					<p>{this.props.article.text}</p>
					<CommentBlock comments={this.props.article.comments} />
				</div>)
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}