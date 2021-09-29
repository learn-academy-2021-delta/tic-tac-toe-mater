import React, { Component } from 'react'
import Game from './Game'
import Board from './Board'
import CalculateNextValue from './CalculateNextValue'

class CalculateWinner extends Component{
    calculateWinner = (squares) => {
        let lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; i++) {
          let [a, b, c] = lines[i]
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
          }
        }
        return null
      }
      render(){
          return(
              <>
              <Game />
              <Board winner={this.calculateWinner}/>
              <CalculateNextValue />
              <h1>"Test"</h1>
              </>
          )
      }
}

export default CalculateWinner