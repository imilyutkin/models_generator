import React from 'react';
import {observer} from "mobx-react";
import ListItemControl from './listItemControl';
import ListFilter from './listFilter';

@observer
export default class ListControl extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="list" className="pure-u-1">
                    <ListFilter store={ this.props.store } type={ this.props.type } />
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
                    { this.props.routeChildren }
                </div>
            </div>
        )
    }
}

ListControl.props = {
    store: React.PropTypes.object,
    routeChildren: React.PropTypes.array,
    type: React.PropTypes.string
}