import React from 'react';
import ListItemControl from './listItemControl';
import {observer} from "mobx-react";

@observer
export default class ListControl extends React.Component {

    constructor(props) {
        super(props);
    }

    filter(e) {
        this.props.store.filter = e.target.value;
    }

    render() {
        return (
        <div>
            <div id="list" className="pure-u-1">
                <form className="pure-form list-filter-form">
                    <input className="pure-input-1" type="text" onChange={this.filter.bind(this)} placeholder="Type to filter..." />
                </form>

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

                <ListItemControl
                    name="Tilo Mitra"
                    subject="Hello from Toronto"
                    desc="Hey, I just wanted to check in with you from Toronto. I got here earlier today."
                />
                <ListItemControl
                    name="Tilo Mitra"
                    subject="Hello from Toronto"
                    desc="Hey, I just wanted to check in with you from Toronto. I got here earlier today."
                />

                <ListItemControl
                    name="Tilo Mitra"
                    subject="Hello from Toronto"
                    desc="Hey, I just wanted to check in with you from Toronto. I got here earlier today."
                />

                <ListItemControl
                    name="Tilo Mitra"
                    subject="Hello from Toronto"
                    desc="Hey, I just wanted to check in with you from Toronto. I got here earlier today."
                />

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