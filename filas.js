class Queue {
    items = [];

    enqueue(e) {
        items.push(e)
    }

    dequeue() {
        return items.shift();
    }

    front() {
        return items[0]
    }

    isEmpty() {
        return items.length === 0
    }

    size() {
        return items.length
    }

    print() {
        console.log(items.toString())
    }
}

class PriorityQueue {
    items = []

    QueueElement(ele, priority) {
        this.element = ele;
        this.priority = priority;
    }

    enqueue(element, priority) {
        queueElement = new QueueElement(element, priority);
        var added = false;

        for(var i = 0; i < items.length; i++) {
            if(queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            items.push(queueElement);
        }
    }

    dequeue() {
        return items.shift();
    }

    print() {
        for(var i = 0; i < items.length; i++) {
            console.log(items[i].element + '' + items[i].priority)
        }
    }
}