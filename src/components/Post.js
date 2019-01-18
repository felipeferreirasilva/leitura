import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostAsync } from '../actions'

class Post extends Component {
    componentDidMount() {
        let postId = this.props.match.params.id
        this.props.dispatch(getPostAsync(postId))
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h2>{this.props.posts.title}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Post)