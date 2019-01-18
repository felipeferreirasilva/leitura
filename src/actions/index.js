import axios from 'axios'
import { URL, KEY} from '../util'
export const GET_POSTS = 'GET_POSTS'

export const getPosts = (posts) => (
    {
        type: GET_POSTS,
        posts: posts
    }
)

export function getPostsAsync() {
    return dispatch => {
        axios.get(`${URL}posts`, { headers: { 'Authorization': KEY } })
            .then(response => {
                dispatch(getPosts(response.data));
            })
    };
}
