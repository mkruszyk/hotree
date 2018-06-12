import React from 'react';
import ReactDOM from 'react-dom';
import './theme/globalStyle';
import App from './components/page/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
