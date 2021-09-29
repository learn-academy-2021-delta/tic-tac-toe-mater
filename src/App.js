import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0]

    }
  }
handleGamePlay = (index) => {
  const { squares } = this.state
    if(squares === index){
      squares[index] = "test"
        this.setState({squares: squares})
    }
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
            handleGamePlay={this.handleGamePlay}
          />
        )
      })}
          </div>
      </>
    )
  }
}
export default App
