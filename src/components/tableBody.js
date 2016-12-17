import React from 'react';

export default class TableBody extends React.Component {
    render() {
        return (
            <tbody>
                {
                    this.props.tasks.map((item, index) => {
                        return <tr key={item.id}>
                                <td><span>{item.id}</span></td>
                                <td>{item.name}</td>
                            </tr>
                    })
                }
            </tbody>
        );
    }
}

