import axios from 'axios'
export const GET_POSTS = 'GET_POSTS'

export const getPosts = (posts) => (
    {
        type: GET_POSTS,
        posts: posts
    }
)

export function getPostsAsync() {
    return dispatch => {
        axios.get("http://localhost:3001/posts", { headers: { 'Authorization': 'whatever-you-want' } })
            .then(response => {
                dispatch(getPosts(response.data));
            })
    };
}
