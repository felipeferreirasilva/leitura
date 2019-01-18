import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCommentsAsync } from '../actions'
import Moment from 'react-moment'
import NewComment from './NewComment'

class Comments extends Component {
    componentDidMount() {
        this.props.dispatch(getCommentsAsync(this.props.postId))
    }

    render() {
        console.log(this.props.comments)
        return (
            <div>
                <div className="jumbotron">
                    <h3 className="mb-3">Comments</h3>
                    <ul>
                        {this.props.comments.length > 0 &&
                            this.props.comments.filter(comment => comment.parentDeleted === false && comment.deleted === false).map(comment => (
                                <div key={comment.id} className="jumbotron">
                                    <div className="row">
                                        <div className="col-sm-4"><i className="fas fa-calendar-alt mr-2"></i><Moment format="DD/MM/YYYY">{comment.timestamp}</Moment></div>
                                        <div className="col-sm-4"><i className="fas fa-star mr-2"></i>{comment.voteScore}</div>
                                        <div className="col-sm-4"><i className="fas fa-user mr-2"></i>{comment.author}</div>
                                    </div>
                                    <hr></hr>
                                    <li >{comment.body}</li>
                                    <hr></hr>
                                    <div className="text-right">
                                        <button className="btn btn-success btn-sm mr-1"><i className="fas fa-thumbs-up"></i></button>
                                        <button className="btn btn-danger btn-sm mr-1"><i className="fas fa-thumbs-down"></i></button>
                                        <button className="btn btn-warning btn-sm mr-1"><i className="fas fa-edit"></i></button>
                                        <button className="btn btn-dark btn-sm mr-1"><i className="fas fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            ))
                        }
                    </ul>
                </div>
                <NewComment postId={this.props.postId}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Comments)