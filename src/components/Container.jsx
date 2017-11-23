import React from 'react';
import ControlPanel from './ControlPanel';
import Cell from './Cell';
import Grid from '../models/Grid';

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: new Grid(props.size),
      elapsed: 0,
      stage: 1,
      time: '00:00',
    };
  }

  render() {
    const {time, grid, stage, elapsed} = this.state;
    const {size} = grid || {};
    return <div className="container">
      <h2 className="title">Schulte Grid</h2>
      <ControlPanel grid={grid} time={time} stage={stage} elapsed={elapsed}/>
      <div className="guide-text"><b>Guide: </b> Click numbers one by one in order.</div>
      <div className="board">
        {new Array(size).fill(1).map((i, idx) => <div key={`rowIndex-${idx}`} className="grid-row"> {new Array(size).fill(1).map((j, jdx) =>
            <Cell grid={grid} key={`cellIndex-${jdx}`} index={size * idx + jdx} dataValue={grid.shuffledDataSet[size * idx + jdx]}/>)}
        </div>)}
      </div>
      <div className="footer">
        <hr/>
        <p>
        <span className="footer-text"><b>EyeMon </b>2016, Created by <a href="https://github.com/alex-yh99" target="_blank">Wang Yaohui</a>,
            written in <a href="https://facebook.github.io/react" target="_blank">React</a>
        </span>
        </p>
      </div>
    </div>
  }
}

export default Container;
