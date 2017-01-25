import React from 'react';

export default class ListItemControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = { EditMode: false, Item: this.props.item };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ Item: event.target.value });
    }

    switchState(editMode) {
        var newState = this.state;
        newState.EditMode = editMode;
        this.setState(newState);
    }

    saveChanges(editMode) {
        this.props.saveItem(this.props.item, this.state.Item);
        this.switchState(editMode);
    }

    renderItem() {
        if(this.state.EditMode) {
            return (
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" className="form-control" defaultValue={this.props.item } value={ this.state.item } onChange={ this.handleChange } />
                    </div>
                    <div className="col-md-2">
                        <span className="link-button glyphicon glyphicon-floppy-disk" onClick={ this.saveChanges.bind(this, !this.state.EditMode) }></span>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row">
                    <div className="col-md-8">
                        <span className="list-item-title">{ this.props.item }</span>
                    </div>
                    <div className="col-md-2">
                        <span className="link-button glyphicon glyphicon-pencil" onClick={ this.switchState.bind(this, !this.state.EditMode) }></span>
                    </div>
                    <div className="col-md-2">
                    <span className="link-button glyphicon glyphicon-trash" onClick={ this.props.removeItem.bind(this, this.props.item) }></span></div>
                </div>
            );
        }
    }

     render() {
        return (
            this.renderItem()
        );
    }
}

