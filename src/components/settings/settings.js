import React from 'react';
import Storage from '../../services/storage';

export default class Settings extends React.Component {

    save() {
        Storage.save("BaseSettings", "Lonza");
    }

    render() {
        let baseSettings = Storage.get("BaseSettings");
        if(baseSettings === undefined)
            baseSettings = { ProjectName: "" };

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 className="form-header">Project settings.</h1>
                </div>
                <div className="panel-body">
                     <div className="form-horizontal">       
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-3 control-label">Project name</label>
                            <div className="col-sm-5">
                            <input type="text" className="form-control" id="projectName" placeholder="Project name" value={ baseSettings.ProjectName } />
                            </div>
                        </div>                          
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-3 control-label">Supported languages</label>
                            <div className="col-sm-5">
                            <input type="text" className="form-control" id="languages" placeholder="Supported languages" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-3 col-sm-5">
                            <button type="submit" className="btn btn-default">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
}

