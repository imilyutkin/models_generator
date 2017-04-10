import React from 'react';

export default class FormControl extends React.Component {

    constructor(props) {
        super(props);

        var fieldSettings = this.props.store.getItemFields();

        this.state = { name: "" };
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

  render() {
    return (   
        <form className="pure-form list-filter-form">
            <p>{this.props.store.getItemFields()[0].Name}</p>

            <input className="pure-input-1" type="text" value={this.state.name} onChange={this.name.bind(this)} placeholder="Name" />
            <input type="submit" value="Add" onClick={this.submit.bind(this)}/>
        </form>
    );
  }
}

FormControl.props = {
    store: React.PropTypes.object
}