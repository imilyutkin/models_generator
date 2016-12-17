import { Button } from 'react-bootstrap';
import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (

            <div className="navbar navbar-inverse navbar-fixed-left">
                <a className="navbar-brand" href="#">Brand</a>
                <ul className="nav navbar-nav">
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"></span></a>
                    <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Sub Menu1</a></li>
                    <li><a href="#">Sub Menu2</a></li>
                    <li><a href="#">Sub Menu3</a></li>
                    <li className="divider"></li>
                    <li><a href="#">Sub Menu4</a></li>
                    <li><a href="#">Sub Menu5</a></li>
                    </ul>
                </li>
                <li><a href="#">Link2</a></li>
                <li><a href="#">Link3</a></li>
                <li><a href="#">Link4</a></li>
                <li><a href="#">Link5</a></li>
                </ul>
            </div>

        );
    }
}

