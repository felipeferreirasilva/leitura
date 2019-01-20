import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

class NewPost extends Component {

    state = {
        id: undefined,
        timestamp: Date.now(),
        title: '',
        body: '',
        author: '',
        category: '',
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
        let post = this.state
        event.preventDefault()
        this.props.dispatch(addPost(post))
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container mt-2">
                <form className="jumbotron">
                    <h2>New Post</h2>
                    <div className="form-group">
                        <label htmlFor="postTitle">Title</label>
                        <input type="text" className="form-control" id="postTitle" onChange={(event) => this.onChangeTitle(event)} value={this.state.title} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postCategory">Category</label>
                        <select className="form-control" id="postCategory" onChange={(event) => this.onChangeCategory(event)} value={this.state.category} required>
                            <option value="" hidden >Select</option>
                            <option value="react">react</option>
                            <option value="redux">redux</option>
                            <option value="udacity">udacity</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postContent">Content</label>
                        <textarea className="form-control" id="postContent" rows="3" onChange={(event) => this.onChangeBody(event)} value={this.state.body} required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postAuthor">Author</label>
                        <input type="text" className="form-control" id="postAuthor" onChange={(event) => this.onChangeAuthor(event)} value={this.state.author} required></input>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={(event) => this.onSaveForm(event)}>Add Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(NewPost)