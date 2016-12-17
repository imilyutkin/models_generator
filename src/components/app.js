import React from 'react';
import TableHeader from './tableHeader';
import TestButton from './testButton';
import TableBody from './tableBody'

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
            <div>
                <h1>Start</h1>
                <table>
                    <TableHeader />
                    <TableBody tasks={ tasks } />
                </table>
                <TestButton />
            </div>
        );
    }
}

