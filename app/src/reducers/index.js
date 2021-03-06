import { GET_POSTS, GET_POST, ADD_POST, DELETE_POST, VOTE_POST, GET_COMMENTS, GET_COMMENT, DELETE_COMMENT, ADD_COMMENT, VOTE_COMMENT, UPDATE_COMMENT, UPDATE_POST, GET_CATEGORIES, GET_CATEGORIESPAGE } from '../actions'
// O COMBINEREDUCERS PERMITE IMPLEMENTAR VARIAS STORES EM UMA
import { combineReducers } from 'redux';

// REDUCER QUE GERA O STATE INICIAL COMPARANDO O ACTION.TYPE E RETORNANDO O VALOR GERADO NA ACTION
const posts = (state = {}, action) => {
    switch (action.type) {
        case GET_POSTS:
            return action.posts
        case GET_POST:
            return action.post
        case ADD_POST:
            return state
        case DELETE_POST:
            return state
        case UPDATE_POST:
            return state
        case VOTE_POST:
            return state
        default:
            return state
    }
}

const comments = (state = {}, action) => {
    switch(action.type){
        case GET_COMMENTS:
            return action.comments
        case GET_COMMENT:
            return action.comment
        case DELETE_COMMENT:
            return state
        case UPDATE_COMMENT:
            return state
        case ADD_COMMENT:
            return state
        case VOTE_COMMENT:
            return state
        default:
            return state
    }
}

const categories = (state = {}, action) => {
    switch(action.type){
        case GET_CATEGORIESPAGE:
        return action.categories
        case GET_CATEGORIES:
        return action.categories
        default:
            return state
    }
}

// EXPORTA O COMBINEREDUCERS COMO STORE PRINCIPAL PASSANDO AS STORES COMO OBJETOS
export default combineReducers({
    posts,
    comments,
    categories
});