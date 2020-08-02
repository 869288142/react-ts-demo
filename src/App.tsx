import React from 'react';
import { Provider } from "react-redux";
import Board from './Board'
import store from './store'
import './App.css';







class Game extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </Provider>
    );
  }
}




export default Game;
