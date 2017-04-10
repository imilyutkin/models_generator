import React from 'react';
import { Link } from 'react-router';

export default class ListItemControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to="fields/hello">
                <div className="list-item list-item-selected pure-g">
                    <div className="pure-u">
                    </div>

                    <div className="pure-u-3-4">
                        <h5 className="list-name">{this.props.name}</h5>
                        <h4 className="list-subject">{ this.props.subject}</h4>
                        <p className="list-desc">
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