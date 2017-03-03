import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';
import Bootstrap from 'purecss/build/pure-min.css';
import MainCSS from '../css/main.css';
import 'react-notifications/dist/notifications.css';

render(<App />, document.getElementById('app'));
