var React = require('react'),
    Cell = require('./cell');

var GridRow = React.createClass({

    setContent: function () {
        var content = [];
        var that = this;
        this.props.dataValues.forEach(function (item, idx) {
            var props = {
                grid: that.props.grid,
                dataValue: item,
                index: that.props.grid.size * that.props.rowIndex + idx,
                key: 'cellIndex' + idx
            };
            content.push(<Cell {...props}/>);
        });
        return content;
    },

    render: function () {
        return (
            <div className="grid-row">{this.setContent()}</div>
        )
    }
});

module.exports = GridRow;