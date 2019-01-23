import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComment, updateComment } from '../actions'

class EditComment extends Component {

    state = {
        timeStamp: Date.now(),
        body: ''
    }

    componentWillMount() {
        this.props.dispatch(getComment(this.props.match.params.comment))
    }

    componentDidMount() {
        this.setState({
            body: this.props.comments.filter(c => c.id === this.props.match.params.comment)[0].body
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
        this.props.dispatch(updateComment(this.props.match.params.comment, this.state))
        this.props.history.push(`/${this.props.match.params.category}/${this.props.posts.id}`)
    }

    render() {
        return (
            <div className="container mt-2">
                <form className="jumbotron">
                    <h2>Edit Comment</h2>
                    <div className="form-group">
                        <label htmlFor="postContent">Comment</label>
                        <textarea className="form-control" id="postContent" rows="3" onChange={(event) => this.onChangeBody(event)} value={this.state.body} required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={(event) => this.onSaveForm(event)}>Save Comment</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(EditComment)