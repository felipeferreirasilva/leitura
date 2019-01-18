import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {
    render() {
        console.log(this.props.posts)
        return (
            <div>
                <ul className="container">
                    {this.props.posts.length > 0 &&
                        this.props.posts.map(post => (
                            <li key={post.id} className="jumbotron">
                                <h3>{post.title}</h3>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm"><strong>Category:</strong> {post.category}</div>
                                    <div className="col-sm"><strong>Comments:</strong> {post.commentCount}</div>
                                    <div className="col-sm"><strong>Score:</strong> {post.voteScore}</div>
                                </div>
                                <hr></hr>
                                <p className="mt-3 text-justify">{post.body}</p>
                                <div className="text-right">
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