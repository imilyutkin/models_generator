import store from 'store'

class Storage {

    save(key, value) {
        store.set(key, value);
    }

    get(key) {
        return store.get(key)
    }
}

export default new Storage();