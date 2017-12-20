import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import GithubCalender from './component/GithubCalender';

ReactDOM.render(<GithubCalender username='ajay2507' />, document.getElementById('root'));
registerServiceWorker();
