import React from 'react';
import Storage from '../../services/storage';
import { NotificationManager } from 'react-notifications';
import SupportedLanguages from './supportedLanguages';

export default class Settings extends React.Component {

    constructor(props) {
        super(props);

        let baseSettings = Storage.get("BaseSettings");
        if(baseSettings === undefined)
            baseSettings = { ProjectName: "" };

        this.state = { ProjectName: baseSettings.ProjectName };

        this.handleChangeProjectName = this.handleChangeProjectName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeProjectName(event) {
        this.setState({ ProjectName: event.target.value });
    }
    
    handleChangeLanguages(event) {
        this.setState({ ProjectName: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        Storage.save("BaseSettings", this.state);
        NotificationManager.success('Base settings was saved.', 'Success.', 3000);
    }

    render() {
        return (    
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 className="form-header">Project settings.</h1>
                </div>
                <div className="panel-body">
                     <form className="form-horizontal" onSubmit={ this.handleSubmit }>       
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-3 control-label">Project name</label>
                            <div className="col-sm-5">
                            <input type="text" className="form-control" placeholder="Project name" value={ this.state.ProjectName } onChange={ this.handleChangeProjectName } />
                            </div>
                        </div>                          
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-3 control-label">Supported languages</label>
                            <div className="col-sm-5">
                                <SupportedLanguages />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-3 col-sm-5">
                            <button type="submit" className="btn btn-default">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
           
        )
    }
}
