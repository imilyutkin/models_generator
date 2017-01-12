import React from 'react';

export default class LanguageItem extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { EditMode: false, Language: this.props.lang };
    }

    switchState(editMode) {
        var newState = this.state;
        newState.EditMode = editMode;
        this.setState(newState);
    }

    saveChanges(editMode) {
        this.switchState(editMode);
    }

    renderLanguageItem() {
        if(this.state.EditMode) {
            return (<li className="list-group-item">
                        <input className="language-box" type="text" value={ this.state.Language } />
                        <div className="supported-languages-buttons clearfix">                                   
                            <span className="link-button glyphicon glyphicon-floppy-disk" onClick={ this.saveChanges.bind(this, !this.state.EditMode) }></span>
                        </div>
                    </li>
            );
        } else {
            return (<li className="list-group-item">
                        <span>{ this.state.Language }</span>
                        <div className="supported-languages-buttons clearfix">                                   
                            <span className="link-button glyphicon glyphicon-pencil" onClick={ this.switchState.bind(this, !this.state.EditMode) }></span>
                            <span className="link-button glyphicon glyphicon-trash" onClick={ this.props.removeLanguage.bind(this, this.state.Language) }></span>
                        </div>
                    </li>
            );
        }
    }

    render() {
        return (
            this.renderLanguageItem()
        );
    }
}

