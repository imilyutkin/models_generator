import React from 'react';
import { Link } from 'react-router';

export default class ListItemControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to="fields/hello">
                <div className="email-item email-item-selected pure-g">
                    <div className="pure-u">
                    </div>

                    <div className="pure-u-3-4">
                        <h5 className="email-name">{this.props.name}</h5>
                        <h4 className="email-subject">{ this.props.subject}</h4>
                        <p className="email-desc">
                        {this.props.desc}
                        </p>
                    </div>
                </div>
            </Link>
        )
    }
}

ListItemControl.props = {
  name: React.PropTypes.string,
  subject: React.PropTypes.string,
  desc: React.PropTypes.string
}