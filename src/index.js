import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import store from './store';




ReactDOM.render( <Provider store={store}><Router> <App className="ui red"/> </Router></Provider> , document.getElementById('root'));

