import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';


const appContainer = document.getElementById('app');
ReactDOM.render(<App />, appContainer);

module.hot.accept();
