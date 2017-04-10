import React from 'react';
import FormControl from '../../shared/forms/formControl';
import {observer} from "mobx-react";
import FieldStore from '../../../stores/fieldStore';

@observer
export default class NewFieldsControl extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormControl store={FieldStore} />
        )
    }
}
