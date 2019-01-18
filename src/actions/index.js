import axios from 'axios'
import { URL, KEY } from '../util'
// CRIA UMA CONSTATE PARA DAR NOME A ACTION, EVITA ERROS DE DIGITAÇAO
export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'

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