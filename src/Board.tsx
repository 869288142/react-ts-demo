import { connect } from 'react-redux'
import { squaresInit } from './store/reducers'
import React from 'react';
import Square  from './Square'
import { up } from './store/actions'
import { Dispatch } from 'redux';

interface BoardProps {
  squares: string [],
  dispatch: Dispatch
}

interface BoardState {
  xIsNext: boolean
}
class Board extends React.Component<BoardProps, BoardState> {

  constructor(props: BoardProps) {
    super(props)
    this.state = {
      xIsNext: true,
    }
  }

  handlerClick= (i: number) =>{
    const squares = this.props.squares.slice();
    if(squares[i]) {
      return;
    }
    const curResult =  this.state.xIsNext ? 'X' : 'O';
    this.setState({
      xIsNext: !this.state.xIsNext,
    });
    this.props.dispatch(up(curResult, i))
  }

  renderSquare(i: number) {
    return <Square style={{ width: '300px' }} className="square" value={this.props.squares[i] } onClick={() => this.handlerClick(i)}/>;
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

let mapStateToProps = function (state: squaresInit):squaresInit  {
  return state
}

export default connect(mapStateToProps)(Board)