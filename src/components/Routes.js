import React from 'react'
import { Route } from 'react-router-dom'
import Posts from './Posts'
import NewPost from './NewPost'
import Post from './Post'
import EditPost from './EditPost'

const Routes = () => {
    return (
        <div>
            <Route path="/" exact component={Posts}/>
            <Route path="/post/new" component={NewPost}/>
            <Route path="/post/:id/view" component={Post}/>
            <Route path="/post/:id/edit" component={EditPost}/>
        </div>
    )
}

export default Routes