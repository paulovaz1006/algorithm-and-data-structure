class Dicionario {
    items = [];

    set(key, value) {
        items[key] = value;
    }

    delete(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    has(key){
        return items.hasOwnProperty(key);
    }

    get(key) {
        return this.has(key) ? items[key] : undefined;
    }

    clear() {
        items = {}
    }

    size() {
       return Object.keys(items).length;
    }

    keys() {
        return Object.keys(items)
    }

    values() {
        var values = [],
        keys = Object.keys(items)

        for (var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
    }
};