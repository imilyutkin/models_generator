import React from 'react';
import ListItemControl from './listItemControl';

export default class ListControl extends React.Component {
    render() {
        return (
        <div>
            <div id="list" className="pure-u-1">

                <ListItemControl />
                <ListItemControl />
                <ListItemControl />

            </div>

            <div id="main" className="pure-u-1">
                { this.props.children }
            </div>
        </div>
        )
    }
}
