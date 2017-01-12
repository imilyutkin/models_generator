import React from 'react';
import Storage from '../../services/storage';
import { NotificationManager } from 'react-notifications';

export default class Terms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 className="form-header">Terms.</h1>
                </div>
            </div>
        )
    }
}