import React from 'react';
import Nodes from './configuration';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
    render() {
        return (

            <div className="navbar navbar-inverse navbar-fixed-left">
                <a className="navbar-brand" href="#">Brand</a>
                <ul className="nav navbar-nav">
                {
                    Nodes.map((node, index) => {                        
                        return <li key={ index }><Link to={ node.path }>{ node.name }</Link></li>
                    })
                }
                </ul>
            </div>

        );
    }
}

