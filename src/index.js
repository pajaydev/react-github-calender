import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './component/GithubCalender.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/highlight.js/styles/monokai-sublime.css';

import App from './docs/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
