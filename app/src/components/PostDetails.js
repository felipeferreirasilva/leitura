import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const PostDetails = props => {
    return (
        <div className="row">
            <div className="col-sm"><i className="fas fa-calendar-alt mr-2"></i><Moment format="DD/MM/YYYY">{props.post.timestamp}</Moment></div>
            <div className="col-sm"><i className="fas fa-tags mr-2"></i><Link to={`/category/${props.post.category}`}>{props.post.category}</Link></div>
            <div className="col-sm"><i className="far fa-comments mr-2"></i>{props.post.commentCount}</div>
            <div className="col-sm"><i className="fas fa-star mr-2"></i>{props.post.voteScore}</div>
            <div className="col-sm"><i className="fas fa-user mr-2"></i>{props.post.author}</div>
        </div>
    )
}

export default PostDetails