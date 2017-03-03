import React from 'react';
import Nodes from './configuration';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
    render() {
        return (
                <div id="nav" className="pure-u">
                    <a href="#" className="nav-menu-button">Menu</a>

                    <div className="nav-inner">

                        <div className="pure-menu">
                            <ul className="pure-menu-list">
                                {
                                    Nodes.map((node, index) => {
                                        return <li key={ index } className="pure-menu-item"><Link className="pure-menu-link" activeClassName="active" to={ node.path }>{ node.name }</Link></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}

