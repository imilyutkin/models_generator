import React from 'react';
import Navigation from './navigation/navigation';
import List from './list';
import { NotificationContainer } from 'react-notifications';

export default class Layout extends React.Component {
    render() {
        return (
            <div id="layout" className="content pure-g">
                <NotificationContainer />
                <Navigation />
                
                { this.props.children }

            </div>
        )
    }
}

