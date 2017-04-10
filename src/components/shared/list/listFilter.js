import React from 'react';
import {observer} from "mobx-react";
import { Link } from 'react-router';

@observer
export default class ListFilter extends React.Component {

    constructor(props) {
        super(props);
    }

    filter(e) {
        this.props.store.filter = e.target.value;
    }

    prevent(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form className="pure-form list-filter-form" onSubmit={this.prevent.bind(this)}>
                <input className="pure-input-1" type="text" onChange={this.filter.bind(this)} placeholder="Type to filter..." />
                <Link to={this.props.type  + "/new"}>New</Link>
            </form>
        )
    }
}

ListFilter.props = {
  store: React.PropTypes.object,
  type: React.PropTypes.string
}