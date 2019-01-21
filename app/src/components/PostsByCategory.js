import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import { Link } from 'react-router-dom'
import PostDetails from './PostDetails'

class PostsByCategory extends Component {

    componentDidMount() {
        this.props.dispatch(getPosts())
    }

    render() {
        return (
            <div>
                <ul className="container">
                    {this.props.posts.length > 0 &&
                        this.props.posts.filter(post => post.deleted === false && post.category === this.props.match.params.category)
                            .sort(function (a, b) {
                                return b.voteScore - a.voteScore
                            })
                            .map(post => (
                                <li key={post.id} className="jumbotron">
                                    <h2><Link to={`/post/${post.id}/view`}>{post.title}</Link></h2>
                                    <hr></hr>
                                    <PostDetails post={post} />
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

export default connect(mapStateToProps)(PostsByCategory)