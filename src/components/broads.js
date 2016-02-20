function Grid(size) {
    this.size = size;
    this.time = new Date(0);
}

function Node(data) {
    this.data = data;
    this.next = null;
}

Grid.prototype.buildList = function (array) {
    var headNode = new Node();
    var currNode = headNode;
    for (var idx = 0; idx < array.length; idx++) {
        var newNode = new Node(array[idx]);
        currNode.next = newNode;
        currNode = newNode;
    }
    this.headNode = headNode;
    this.currNode = headNode;
};
