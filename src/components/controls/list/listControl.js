import React from 'react';
import ListItem from './listItemControl';

export default class ListControl extends React.Component {

    constructor(props) {
        super(props);
        if(!this.props.Items) {
            this.state = { Item: "", Items: [] };
        } else {
            this.state = { Item: "", Items: this.props.Items };
        }

        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleChange(event) {
        this.setState({ Item: event.target.value });
    }

    addItem(e) {
        if(this.state.Item !== "" && this.state.Items.indexOf(this.state.Item) === -1) {
            let items = this.state.Items;
            items.push(this.state.Item);
            this.setState({ Item: "", Items: items });
            //this.props.updateItems(items);
        }
    }

    removeItem(item) {
        debugger;
        let items = this.state.Items.slice();
        let itemPos = items.indexOf(item);
        if(item !== "" && itemPos !== -1) {
            items.splice(itemPos, 1);
            this.setState({ Item: "", Items: items });
            //this.props.updateItems(itemsState.Items);
        }
    }

    render() {
        return (
            <div className="list-control">
                <div className="row"> 
                    <div className="col-md-8">
                        <input type="text" className="form-control" placeholder="Enter item value" onChange={ this.handleChange } value={ this.state.Item } />
                    </div>
                    <div className="col-md-2">                            
                        <span className="link-button glyphicon glyphicon-plus add-item" onClick={ this.addItem }></span>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                {
                    this.state.Items.map((item, index) => {
                        return (
                            <ListItem item={ item } 
                                    key={ index } 
                                    removeItem={ this.removeItem.bind(this, item) }
                                    />);
                    })
                }
            </div>            
        );
    }
}

