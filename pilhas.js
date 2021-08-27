function Stack() {
    var items = [];

    this.push = function (e) {
        items.push(e);
    }

    this.pop = function (e) {
     return items.pop();
    }

    this.peek = function (e) {
        return items[items.length - 1];
    }

    this.isEmpty = function (e) {
        return items.length === 0;
    }

    this.clear = function () {
        items = [];
    }

    this.size = function () {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString())
    }
}