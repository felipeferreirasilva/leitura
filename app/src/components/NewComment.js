import React, { Component } from 'react'
import { addComment } from '../actions'
import { connect } from 'react-redux'

class NewComment extends Component {

    state = {
        id: undefined,
        timestamp: Date.now(),
        author: '',
        body: '',
        parentDeleted: false,
        parentId: undefined,
        votescore: 0,
        deleted: false
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
            id: Date.now() + newAuthor,
            parentId: this.props.postId
        })
    }

    onSaveForm = (event) => {
        event.preventDefault()
        let comment = this.state
        let postId = this.props.postId
        this.props.dispatch(addComment(comment, postId))
    }

    render() {
        return (
            <form className="jumbotron">
                <h2>New Comment</h2>
                <div className="form-group">
                    <label htmlFor="postContent">Comment</label>
                    <textarea className="form-control" id="postContent" rows="3" onChange={(event) => this.onChangeBody(event)} value={this.state.body} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="postAuthor">Author</label>
                    <input type="text" className="form-control" id="postAuthor" onChange={(event) => this.onChangeAuthor(event)} value={this.state.author} required></input>
                </div>

                <button type="submit" className="btn btn-primary" onClick={(event) => this.onSaveForm(event)}>Save</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(NewComment)