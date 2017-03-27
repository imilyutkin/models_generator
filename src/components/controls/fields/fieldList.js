import React from 'react';
import ListControl from '../../shared/list/listControl';
import {observer} from "mobx-react";
import FieldStore from '../../../stores/fieldStore';

@observer
export default class FieldsListControl extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListControl store={FieldStore} />
        )
    }
}
