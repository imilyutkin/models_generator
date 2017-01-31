import React from 'react';
import Storage from '../../services/storage';
import { NotificationManager } from 'react-notifications';
import ListControl from '../controls/list/listControl';

export default class Terms extends React.Component {
    constructor(props) {
        super(props);
            debugger;
        let baseTermSets = Storage.get("TermSets");
        if(baseTermSets === undefined)
            baseTermSets = { TermSets: [] };

        this.state = { TermSets: baseTermSets.TermSets };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    updateAppState(termSets) {
        this.setState({ TermSets: termSets });
    }

     handleSubmit(event) {
        event.preventDefault();
        Storage.save("TermSets", this.state);
        NotificationManager.success('Term sets was saved.', 'Success.', 3000);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 className="form-header">Terms.</h1>
                </div>
                 <div className="panel-body">
                     <form className="form-horizontal" onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-3 control-label">Term set names.</label>
                            <div className="col-sm-5">
                                <ListControl updateAppState={ this.updateAppState.bind(this) } Items={ this.state.TermSets } />
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