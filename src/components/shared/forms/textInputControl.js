import React from 'react';

export default class TextInputControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: this.props.initValue };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
     this.setState({ value: e.target.value })
  }

  render() {
    return (   
      <input type="text" 
        value={ this.state.value }
        className="pure-input-1-2"
        onChange={ this.handleChange }
        placeholder={ this.props.name }
        onBlur={ this.props.onChange(this.state.value)} />
    );
  }
}

TextInputControl.props = {
  name: React.PropTypes.string,
  onChange: React.PropTypes.func,
  type: React.PropTypes.string,
  initValue: React.PropTypes.string
}