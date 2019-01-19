import React, { Component } from 'react'
// CONNECT PERMITE IMPORTA A STORE GLOBAL PARA DENTRO DO COMPONENT
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import { Link } from 'react-router-dom'
import PostDetails from './PostDetails'

class Posts extends Component {
    // ENVIO UM DISPATCH ANTES DE GERAR O COMPONENET PARA CRIAR MINHA STORE COM OS DADOS DO SERVIDOR
    componentDidMount() {
        this.props.dispatch(getPosts())
    }

    render() {
        return (
            <div>
                <ul className="container">
                    {this.props.posts.length > 0 &&
                        this.props.posts.filter(post => post.deleted === false)
                            .sort(function (a, b) {
                                return b.voteScore - a.voteScore
                            })
                            .map(post => (
                                <li key={post.id} className="jumbotron">
                                    <h2><Link to={`/post/${post.id}/view`}>{post.title}</Link></h2>
                                    <hr></hr>
                                    <PostDetails post={post} />
                                </li>
                            ))
                    }
                </ul>
            </div>
        )
    }
}

// MAPEIA MINHA STORE DENTRO DAS PROPS DO COMPONENT
const mapStateToProps = (state) => {
    return state
}

// EXPORTO O CONNECT QUE UNE O COMPONENET COM A FUNÇAO DE MAPEAMENTO DA STORE
export default connect(mapStateToProps)(Posts)