class Grid {

  constructor(size, dataSet = []) {
    if (!Array.isArray(dataSet) || dataSet.length === 0) {
      for (let i = 0; i < size * size; i++) {
        dataSet[i] = i + 1;
      }
    } else if (dataSet.length !== (size * size)) {
      throw new Error('Invalid dataSet and size');
    }

    this.size = size;
    this.originDataSet = dataSet;
    this.shuffledDataSet = dataSet;
    this.orderArray = [];

    // Current index of orderArray, also representing game progress
    this.progress = 0;
    this.shuffle();
  };

  shuffle = () => {
    let idx, n = this.originDataSet.length,
        orderArray = [],
        shuffledArray = [];

    for (let i = 0; i < n; i++) {
      // Pick a random index which is not in orderArray
      do {
        idx = Math.floor(Math.random() * n);
      } while (orderArray.indexOf(idx) !== -1);

      shuffledArray[idx] = this.originDataSet[i];
      orderArray[i] = idx;
    }

    this.shuffledDataSet = shuffledArray;
    this.orderArray = orderArray;
  };

  print = () => {
    let idx = 0;
    while (idx <= this.size * this.size) {
      console.log('\n\t' + this.shuffledDataSet.slice(idx, idx += this.size).join('\t'));
    }
  };

  selectElement = (x, y) => {
    if (this.isCorrect(x * this.size + y)) {
      console.log('Right');
      this.updateProgress();
    } else {
      console.log('Wrong');
    }
  };

  resetProgress = () => this.progress = 0;

  updateProgress = () => this.progress++;

  isCorrect = (index) => (index === this.orderArray[this.progress]);

  isFinish = () => (this.progress === this.originDataSet.length);
}

export default Grid;
