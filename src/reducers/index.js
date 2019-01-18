import { GET_POSTS, GET_POST } from '../actions'
// O COMBINEREDUCERS PERMITE IMPLEMENTAR VARIAS STORES EM UMA
import { combineReducers } from 'redux';

// REDUCER QUE GERA O STATE INICIAL COMPARANDO O ACTION.TYPE E RETORNANDO O VALOR GERADO NA ACTION
const posts = (state = {}, action) => {
    switch (action.type) {
        case GET_POSTS:
            return action.posts
        case GET_POST:
            return action.post
        default:
            return state
    }
}

// EXPORTA O COMBINEREDUCERS COMO STORE PRINCIPAL PASSANDO AS STORES COMO OBJETOS
export default combineReducers({
    posts
});