import { Button } from 'react-bootstrap';
import React from 'react';
import NAVIGATION_NODES from './configuration';

export default class Navigation extends React.Component {
    render() {
        return (

            <div className="navbar navbar-inverse navbar-fixed-left">
                <a className="navbar-brand" href="#">Brand</a>
                <ul className="nav navbar-nav">
                {
                    NAVIGATION_NODES.map((node, index) => {                        
                        return <li key={ index }><a href={ node.path }>{ node.name }</a></li>
                    })
                }
                </ul>
            </div>

        );
    }
}

