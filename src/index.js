import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';
import App from './components/App';
import '../src/index.scss';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
