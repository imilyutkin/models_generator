import React from 'react';
import TableHeader from './tableHeader';
import TestButton from './testButton';
import TableBody from './tableBody'
import Navigation from './navigation/navigation'

const tasks = [
    {
        id: 1,
        name: "task1"
    },
    {
        id: 2,
        name: "task2"
    }
];

export default class App extends React.Component {
    render() {
        return (

            <div className="col-md-12">
                <div className="row">
                    <div className="col-sm-2">
                        <Navigation />
                    </div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="container-fluid scrollable-container">

                                <h2>Left side Navigation bar (Fixed)</h2>
                            
                                <p>Left side Navigation</p>
                                <h1>Start</h1>
                                <table>
                                    <TableHeader />
                                    <TableBody tasks={ tasks } />
                                </table>
                                <TestButton />

                            </div>
                        </div>
   
                    </div>
                </div>
            </div>
        )
    }
}

