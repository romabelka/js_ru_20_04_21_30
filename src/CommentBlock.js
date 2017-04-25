import React, {Component} from 'react'
import CommentList from './CommentList'

export default class CommentBlock extends Component {
	state = {
        isOpen: false
    }

    render() {
        const {comments} = this.props
        return (
			<div>
				
				{this.getBody()}
			</div>
        )
    }
	
	
	getBody() {
		if (!this.props.comments) return null;
		return (
			this.showComments(this.state.isOpen)
		)
	}
	
	showComments(show) {
		if (show) {
			return (
				<div onClick={this.toggleOpen}>
					<div>Скрыть комментарии</div>
					<CommentList comments={this.props.comments} />
				</div>
			)
		} else {
			return <div onClick={this.toggleOpen}>Показать комментарии</div>
		}
	}
	
	toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}