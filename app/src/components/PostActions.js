import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { votePost, deletePost } from '../actions'

class PostActions extends Component {

    deletePost = () => {
        this.props.dispatch(deletePost(this.props.post.id))
        this.props.history.push('/')
    }

    upVotePost = () => {
        let vote = { option: "upVote" }
        this.props.dispatch(votePost(this.props.post.id, vote, this.props.history.location.pathname))
    }

    downVotePost = () => {
        let vote = { option: "downVote" }
        this.props.dispatch(votePost(this.props.post.id, vote, this.props.history.location.pathname))
    }

    render() {
        return (
            <div className="text-right mt-5">
                <button className="btn btn-success btn-sm mr-1" onClick={this.upVotePost} value={this.props.post.id}>Like</button>
                <button className="btn btn-danger btn-sm mr-1" onClick={this.downVotePost} value={this.props.post.id}>Dislike</button>

                {this.props.history.location.pathname !== '/' &&
                    <span>
                        <Link to={`/${this.props.post.category}/${this.props.post.id}/edit`}><button className="btn btn-primary btn-sm mr-1">Edit</button></Link>
                        <button className="btn btn-dark btn-sm mr-1" onClick={this.deletePost}>Delete</button>
                    </span>
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(PostActions)