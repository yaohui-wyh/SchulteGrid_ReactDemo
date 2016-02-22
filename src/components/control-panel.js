var React = require('react');

var CtrlPanel = React.createClass({
    getInitialState: function () {
        return {
            grid: this.props.grid,
            elapsed: this.props.elapsed,
            stage: this.props.stage,
            time: this.props.time,
            activeScoreClass: 'scores-value',
            activeButtonClass: 'button',
            buttonText: 'Restart'
        }
    },

    addPaddingToNum: function (num) {
        return num < 10 ? '0' + num.toFixed(0) : num.toFixed(0);
    },

    tick: function () {
        if (this.state.grid.isFinish()) {
            this.stopTick();
            this.setState({
                activeScoreClass: 'scores-value-finish',
                activeButtonClass: 'button-continue',
                buttonText: 'Continue'
            })
        } else {
            var elapsed = this.state.elapsed + 1;
            if (elapsed >= 3600) {
                elapsed = 0;
            }
            this.setState({
                elapsed: elapsed,
                time: this.addPaddingToNum(elapsed / 60) + ':' + this.addPaddingToNum(elapsed % 60)
            });
        }
    },

    restart: function () {
        this.setState({
            elapsed: 0,
            time: '00:00',
            activeScoreClass: 'scores-value',
            activeButtonClass: 'button',
            buttonText: 'Restart'
        });
        this.state.grid.resetProgress();
        this.stopTick();
        this.timer = setInterval(this.tick, 1000);
    },

    stopTick: function () {
        clearInterval(this.timer);
    },

    componentDidMount: function () {
        this.timer = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function () {
        this.stopTick();
    },

    render: function () {
        return (
            <div className="control-panel">
                <div className="scores-container">
                    <div className="current-time">
                        <div className="scores-title">Time</div>
                        <div className={this.state.activeScoreClass}>{this.state.time}</div>
                    </div>
                    <div className="current-stage">
                        <div className="scores-title">Stage</div>
                        <div className="scores-value">{this.state.stage}</div>
                    </div>
                </div>
                <a className={this.state.activeButtonClass} onClick={this.restart}>{this.state.buttonText}</a>
            </div>
        )
    }
});

module.exports = CtrlPanel;
