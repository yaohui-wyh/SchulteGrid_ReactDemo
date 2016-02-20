var React = require('react');

var GuideText = React.createClass({
    render: function () {
        return (
            <div className="guide-text">
                <strong>Guide: </strong> Click numbers one by one in order.
            </div>
        )
    }
});

module.exports = GuideText;
