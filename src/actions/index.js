import axios from 'axios'
import { URL, KEY } from '../util'
export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'

export const getPostsAsync = () => {
    return dispatch => {
        axios.get(`${URL}posts`, { headers: { 'Authorization': KEY } })
            .then(response => {
                dispatch({
                    type: GET_POSTS,
                    posts: response.data
                })
            })
    }
}

export const getPostAsync = (id) => {
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