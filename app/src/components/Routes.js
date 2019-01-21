import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Posts from './Posts'
import NewPost from './NewPost'
import Post from './Post'
import EditPost from './EditPost'
import EditComment from './EditComment'
import PostsByCategory from './PostsByCategory'
import Page404 from './Page404'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/post/new" component={NewPost} />
                <Route path="/error" exact component={Page404} />
                <Route path="/:category/:id/view" component={Post} />
                <Route path="/post/:id/edit" component={EditPost} />
                <Route path="/comment/:commentId/edit" component={EditComment} />
                <Route path="/:category" component={PostsByCategory} />
                <Route component={Page404} />
            </Switch>
        </div>
    )
}

export default Routes