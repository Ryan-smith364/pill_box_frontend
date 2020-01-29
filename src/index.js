import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

ReactDOM.render( <Router> <App className="ui red"/> </Router> , document.getElementById('root'));

