import { observable } from 'mobx';

var store = {
    items: [],
    addItem() {

    }
}

class ListItemsStore {
    @observable items = [];
    @observable filter = "";
}