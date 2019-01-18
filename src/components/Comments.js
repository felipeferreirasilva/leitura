import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCommentsAsync } from '../actions'

class Comments extends Component {
    componentDidMount() {
        this.props.dispatch(getCommentsAsync(this.props.postId))
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h3>Comments</h3>
                    <ul>
                        {this.props.comments.length > 0 &&
                            this.props.comments.map(comment => (
                                <li key={comment.id}>{comment.body}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Comments)