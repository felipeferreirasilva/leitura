import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-4">Page Not Found</h1>
                <p className="lead">The content you are looking for was not found.</p>
                <hr className="my-4"></hr>
                <Link className="btn btn-primary btn-lg" to="/" role="button">Back Home</Link>
            </div>
        </div>
    )
}

export default Page404