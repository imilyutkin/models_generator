import React from 'react';
import Navigation from './navigation/navigation';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <NotificationContainer />
                <div className="row">
                    <div className="col-sm-2">
                        <Navigation />
                    </div>
                    
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="container-fluid scrollable-container main-content-container">
                                
                                {this.props.children}

                            </div>
                        </div>
   
                    </div>
                </div>
            </div>
        )
    }
}

