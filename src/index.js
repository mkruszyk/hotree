import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import './theme/globalStyle';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
registerServiceWorker();
