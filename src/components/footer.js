var React = require('react');

var footer = React.createClass({

    render: function () {
        return (
            <div className="footer">
                <hr/>
                <p>
                    <span className="footer-text"><b>EyeMon </b>2016, Created by <a href="https://github.com/alex-yh99" target="_blank">Wang Yaohui</a>,
                        written in <a href="https://facebook.github.io/react" target="_blank">React</a>
                    </span>
                </p>
            </div>
        )
    }
});

module.exports = footer;
