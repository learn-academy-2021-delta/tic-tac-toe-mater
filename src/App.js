import React, { Component } from 'react'
import Square from './components/Square'
import Game from './components/Game'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null]

    }
  }
// handleGamePlay = (index) => {
//   const { squares } = this.state
    
//       squares[index] = "test"
//         this.setState({squares: squares})
//   }

  calculateWinner = (squares) => {
    const lines = [
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
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  calculateNextValue = (squares) => {
    return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
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
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
        {this.state.squares.map((value, index) => {
          return (
            <Square
            value={value}
            index={index}
            key={index}
            // handleGamePlay={this.handleGamePlay}
            nextValue={this.calculateNextValue}
            winner={this.calculateWinner}
            status={this.calculateStatus}
          />
        )
      })}
      <Game />
          </div>
      </>
    )
  }
}
export default App
