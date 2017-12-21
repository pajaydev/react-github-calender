import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './component/GithubCalender.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import GithubCalender from './component/GithubCalender';

ReactDOM.render(<GithubCalender username="ajay2507" text="All commits done by" />, document.getElementById('root'));
registerServiceWorker();
