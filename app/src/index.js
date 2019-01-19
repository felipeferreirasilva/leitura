import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// PROVIDER PERMITE ENVIAR A STORE PARA SER UTILIZADA EM TODA A APLICAÇAO
import { Provider } from 'react-redux'
// CREATESTORE PERMITE CRIAR UMA STORE :)
// APPLYMIDDLEWARE PERMITE UTILIZAR O THUNK QUE SERVE PARA TRABALHAR DE FORMA ASYNCRONA COM A STORE
import { createStore, applyMiddleware } from 'redux'
// THUNK PERMITE TRABALHAR DE FORMA ASYNCRONA COM A STORE
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

// CRIA A STORE PASSANDO A COMBINAÇAO DE REDUCERS E APLICA O MIDDLEWARE THUNK
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    // PARA UTILIZAR O REACT ROUTE
    <BrowserRouter>
        {/* PASSA A STORE PARA TODA A APP */}
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
