import React from 'react';
import ListItemControl from './listItemControl';
import {observer} from "mobx-react";

@observer
export default class ListControl extends React.Component {

    constructor(props) {
        super(props);

        this.state = { name: "" };
    }

    filter(e) {
        this.props.store.filter = e.target.value;
    }

    name(e) {
        this.setState({ name: e.target.value });
    }

    submit(e) {
        e.preventDefault();
        if(!!this.state.name) {
            this.props.store.createItem(this.state.name);
        }
        this.setState({ name: "" });
    }

    prevent(e) {
        e.preventDefault();
    }

    render() {
        return (
        <div>
            <div id="list" className="pure-u-1">
                <form className="pure-form list-filter-form" onSubmit={this.prevent.bind(this)}>
                    <input className="pure-input-1" type="text" onChange={this.filter.bind(this)} placeholder="Type to filter..." />
                </form>

                <form className="pure-form list-filter-form">
                    <input className="pure-input-1" type="text" value={this.state.name} onChange={this.name.bind(this)} placeholder="Name" />
                    <input type="submit" value="Add" onClick={this.submit.bind(this)}/>
                </form>
                <div>
                    {
                        this.props.store.filteredItems.map((item, index) => {
                            return (
                                <ListItemControl
                                    key={index}
                                    name={item.name}
                                    subject={item.subject}
                                    desc={item.desc}
                                />
                                );
                        })
                    }
                </div>
            </div>

            <div id="main" className="pure-u-1">
                { this.props.children }
            </div>
        </div>
        )
    }
}

ListControl.props = {
  store: React.PropTypes.object
}