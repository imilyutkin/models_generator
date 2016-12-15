import React from 'react';
import TableHeader from './tableHeader';

const tasks = [
    {
        id: 1,
        task: "task1"
    },
    {
        id: 2,
        task: "task2"
    }
];

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Start</h1>
                <table>
                    <TableHeader />
                </table>
            </div>
        );
    }
}

