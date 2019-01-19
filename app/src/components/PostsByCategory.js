import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

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
                                    <div className="row">
                                        <div className="col-sm"><i className="fas fa-calendar-alt mr-2"></i><Moment format="DD/MM/YYYY">{post.timestamp}</Moment></div>
                                        <div className="col-sm"><i className="fas fa-tags mr-2"></i>{post.category}</div>
                                        <div className="col-sm"><i className="far fa-comments mr-2"></i>{post.commentCount}</div>
                                        <div className="col-sm"><i className="fas fa-star mr-2"></i>{post.voteScore}</div>
                                        <div className="col-sm"><i className="fas fa-user mr-2"></i>{post.author}</div>
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

export default connect(mapStateToProps)(PostsByCategory)