import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import MainCSS from '../css/main.css';
import 'react-notifications/dist/notifications.css';

render(<App />, document.getElementById('app'));
