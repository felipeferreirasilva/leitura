import axios from 'axios'
import { URL, KEY } from '../util'
// CRIA UMA CONSTATE PARA DAR NOME A ACTION, EVITA ERROS DE DIGITAÇAO
export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

// CRIA UMA ACTION ASYCRONA
export const getPostsAsync = () => {
    return dispatch => {
        // FAZ A REQUISIÇAO AO AXIOS E EM SEGUIDA CHAMA GERA A ACTION COM O TYPE E DADOS DO SERVIDOR
        axios.get(`${URL}posts`, { headers: { 'Authorization': KEY } })
            .then(response => {
                dispatch({
                    type: GET_POSTS,
                    posts: response.data
                })
            })
    }
}

// ACTION ASYCRONA COM PARAMETRO
export const getPostAsync = id => {
    return dispatch => {
        axios.get(`${URL}posts/${id}`, { headers: { 'Authorization': KEY } })
            .then(response => {
                dispatch({
                    type: GET_POST,
                    post: response.data
                })
            })
    }
}

export const addPost = (post) => {
    return dispatch => {
        axios.post(`${URL}posts`, post, { headers: { 'Authorization': KEY } })
            .then(() => {
                dispatch({
                    type: ADD_POST
                })
                dispatch(getPostsAsync())
            })
    }
}

export const updatePost = (postId, post) => {
    return dispatch => {
        axios.put(`${URL}posts/${postId}`, post, { headers: { 'Authorization': KEY } })
    }
}

export const deletePost = (id) => {
    return dispatch => {
        axios.delete(`${URL}posts/${id}`, { headers: { 'Authorization': KEY } })
            .then(() => {
                dispatch({
                    type: DELETE_POST
                })

                dispatch(getPostsAsync())
            })
    }
}

export const votePost = (id, vote) => {
    return dispatch => {
        axios.post(`${URL}posts/${id}`, vote, { headers: { 'Authorization': KEY } })
        .then(() => {
            dispatch({
                type: VOTE_POST
            })

            dispatch(getPostAsync(id))
        })
    }
}

export const getCommentsAsync = id => {
    return dispatch => {
        axios.get(`${URL}posts/${id}/comments`, { headers: { 'Authorization': KEY } })
            .then(response => {
                dispatch({
                    type: GET_COMMENTS,
                    comments: response.data
                })
            })
    }
}

export const addComment = (comment, postId) => {
    return dispatch => {
        axios.post(`${URL}comments`, comment, { headers: { 'Authorization': KEY } })
            .then(() => {
                dispatch({
                    type: ADD_COMMENT
                })
                dispatch(getCommentsAsync(postId))
            })
    }
}

export const deleteCommentAsync = (commentId, postId) => {
    return dispatch => {
        axios.delete(`${URL}comments/${commentId}`, { headers: { 'Authorization': KEY } })
            .then(() => {
                dispatch({
                    type: DELETE_COMMENT
                })

                dispatch(getCommentsAsync(postId))
            })
    }
}

export const voteComment = (commentId, vote, postId) => {
    return dispatch => {
        axios.post(`${URL}comments/${commentId}`, vote, { headers: { 'Authorization': KEY } })
        .then((r) => {
            dispatch({
                type: VOTE_POST
            })
            
            dispatch(getCommentsAsync(postId))
        })
    }
}