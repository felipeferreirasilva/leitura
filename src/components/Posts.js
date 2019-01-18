import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostsAsync } from '../actions'

class Posts extends Component {

    chama = () => {
        this.props.dispatch(getPostsAsync())
    }
    render() {
        return (
            <div>
                <ul className="container">
                    {this.props.posts.length > 0 &&
                        this.props.posts.map(post => (
                            <li key={post.id} className="jumbotron">
                                <h3>{post.title}</h3>
                                <p>Category: {post.category}</p>
                                <p>{post.body}</p>
                                <p>Comments: {post.commentCount}</p>
                                <p>Score: {post.voteScore}</p>
                                <div>
                                    <button className="btn btn-success mr-1">Like</button>
                                    <button className="btn btn-danger mr-1">Dislike</button>
                                    <button className="btn btn-primary mr-1">Comment</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Posts)