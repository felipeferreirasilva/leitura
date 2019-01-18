import React, { Component } from 'react'
// CONNECT PERMITE IMPORTA A STORE GLOBAL PARA DENTRO DO COMPONENT
import { connect } from 'react-redux'
import Moment from 'react-moment'
import {getPostsAsync} from '../actions'
import { Link } from 'react-router-dom'

class Posts extends Component {
    // ENVIO UM DISPATCH ANTES DE GERAR O COMPONENET PARA CRIAR MINHA STORE COM OS DADOS DO SERVIDOR
    componentDidMount(){
        this.props.dispatch(getPostsAsync())
    }

    render() {
        return (
            <div>
                <ul className="container">
                    {this.props.posts.length > 0 &&
                        this.props.posts.map(post => (
                            <li key={post.id} className="jumbotron">
                                <h2><Link to={`/post/${post.id}/view`}>{post.title}</Link></h2>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3"><i className="fas fa-calendar-alt mr-2"></i><Moment format="DD/MM/YYYY">{post.timestamp}</Moment></div>
                                    <div className="col-sm-3"><i className="fas fa-tags mr-2"></i>{post.category}</div>
                                    <div className="col-sm-3"><i className="far fa-comments mr-2"></i>{post.commentCount}</div>
                                    <div className="col-sm-3"><i className="fas fa-star mr-2"></i>{post.voteScore}</div>
                                </div>
                                <hr></hr>
                                <p className="mt-3 text-justify">{post.body}</p>
                                <div className="text-right mt-5">
                                    <div className="col-sm-12 text-right mr-2"><i className="fas fa-user mr-2"></i>{post.author}</div>
                                    {/* <hr></hr>
                                    <button className="btn btn-success mr-1"><i className="fas fa-thumbs-up"></i></button>
                                    <button className="btn btn-danger mr-1"><i className="fas fa-thumbs-down"></i></button>
                                    <button className="btn btn-primary mr-1">Comment</button> */}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

// MAPEIO MINHA STORE DENTRO DAS PROPS DO COMPONENT
const mapStateToProps = (state) => {
    return state
}

// EXPORTO O CONNECT QUE UNE O COMPONENET COM A FUNÇAO DE MAPEAMENTO DA STORE
export default connect(mapStateToProps)(Posts)