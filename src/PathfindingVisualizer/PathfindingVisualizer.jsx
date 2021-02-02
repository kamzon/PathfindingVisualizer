import React, {Component} from 'react';
import Node from './Node/Node';

import './PathfindingVisualizer.css'

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

class PathfindingVisualizer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nodes : [],
      };
    }

    componentDidMount(){
        const nodes = getInitialGrid();
        this.setState({nodes});
    }

    render(){
        const {nodes} = this.state;
        console.log(nodes)
        return(
            <div className="grid">
                {nodes.map((row,rowIdx) => {
                    return <div>
                        {row.map((node,nodeIdx) => <Node></Node>)}
                    </div>
                })}
            </div>
        )
    }
}


const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(col, row));
      }
      grid.push(currentRow);
    }
    return grid;
  };
  const createNode = (col, row) => {
    return {
      col,
      row,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };
  const getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

export default PathfindingVisualizer