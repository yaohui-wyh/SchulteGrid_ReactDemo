var React = require('react'),
    Header = require('./header'),
    Footer = require('./footer'),
    CtrlPanel = require('./control-panel');


var Container = React.createClass({

    componentWillMount: function () {
        this.init();
    },
    componentDidMount: function () {
    },

    // Init
    init: function () {
        this.score = '1';
        this.setState({
            score: this.score,
            best: this.score
        })
    },

    render: function () {
        return (
            <div className="container">
                <Header score={this.state.score} best={this.state.best}/>
                <CtrlPanel />
                <Footer />
            </div>
        )
    }


});

module.exports = Container;
