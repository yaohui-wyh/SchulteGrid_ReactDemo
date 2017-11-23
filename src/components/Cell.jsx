import React from 'react';

class Cell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activeClass: 'cell',};
  }

  handleClick = () => {
    const {grid, index} = this.props;
    if (grid && grid.isCorrect(index)) {
      grid.updateProgress();
      this.setState({activeClass: 'cell correct-bg'});
    } else {
      this.setState({activeClass: 'cell wrong-bg'});
    }
    setTimeout(() => this.setState({activeClass: 'cell'}), 500);
  };

  render() {
    const {dataValue} = this.props;
    const {activeClass} = this.state;
    return <div className={activeClass} onClick={this.handleClick}>{dataValue}</div>
  }
}

export default Cell;
