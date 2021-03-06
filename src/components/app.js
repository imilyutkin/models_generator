import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Hello from './hello';
import Layout from './layout'
import Nodes from './navigation/configuration';
import Welcome from './welcome';
import NotFound from './notfound';
import FieldList from './controls/fields/fieldList';
import NewFieldsControl from './controls/fields/newFields';

export default class App extends React.Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={ Layout }>
                    <IndexRoute component={ Welcome }/>
                    <Route path="fields" component={ FieldList }>
                        <Route path="new" component={ NewFieldsControl }>
                        </Route>
                    </Route>
                </Route>
                <Route path="*" component={ NotFound }/>
            </Router>
        )
    }
}

