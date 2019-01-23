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
                <Route path="/:category" exact component={PostsByCategory} />
                <Route path="/:category/:id" exact component={Post} />
                <Route path="/:category/:id/edit"  component={EditPost} />
                <Route path="/:category/:id/:comment/edit" component={EditComment} />
                
                <Route component={Page404} />
            </Switch>
        </div>
    )
}

export default Routes