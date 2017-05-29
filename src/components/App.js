import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticlesPage from '../route_handlers/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters/index'
import Counter from './Counter'
import CommentsPage from '../route_handlers/CommentsPage'
import NotFoundPage from '../route_handlers/NotFoundPage'
import {Redirect, Route, NavLink, Switch} from 'react-router-dom'
import {ConnectedRouter as Router} from 'react-router-redux'
import history from '../history'

class App extends Component {
    static propTypes = {
    };

    state = {
        username: ''
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    handleUserChange = username => this.setState({ username })

    render() {
        return (
            <Router history = {history}>
                <div>
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                    <ul>
                        <li><NavLink to = '/counter' activeStyle = {{color: 'red'}}>Counter</NavLink></li>
                        <li><NavLink to = '/filters' activeStyle = {{color: 'red'}}>Filters</NavLink></li>
                        <li><NavLink to = '/articles' activeStyle = {{color: 'red'}}>Articles</NavLink></li>
                    </ul>

                    <Switch>
                        <Route path = '/counter' component = {Counter} exact />
                        <Route path = '/filters' component = {Filters}/>
                        <Route path = '/articles/new' render = {this.getNewArticleComponent}/>
                        <Route path = '/articles' component = {ArticlesPage}/>
                        <Route path = '/comments' component = {CommentsPage} />
                        <Route path = '*' component = {NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        )
    }

    getNewArticleComponent = () => {
        return <h2>New Article Component</h2>
    }
}

export default App