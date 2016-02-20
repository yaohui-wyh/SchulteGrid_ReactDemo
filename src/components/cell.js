var React = require('react');

var Cell = React.createClass({

    getInitialState: function () {
        return {
            activeClass: 'cell'
        }
    },

    handleClick: function () {
        var grid = this.props.grid;
        if (grid.isCorrect(this.props.index)) {
            grid.updateProgress();
            this.setState({activeClass: 'cell correct-bg'});
        } else {
            this.setState({activeClass: 'cell wrong-bg'});
        }
        var that = this;
        setTimeout(function () {
            that.setState({activeClass: 'cell'});
        }, 500);
    },

    render: function () {
        return (
            <div className={this.state.activeClass} onClick={this.handleClick}>{this.props.dataValue}</div>
        )
    }
});


module.exports = Cell;
