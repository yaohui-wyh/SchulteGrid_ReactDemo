var React = require('react');

var footer = React.createClass({

    render: function () {
        return (
            <div className="footer">
                <hr/>
                <p>
                    <span className="footer-text">Created by Wang Yaohui,
                        written using <a href="https://facebook.github.io/react" target="_blank">React</a>
                    </span>
                </p>
            </div>
        )
    }
});

module.exports = footer;
