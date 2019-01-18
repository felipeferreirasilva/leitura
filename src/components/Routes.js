import React from 'react'
import { Route } from 'react-router-dom'
import Posts from './Posts'
import NewPost from './NewPost'
import Post from './Post'

const Routes = () => {
    return (
        <div>
            <Route path="/" exact component={Posts} />
            <Route path="/post/new" component={NewPost} />
            <Route path="/post/:id/view" component={Post} />
        </div>
    )
}

export default Routes