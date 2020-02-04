import React from 'react';
import Board from './Board.js';

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







export default Game;