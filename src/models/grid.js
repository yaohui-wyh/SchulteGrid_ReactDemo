var dataSet = require('../constants/data').DataSet;

function Grid(size, dataSet, category) {
    if (dataSet === undefined) {
        dataSet = [];
        switch (category) {
            case undefined:
            case dataSet.category.nums:
                for (var i = 0; i < size * size; i++) {
                    dataSet[i] = i + 1;
                }
                break;
            default:
                break;
        }
    } else {
        if (dataSet.length !== (size * size)) {
            throw new Error('Invalid dataSet and size');
        }
    }

    this.size = size;
    this.originDataSet = dataSet;
    this.shuffledDataSet = dataSet;
    this.orderArray = [];

    // Current index of orderArray, also representing game progress
    this.progress = 0;

    this.shuffle();
}

Grid.prototype.shuffle = function () {
    var idx, n = this.originDataSet.length,
        orderArray = [],
        shuffledArray = [];

    for (var i = 0; i < n; i++) {
        // Pick a random index which is not in orderArray
        do {
            idx = Math.floor(Math.random() * n);
        } while (orderArray.indexOf(idx) != -1);

        shuffledArray[idx] = this.originDataSet[i];
        orderArray[i] = idx;
    }

    this.shuffledDataSet = shuffledArray;
    this.orderArray = orderArray;
};

/** Only used for command-line interaction */
Grid.prototype.print = function () {
    var idx = 0;
    while (idx <= this.size * this.size) {
        console.log('\n\t' + this.shuffledDataSet.slice(idx, idx += this.size).join('\t'));
    }
};

/** Only used for command-line interaction */
Grid.prototype.selectElement = function (x, y) {
    if (this.isCorrect(x * this.size + y)) {
        console.log('Right');
        this.updateProgress();
    } else {
        console.log('Wrong');
    }
};

Grid.prototype.resetProgress = function () {
    this.progress = 0;
};

Grid.prototype.updateProgress = function () {
    this.progress++;
};

Grid.prototype.isCorrect = function (index) {
    return index === this.orderArray[this.progress];
};

Grid.prototype.isFinish = function () {
    return this.progress === this.originDataSet.length;
};

module.exports = Grid;
