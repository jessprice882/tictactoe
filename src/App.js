import React from 'react';

  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true
      };

    }

    renderSquare(i) {
      return (
          React.createElement(Square, {
            value: this.state.squares[i],
            onClick: () => this.handleClick(i)
          }));


    }

    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
          React.createElement("div", null,
              React.createElement("div", {className: "status"}, status),
              React.createElement("div", {className: "board-row"},
                  this.renderSquare(0),
                  this.renderSquare(1),
                  this.renderSquare(2)),

              React.createElement("div", {className: "board-row"},
                  this.renderSquare(3),
                  this.renderSquare(4),
                  this.renderSquare(5)),

              React.createElement("div", {className: "board-row"},
                  this.renderSquare(6),
                  this.renderSquare(7),
                  this.renderSquare(8))));
    }
  }


  class Game extends React.Component {
    render() {
      return (
          React.createElement("div", {className: "game"},
              React.createElement("div", {className: "game-board"},
                  React.createElement(Board, null)),

              React.createElement("div", {className: "game-info"},
                  React.createElement("div", null),
                  React.createElement("ol", null))));
    }
  }


// ========================================




  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] === null) {
        return "fart";
      }
    }

    return null;
  }

}

export default App;