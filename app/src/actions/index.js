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
export const GET_COMMENT = 'GET_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORIESPAGE = 'GET_CATEGORIESPAGE'

// CRIA UMA ACTION ASYCRONA
export const getPosts = () => {
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

export const getCategoriesPage = path => {
    return dispatch => {
        axios.get(`${URL}categories`, { headers: { 'Authorization': KEY } })
            .then(response => {
                if (response.data.categories.filter(c => c.name === path).length > 0) {
                    dispatch({
                        type: GET_CATEGORIESPAGE,
                        categories: response.data
                    })
                } else {
                    window.location.href = "/error";
                }
            })
    }
}

export const getCategories = () => {
    return dispatch => {
        axios.get(`${URL}categories`, { headers: { 'Authorization': KEY } })
            .then(response => {
                dispatch({
                    type: GET_CATEGORIES,
                    categories: response.data
                })
            })
    }
}

// ACTION ASYCRONA COM PARAMETRO
export const getPost = id => {
    return dispatch => {
        axios.get(`${URL}posts/${id}`, { headers: { 'Authorization': KEY } })
            .then(response => {
                if (response.data.id !== undefined) {
                    dispatch({
                        type: GET_POST,
                        post: response.data
                    })
                } else {
                    window.location.href = "/error";
                }

            }).catch(error => {
                window.location.href = "/error";
            })
    }
}

export const addPost = post => {
    return dispatch => {
        axios.post(`${URL}posts`, post, { headers: { 'Authorization': KEY } })
            .then(() => {
                dispatch({
                    type: ADD_POST
                })
                dispatch(getPosts())
            })
    }
}

export const updatePost = (postId, post) => {
    return dispatch => {
        axios.put(`${URL}posts/${postId}`, post, { headers: { 'Authorization': KEY } })
            .then(() => {
                dispatch({
                    type: UPDATE_POST
                })
            })
    }
}

export const deletePost = id => {
    return dispatch => {
        axios.delete(`${URL}posts/${id}`, { headers: { 'Authorization': KEY } })
            .then(() => {
                dispatch({
                    type: DELETE_POST
                })

                dispatch(getPosts())
            })
    }
}

export const votePost = (id, vote, path) => {
    return dispatch => {
        axios.post(`${URL}posts/${id}`, vote, { headers: { 'Authorization': KEY } })
            .then(() => {
                dispatch({
                    type: VOTE_POST
                })
                if (path === '/') {
                    dispatch(getPosts())
                } else {
                    dispatch(getPost(id))
                }
            })
    }
}

export const getComments = id => {
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

export const getComment = id => {
    return dispatch => {
        axios.get(`${URL}comments/${id}`, { headers: { 'Authorization': KEY } })
            .then(response => {
                dispatch({
                    type: GET_COMMENT,
                    comment: response.data
                })
            })
    }
}

export const updateComment = (id, comment) => {
    return dispatch => {
        axios.put(`${URL}comments/${id}`, comment, { headers: { 'Authorization': KEY } })
            .then(() => {
                dispatch({
                    type: UPDATE_COMMENT
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
                dispatch(getPost(postId))
                dispatch(getComments(postId))
            })
    }
}

export const deleteComment = (commentId, postId) => {
    return dispatch => {
        axios.delete(`${URL}comments/${commentId}`, { headers: { 'Authorization': KEY } })
            .then(() => {
                dispatch({
                    type: DELETE_COMMENT
                })
                dispatch(getPost(postId))
                dispatch(getComments(postId))
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

                dispatch(getComments(postId))
            })
    }
}