import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions'
import Comments from './Comments'
import PostDetails from './PostDetails'
import PostActions from './PostActions'

class Post extends Component {

    state = {
        postId: this.props.match.params.id,
        postCategory: this.props.match.params.category
    }

    componentDidMount() {
        this.props.dispatch(getPost(this.state.postId))
    }

    render() {
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
                            <PostActions post={this.props.posts} history={this.props.history} />
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