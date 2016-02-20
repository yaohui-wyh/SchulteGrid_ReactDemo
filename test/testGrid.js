var assert = require('assert');

var Grid = require('../src/models/grid');


describe('Grid Test', function () {

    describe('Init Grid Test', function () {
        it('Init Grid with size, should OK', function () {
            var size = 2;
            var grid = new Grid(size);

            assert.equal(grid.size, size);
            assert.equal(grid.progress, 0);

            // Using 'assert.deepEqual' since two objects do not refers to the same object
            assert.deepEqual(grid.originDataSet, [1, 2, 3, 4]);
            assert.notEqual(grid.shuffledDataSet, null);

        });
        it('Init Grid with valid size and dataSet, should OK', function () {
            var dataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            var size = 3;
            var grid = new Grid(size, dataSet);
            assert.equal(grid.size, size);
            assert.equal(grid.progress, 0);
            assert.equal(grid.originDataSet, dataSet);
        });
        it('Init Grid with invalid size and dataSet, should throw Exception', function () {
            var dataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            var size = 4;

            assert.throws(function () {
                new Grid(size, dataSet);
            }, Error);
        });
    });

    describe('Grid Shuffle Test', function () {
        it('Shuffle might return different dataSet (the probability is 1/N!)', function () {
            var size = 5;
            var dataSet = [];
            for (var i = 0; i < size * size; i++) {
                dataSet[i] = Math.random();
            }
            var grid = new Grid(size, dataSet);
            assert.notDeepEqual(grid.originDataSet, grid.shuffledDataSet);
        });

    });

});