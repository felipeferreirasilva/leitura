import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments, deleteComment, voteComment } from '../actions'
import Moment from 'react-moment'
import NewComment from './NewComment'
import { Link } from 'react-router-dom'

class Comments extends Component {
    componentDidMount() {
        this.props.dispatch(getComments(this.props.postId))
    }

    deleteComment = (event) => {
        let commentId = event.target.value
        this.props.dispatch(deleteComment(commentId, this.props.postId))
    }

    upVoteComment = (event) => {
        let vote = { option: "upVote" }
        let commentId = event.target.value
        this.props.dispatch(voteComment(commentId, vote, this.props.postId))
    }

    downVoteComment = (event) => {
        let vote = { option: "downVote" }
        let commentId = event.target.value
        this.props.dispatch(voteComment(commentId, vote, this.props.postId))
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h3 className="mb-4">Comments</h3>
                    <ul>
                        {this.props.comments.length > 0 &&
                            this.props.comments.filter(comment => comment.parentDeleted === false && comment.deleted === false)
                                .sort(function (a, b) {
                                    return b.voteScore - a.voteScore
                                })
                                .map(comment => (
                                    <div key={comment.id} className="jumbotron">
                                        <div className="row">
                                            <div className="col-sm-3"><i className="fas fa-calendar-alt mr-2"></i><Moment format="DD/MM/YYYY">{comment.timestamp}</Moment></div>
                                            <div className="col-sm-3"><i className="far fa-clock mr-2"></i><Moment format="HH:MM">{comment.timestamp}</Moment></div>
                                            <div className="col-sm-3"><i className="fas fa-star mr-2"></i>{comment.voteScore}</div>
                                            <div className="col-sm-3"><i className="fas fa-user mr-2"></i>{comment.author}</div>
                                        </div>
                                        <hr></hr>
                                        <li >{comment.body}</li>
                                        <div className="text-right mt-5">
                                            <button className="btn btn-success btn-sm mr-1" onClick={(event) => this.upVoteComment(event)} value={comment.id}>Like</button>
                                            <button className="btn btn-danger btn-sm mr-1" onClick={(event) => this.downVoteComment(event)} value={comment.id}>Dislike</button>
                                            <Link to={`/comment/${comment.id}/edit`}><button className="btn btn-primary btn-sm mr-1">Edit</button></Link>
                                            <button className="btn btn-dark btn-sm mr-1" onClick={(event) => this.deleteComment(event)} value={comment.id}>Delete</button>
                                        </div>
                                    </div>
                                ))
                        }
                    </ul>
                </div>
                <NewComment postId={this.props.postId} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Comments)