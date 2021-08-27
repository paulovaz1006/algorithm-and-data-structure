class Set {
    items = {}

    add(value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        } 
        return false;
    }

    delete(value) {
        if(this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }

    has(value) {
        return items.hasOwnProperty(value);
    }

    clear() {
        items = {};
    }

    size() {
        return Object.keys(items).length;
    }

    values() {
        var values = [],
        keys = Object.keys(items);

        for (var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
    }


}