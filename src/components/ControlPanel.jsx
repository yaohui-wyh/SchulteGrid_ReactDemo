import React from 'react';

class ControlPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: props.grid,
      elapsed: props.elapsed,
      stage: props.stage,
      time: props.time,
      activeScoreClass: 'scores-value',
      activeButtonClass: 'button',
      buttonText: 'Restart'
    }
  }

  addPaddingToNum = (num) => (num < 10 ? '0' + num.toFixed(0) : num.toFixed(0));

  tick = () => {
    let {grid, elapsed} = this.state;
    if (grid && grid.isFinish()) {
      this.stopTick();
      this.setState({
        activeScoreClass: 'scores-value-finish',
        activeButtonClass: 'button-continue',
        buttonText: 'Continue'
      })
    } else if (grid) {
      elapsed++;
      if (elapsed >= 3600) {
        elapsed = 0;
      }
      this.setState({
        elapsed: elapsed,
        time: this.addPaddingToNum(elapsed / 60) + ':' + this.addPaddingToNum(elapsed % 60)
      });
    }
  };

  restart = () => {
    const {grid} = this.state;
    this.setState({
      elapsed: 0,
      time: '00:00',
      activeScoreClass: 'scores-value',
      activeButtonClass: 'button',
      buttonText: 'Restart'
    });
    grid && grid.resetProgress();
    this.stopTick();
    this.timer = setInterval(this.tick, 1000);
  };

  stopTick = () => {
    clearInterval(this.timer);
  };

  componentDidMount = () => {
    this.timer = setInterval(this.tick, 1000);
  };

  componentWillUnmount = () => {
    this.stopTick();
  };

  render() {
    const {activeButtonClass, activeScoreClass, time, stage, buttonText} = this.state;
    return <div className="control-panel">
      <div className="scores-container">
        <div className="current-time">
          <div className="scores-title">Time</div>
          <div className={activeScoreClass}>{time}</div>
        </div>
        <div className="current-stage">
          <div className="scores-title">Stage</div>
          <div className="scores-value">{stage}</div>
        </div>
      </div>
      <a className={activeButtonClass} onClick={this.restart}>{buttonText}</a>
    </div>;
  }
}

export default ControlPanel;
