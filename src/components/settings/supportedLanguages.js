import React from 'react';
import LanguageItem from './languageItem';
import ListControl from '../controls/list/listControl'

export default class SupportedLanguages extends React.Component {

    constructor(props) {
        super(props);

        this.addLanguage = this.addLanguage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.state = { Language: "", Languages: this.props.Languages };
    }
    
    handleChange(event) {
        this.setState({ Language: event.target.value });
    }

    addLanguage(e) {
        if(this.state.Language !== "" && this.state.Languages.indexOf(this.state.Language) === -1) {
            let langs = this.state.Languages;
            langs.push(this.state.Language);
            this.setState({ Language: "", Languages: langs });
            this.props.updateLanguages(langs);
        }
    }

    removeLanguage(language) {
        let langPos = this.state.Languages.indexOf(language);
        let langsState = this.state;
        if(language !== "" && langPos !== -1) {
            langsState.Languages.splice(langPos, 1);
            this.setState(langsState);
            this.props.updateLanguages(langsState.Languages);
        }
    }

    render() {
        return (
            <div className="form-horizontal" onSubmit={ this.handleSubmit }>     
                <ListControl />  
                <div className="form-group">
                    <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Language" onChange={ this.handleChange } value={ this.state.Language } />
                        <button type="button" className="btn btn-default" onClick={ this.addLanguage }>Add language</button>
                    </div>
                </div>      
                <div className="form-group">
                    <div className="col-sm-8">
                        <ul className="list-group">
                        {
                            this.state.Languages.map((lang, index) => {
                                return (
                                    <LanguageItem lang={ lang } 
                                                  key={ index } 
                                                  removeLanguage={ this.removeLanguage.bind(this, lang) }
                                                  />);
                            })
                        }
                        </ul> 
                    </div>
                </div>
            </div>
        );
    }
}

