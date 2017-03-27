import { observable, computed } from 'mobx';
import Storage from '../services/storage';

class FieldStore {

    constructor() {
        let fieldsValue = Storage.get('fields');
        if(!!fieldsValue) {
            let fields = JSON.parse(fieldsValue);
            console.log(fields);
            this.items = fields;
        }
    }

    @computed get filteredItems() {
        var matchReg = new RegExp(this.filter, "i");
        console.log(this.filter);
        return this.items.filter(item => !this.filter || matchReg.test(item.name));
    }
    
    createItem(name) {
        let newItem = {
            name,
            subject: "This si sparta.",
            desc: "Hello darkness my old friend. I come to talk with you again"
        };
        this.items.push(newItem);

        Storage.save('fields', JSON.stringify(this.items));
    }

    @observable items = [];
    @observable filter = "";
}

export default new FieldStore();
