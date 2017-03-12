import React from 'react';
import { Link } from 'react-router';

export default class ListItemControl extends React.Component {
    render() {
        return (
            <Link to="list/hello">
                <div className="email-item email-item-selected pure-g">
                    <div className="pure-u">
                    </div>

                    <div className="pure-u-3-4">
                        <h5 className="email-name">Tilo Mitra</h5>
                        <h4 className="email-subject">Hello from Toronto</h4>
                        <p className="email-desc">
                            Hey, I just wanted to check in with you from Toronto. I got here earlier today.
                        </p>
                    </div>
                </div>
            </Link>
        )
    }
}