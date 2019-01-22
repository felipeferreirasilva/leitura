import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost, deletePost, votePost } from '../actions'
import Comments from './Comments'
import { Link } from 'react-router-dom'
import PostDetails from './PostDetails'

class Post extends Component {
    state = {
        postId: this.props.match.params.id
    }

    componentDidMount() {
        this.props.dispatch(getPost(this.state.postId))
    }

    deletePost = () => {
        this.props.dispatch(deletePost(this.state.postId))
        this.props.history.push('/')
    }

    votePost = (event) => {
        let vote = { option: event.target.value }
        this.props.dispatch(votePost(this.state.postId, vote))
    }

    render() {
        console.log(this.props.posts.length)
        return (
            <div>
                {this.props.posts.deleted === false &&
                    <div className="container">
                        <div className="jumbotron">
                            <PostDetails post={this.props.posts} />
                        </div>
                        <div className="jumbotron">
                            <h2>{this.props.posts.title}</h2>
                            <hr></hr>
                            <p>{this.props.posts.body}</p>
                            <div className="text-right mt-5">
                                <button className="btn btn-success btn-sm mr-1" onClick={(event) => this.votePost(event)} value="upVote">Like</button>
                                <button className="btn btn-danger btn-sm mr-1" onClick={(event) => this.votePost(event)} value="downVote">Dislike</button>
                                <Link to={`/post/${this.state.postId}/edit`}><button className="btn btn-primary btn-sm mr-1">Edit</button></Link>
                                <button className="btn btn-dark btn-sm mr-1" onClick={this.deletePost}>Delete</button>
                            </div>
                        </div>
                        <Comments postId={this.state.postId} />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Post)