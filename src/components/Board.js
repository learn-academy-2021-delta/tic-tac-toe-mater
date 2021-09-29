import React, { Component } from 'react'
import CalculateNextValue from './CalculateNextValue'
import CalculateWinner from './CalculateWinner'




class Board extends Component {
   componentDidMount(){
    let [squares, setSquares] = this.props.board
  
    let nextValue = this.props.nextValue(this.state.squares)
    let winner = this.props.winner(this.state.squares)
    let status = this.props.calculateStatus(this.props.winner, this.state.squares, this.props.nextValue)
   }
  
    selectSquare = (index) => {
      if (this.winner || this.props.board[index]) {
        return
      }
      let squaresCopy = [...index]
      squaresCopy[index] = this.props.nextValue
       this.props.setSquares(squaresCopy)
    }
  

  
    renderSquare = (i) => {
      return (
        <button className="square" onClick={() => this.selectSquare(i)}>
          {this.props.board[i]}
        </button>
      )
    }
    render(){

    return (
      <div>
          <CalculateWinner />
          <CalculateNextValue />
        <div className="status"></div>
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
        )
     }
    }

  
  export default Board
    // restart = () => {
    //   let setSquares = (this.props.board.fill(""))
    //   return setSquares
    // }

    // <button className="restart" onClick={restart}>