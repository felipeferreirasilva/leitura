import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostAsync } from '../actions'
import Comments from './Comments'

class Post extends Component {
    state = {
        postId: this.props.match.params.id
    }

    componentDidMount() {
        this.props.dispatch(getPostAsync(this.state.postId))
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h2>{this.props.posts.title}</h2>
                        <hr></hr>
                        <p>{this.props.posts.body}</p>
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