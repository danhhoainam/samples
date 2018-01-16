import React from 'react';
import ReactDOM from 'react-dom';
import TopGithubApp from './top-github-app/top-github-app';

// make browser render all elements more consistently
import 'normalize.css/normalize.css';

ReactDOM.render(
    <TopGithubApp />,
    document.getElementById("app")
)
