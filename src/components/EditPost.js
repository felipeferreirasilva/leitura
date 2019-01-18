import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostAsync, updatePost } from '../actions'

class EditPost extends Component{
    state = {
        title: '',
        body: ''
    }

    componentDidMount(){
        this.props.dispatch(getPostAsync(this.props.match.params.id))
        this.setState({
            title: this.props.posts.title,
            body: this.props.posts.body
        })
    }

    onChangeTitle = (event) => {
        let newTitle = event.target.value
        this.setState({
            title: newTitle
        })
    }

    onChangeBody = (event) => {
        let newContent = event.target.value
        this.setState({
            body: newContent
        })
    }

    onSaveForm = (event) => {
        event.preventDefault()
        this.props.dispatch(updatePost(this.props.match.params.id, this.state))
        this.props.history.push(`/post/${this.props.match.params.id}/view`)
    }

    render(){
        return(
            <div className="container mt-2">
                <form className="jumbotron">
                    <h2>Edit Post</h2>
                    <div className="form-group">
                        <label htmlFor="postTitle">Title</label>
                        <input type="text" className="form-control" id="postTitle" onChange={(event) => this.onChangeTitle(event)} value={this.state.title} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postContent">Content</label>
                        <textarea className="form-control" id="postContent" rows="3" onChange={(event) => this.onChangeBody(event)} value={this.state.body} required></textarea>
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

export default connect(mapStateToProps)(EditPost)