import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import './App.css';
import fonts from './utils/font-loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
