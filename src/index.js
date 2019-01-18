import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { getPostsAsync } from './actions'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(getPostsAsync())

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
