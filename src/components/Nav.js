import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <Link className="navbar-brand" to="/">Leitura</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/post/new">New Post</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav