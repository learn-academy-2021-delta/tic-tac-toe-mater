import React, { Component } from 'react'
import Game from './components/Game'
import Board from './components/Board'
import CalculateNextValue from './components/calculateNextValue'
import "./App.css";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0,0,0,0,0,0,0,0,0,],
      setSquares: null
    }
  }

  calculateStatus = (winner, squares, nextValue) => {
    return winner
      ? `Winner: ${winner}`
      : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${nextValue}`
  }
  
  render(){

    return(
      <>
      <Game />
      <div className="board">
        {this.state.squares.map((value, index) => {
          return(
            <Board 
            value={value} 
            index={index}
            board={this.state.squares}
            setSquares={this.state.setSquares} />
            )
          })}
        </div>
      </>
    )

  }
}

export default App