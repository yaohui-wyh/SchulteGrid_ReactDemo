var React = require('react'),
    Cell = require('./cell');

var GridRow = React.createClass({

    render: function () {
        var that = this;
        return (
            <div className="grid-row">
                {this.props.dataValues.map(function (item, idx) {
                    var props = {
                        grid: that.props.grid,
                        dataValue: item,
                        index: that.props.grid.size * that.props.rowIndex + idx,
                        key: 'cellIndex' + idx
                    };
                    return (<Cell {...props}/>);
                })}
            </div>
        )
    }
});

module.exports = GridRow;