import { observable, computed } from 'mobx';

class FieldStore {

    constructor() {
        this.email = {
            name: "Ivan Milyutkin",
            subject: "This si sparta.",
            desc: "Hello darkness my old friend. I come to talk with you again"
        };
        this.email1 = {
            name: "Nadine Loban",
            subject: "This si sparta.",
            desc: "Hello darkness my old friend. I come to talk with you again"
        };
        this.items.push(this.email);
        this.items.push(this.email);
        this.items.push(this.email);
        this.items.push(this.email);
        this.items.push(this.email);
        this.items.push(this.email1);
        this.items.push(this.email1);
    }

    @computed get filteredItems() {
        var matchReg = new RegExp(this.filter, "i");
        console.log(this.filter);
        return this.items.filter(item => !this.filter || matchReg.test(item.name));
    }

    email;
    email1;
    @observable items = [];
    @observable filter = "";
}

export default new FieldStore();
