import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostAsync, deletePost } from '../actions'
import Comments from './Comments'
import Moment from 'react-moment'

class Post extends Component {
    state = {
        postId: this.props.match.params.id
    }

    componentDidMount() {
        this.props.dispatch(getPostAsync(this.state.postId))
    }

    deletePost = () => {
        this.props.dispatch(deletePost(this.state.postId))
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="container">
                <div className="jumbotron">
                        <div className="row">
                            <div className="col-sm"><i className="fas fa-calendar-alt mr-2"></i><Moment format="DD/MM/YYYY">{this.props.posts.timestamp}</Moment></div>
                            <div className="col-sm"><i className="fas fa-tags mr-2"></i>{this.props.posts.category}</div>
                            <div className="col-sm"><i className="far fa-comments mr-2"></i>{this.props.posts.commentCount}</div>
                            <div className="col-sm"><i className="fas fa-star mr-2"></i>{this.props.posts.voteScore}</div>
                            <div className="col-sm"><i className="fas fa-user mr-2"></i>{this.props.posts.author}</div>
                        </div>
                    </div>
                    <div className="jumbotron">
                        <h2>{this.props.posts.title}</h2>
                        <hr></hr>
                        <p>{this.props.posts.body}</p>

                        <div className="text-right">
                            <hr></hr>
                            <button className="btn btn-success btn-sm mr-1"><i className="fas fa-thumbs-up disabled"></i></button>
                            <button className="btn btn-danger btn-sm mr-1"><i className="fas fa-thumbs-down disabled"></i></button>
                            <button className="btn btn-warning btn-sm mr-1"><i className="fas fa-edit disabled"></i></button>
                            <button className="btn btn-dark btn-sm mr-1" onClick={this.deletePost}><i className="fas fa-trash-alt disabled"></i></button>
                        </div>
                    </div>

                    

                    <Comments postId={this.state.postId} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Post)