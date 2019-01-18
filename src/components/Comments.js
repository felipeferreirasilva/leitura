import React, {Component} from 'react'

class Comments extends Component{
    render(){
        return(
            <div>
                Comments {this.props.postId}
            </div>
        )
    }
}

export default Comments