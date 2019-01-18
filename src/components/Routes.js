import React from 'react'
import { Route } from 'react-router-dom'
import Posts from './Posts'
import NewPost from './NewPost'

const Routes = () => {
    return (
        <div>
            <Route path="/" exact component={Posts} />
            <Route path="/new/post"  component={NewPost} />
        </div>
    )
}

export default Routes