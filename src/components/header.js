var React = require('react');

var heading = React.createClass({

    render: function () {
        return (
            <div className="header">
                <h1 className="title">Schulte Grid Demo</h1>
                <div className="scores-container">
                    <div className="current-score">{this.props.score}</div>
                    <div className="best-score">{this.props.best}</div>
                </div>
            </div>
        )
    }
});

module.exports = heading;
