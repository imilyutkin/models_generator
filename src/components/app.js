import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Hello from './hello';
import Layout from './layout'
import Nodes from './navigation/configuration';
import List from './list';
import Welcome from './welcome';

export default class App extends React.Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={ Layout }>
                    <IndexRoute component={ Welcome }/>
                    <Route path="list" component={ List }>
                        <Route path="hello" component={ Hello }>
                        </Route>
                    </Route>
                </Route>

            </Router>
        )
    }
}

