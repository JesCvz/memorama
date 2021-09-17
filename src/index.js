import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store } from './app/store.js';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
// Add import statement below


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
