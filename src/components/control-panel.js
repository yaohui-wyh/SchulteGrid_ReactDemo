var React = require('react');

var CtrlPanel = React.createClass({
    render: function () {
        return (
            <div className="control-panel">
                <p><strong>Guide:</strong> Click numbers one by one.</p>
                <a className="reset-button">New Game</a>
            </div>
        )
    }
});

module.exports = CtrlPanel;
