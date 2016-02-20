var React = require('react'),
    Footer = require('./footer'),
    CtrlPanel = require('./control-panel'),
    GuideText = require('./guide-text'),
    Board = require('./board'),
    Grid = require('../models/grid');


var Container = React.createClass({
    getInitialState: function () {
        return {
            grid: new Grid(this.props.size),
            elapsed: 0,
            stage: 1,
            time: '00:00'
        }
    },

    componentWillMount: function () {
    },

    componentDidMount: function () {
    },

    render: function () {
        return (
            <div className="container">
                <h2 className="title">Schulte Grid</h2>
                <CtrlPanel grid={this.state.grid} time={this.state.time}
                           stage={this.state.stage} elapsed={this.state.elapsed}/>
                <GuideText />
                <Board grid={this.state.grid}/>
                <Footer />
            </div>
        )
    }
});

module.exports = Container;
