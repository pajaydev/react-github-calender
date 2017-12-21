import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './component/GithubCalender.css';
import registerServiceWorker from './registerServiceWorker';

import App from './docs/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
