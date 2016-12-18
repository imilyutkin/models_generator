import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import TestTable from './table/testTable'
import Hello from './hello';
import Layout from './layout'
import Nodes from './navigation/configuration';

export default class App extends React.Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={ Layout }>
                    <IndexRoute component={ Hello }/>
                    {
                        Nodes.map((node, index) => {
                            return <Route key={ index } path={ node.path } component={ node.component }></Route>
                        })
                    }

                    <Route path="home" component={ Hello } />
                    <Route path="terms" component={ TestTable } />

                </Route>
                
            </Router>
        )
    }
}

