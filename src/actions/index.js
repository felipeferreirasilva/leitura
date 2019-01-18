import axios from 'axios'
import { URL, KEY } from '../util'
export const GET_POSTS = 'GET_POSTS'

export function getPostsAsync() {
    return dispatch => {
        axios.get(`${URL}posts`, { headers: { 'Authorization': KEY } })
            .then(response => {
                dispatch({
                    type: GET_POSTS,
                    posts: response.data
                });
            })
    };
}
