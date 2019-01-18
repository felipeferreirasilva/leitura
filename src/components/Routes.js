import React from 'react'
import { Route } from 'react-router-dom'
import Posts from './Posts'

const Routes = () => {
    return (
        <Route path="/" exact component={Posts} />
    )
}

export default Routes