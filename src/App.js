import React, { Component } from 'react'
import Player from './components/Player';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    };

  }

  handleCLick = (index) => {
    const { board, player, winner } = this.state;

    // update state values whenever a move happens
    if (!board[index] && !winner && player) {
      let newBoard = board;
      newBoard[index] = player;
      this.setState({
        board: newBoard,
        player: player === "X" ? "O" : "X"

      });
      // after every move we are checking winner
      this.checkWinner();
    }
  }
  
  checkWinner = () => {
    const { player } = this.state;
    // winlines: possible win combinations
    let winLines = [
      ["0", "1", '2'],
      ["3", "4", '5'],
      ["6", "7", '8'],
      ["0", "3", '6'],
      ["1", "4", '7'],
      ["2", "5", '8'],
      ["0", "4", '8'],
      ["2", "4", '6'],
    ];

    // we are iterating for win combinations inside board
    for (let index = 0; index < winLines.length; index++) {
      // destructuring win combination : E.g: winLines[index] = ["0", "1", '2'];
      // a = 0, b = 1, c = 2 
      const [a, b, c] = winLines[index];

      // updated board
      let board = this.state.board;

      // compare values on a, b and c on the baord if they are same
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert(`Player ${player} won`);
        this.setState({
          winner: this.state.player
        })
      }
    }
  }
  setPlayer = (player) => {
    this.setState({
      player
    })
  }
  render() {
    const { board } = this.state;
    const Box = board.map((item, index) => {
      return (
        <div className="box" key={index} onClick={() => this.handleCLick(index)}>
          {item}
        </div>
      )
    });
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <Player player={this.setPlayer} />
        <div className="board">
          {Box}
        </div>
      </div>
    )
  }
}




// first build board
// then squares
// event Handler
// finish printing "X"
// switch user -> X to O


// install react developer tools

























// Assignment:
// write code for: to show alert Tie
// build feature to give a choice for first player eithrt "X" or "O"
// specify alert which user won
// refactor code and do component split