import React, { Component } from 'react'
import { URL, KEY } from '../util'
import axios from 'axios'
import { connect } from 'react-redux'
import { getPostsAsync } from '../actions'

class NewPost extends Component {

    state = {
        id: undefined,
        timestamp: Date.now(),
        title: undefined,
        body: undefined,
        author: undefined,
        category: undefined,
        votescore: 0,
        deleted: false
    }

    onChangeTitle = (event) => {
        let newTitle = event.target.value
        this.setState({
            title: newTitle
        })
    }

    onChangeCategory = (event) => {
        let newCategory = event.target.value
        this.setState({
            category: newCategory
        })
    }

    onChangeBody = (event) => {
        let newContent = event.target.value
        this.setState({
            body: newContent
        })
    }

    onChangeAuthor = (event) => {
        let newAuthor = event.target.value
        this.setState({
            author: newAuthor,
            id: Date.now() + newAuthor
        })
    }

    onSaveForm = (event) => {
        event.preventDefault()

        axios.post(`${URL}posts`, this.state, { headers: { 'Authorization': KEY } })
            .then(() => {
                this.setState({
                    id: undefined,
                    timestamp: Date.now(),
                    title: undefined,
                    body: undefined,
                    author: undefined,
                    category: undefined,
                    votescore: 0,
                    deleted: false
                })
                
                this.props.dispatch(getPostsAsync())

                this.props.history.push('/')
            })
    }

    render() {
        return (
            <div className="container mt-2">
                <form className="jumbotron">
                    <h2>New Post</h2>
                    <div className="form-group">
                        <label htmlFor="postTitle">Title</label>
                        <input type="text" className="form-control" id="postTitle" onChange={(event) => this.onChangeTitle(event)} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postCategory">Category</label>
                        <select className="form-control" id="postCategory" onChange={(event) => this.onChangeCategory(event)} required>
                            <option value="" hidden >Select</option>
                            <option value="react">react</option>
                            <option value="redux">redux</option>
                            <option value="udacity">udacity</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postContent">Content</label>
                        <textarea className="form-control" id="postContent" rows="3" onChange={(event) => this.onChangeBody(event)} required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postAuthor">Author</label>
                        <input type="text" className="form-control" id="postAuthor" onChange={(event) => this.onChangeAuthor(event)} required></input>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={(event) => this.onSaveForm(event)}>Save</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(NewPost)