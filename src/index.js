import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<Routes />, document.getElementById('root'));


serviceWorker.unregister();
