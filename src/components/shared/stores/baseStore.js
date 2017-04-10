import { observable, computed, action } from 'mobx';

export default class BaseStore {

    @observable items = [];
    @observable filter = "";
    storageName = "";
    storage;

    constructor(storage, type) {
        this.storageName = type;
        this.storage = storage;
        let fieldsValue = this.storage.get(this.storageName);
        if(!!fieldsValue) {
            let fields = JSON.parse(fieldsValue);
            this.items = fields;
        }
    }

    getItemFields() {

    }

    @computed get filteredItems() {
        var matchReg = new RegExp(this.filter, "i");
        return this.items.filter(item => !this.filter || matchReg.test(item.name));
    }

    @action createItem(name) {
        let newItem = {
            name,
            subject: "This si sparta.",
            desc: "Hello darkness my old friend. I come to talk with you again"
        };
        this.items.push(newItem);

        this.storage.save(this.storageName, JSON.stringify(this.items));
    }
}