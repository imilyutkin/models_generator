import { observable, computed, action } from 'mobx';
import Storage from '../services/storage';
import BaseStore from '../components/shared/stores/baseStore';

class FieldStore extends BaseStore {


    constructor() {
        super(Storage, "fields");
    }

    getItemFields() {
        return [
            {
                "Name": "Title",
                "Type": "text"
            }
        ];
    }
}

export default new FieldStore();
