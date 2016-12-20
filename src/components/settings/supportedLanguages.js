import React from 'react';

export default class SupportedLanguages extends React.Component {

    constructor(props) {
        super(props);

        this.addLanguage = this.addLanguage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.state = { Language: "", Languages: ["EN", "DE"] };
    }
    
    handleChange(event) {
        this.setState({ Language: event.target.value });
    }

    addLanguage(e) {
        if(this.state.Language !== "" && this.state.Languages.indexOf(this.state.Language) === -1) {
            let langs = this.state.Languages;
            langs.push(this.state.Language);
            this.setState({ Language: "", Languages: langs });
        }
    }

    render() {
        return (
            <div className="form-horizontal" onSubmit={ this.handleSubmit }>       
                <div className="form-group">
                    <div className="col-sm-4">
                        <input type="text" className="form-control" placeholder="Language" onChange={ this.handleChange } value={ this.state.Language } />
                        <button type="button" className="btn btn-default" onClick={ this.addLanguage }>Add language</button>
                    </div>
                </div>      
                <div className="form-group">
                    <div className="col-sm-4">
                        <ul className="list-group">
                        {
                            this.state.Languages.map((lang, index) => {
                                return (<li className="list-group-item" key={ index }>
                                    { lang }                                    
                                    <span className="glyphicon glyphicon-pencil" onClick={ this.addLanguage }></span>
                                    <span className="glyphicon glyphicon-trash" onClick={ this.addLanguage }></span>
                                </li>);
                            })
                        }
                        </ul> 
                    </div>
                </div>
            </div>
        );
    }
}

