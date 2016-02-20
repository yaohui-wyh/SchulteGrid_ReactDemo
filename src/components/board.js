var React = require('react');

var GridRow = require('./grid-row');

var Board = React.createClass({

    setContent: function () {
        var grid = this.props.grid;
        var size = grid.size;
        var content = [];
        for (var i = 0; i < size; i++) {
            var props = {
                grid: grid,
                dataValues: grid.shuffledDataSet.slice(i * size, (i + 1) * size),
                rowIndex: i,
                key: 'rowIndex' + i
            };
            content.push(<GridRow {...props}/>);
        }
        return content;
    },

    render: function () {
        return (
            <div className="board">{this.setContent()}</div>
        )
    }
});

module.exports = Board;
