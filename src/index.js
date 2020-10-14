import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MemberCardList from './MemberCardList';
import * as serviceWorker from './serviceWorker';
import members from './members'

ReactDOM.render(
  <React.StrictMode>
    <MemberCardList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
