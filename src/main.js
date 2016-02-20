var ReactDOM = require('react-dom'),
    React = require('react'),
    Container = require('./components/container');

window.requestAnimationFrame(function() {
    ReactDOM.render(
        <Container />,
        document.getElementById('attach-point')
    )
});
