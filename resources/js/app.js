require('./bootstrap');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouters';

const App = () => (
        <AppRouter />
);
ReactDOM.render(<App />, document.getElementById('app'))
