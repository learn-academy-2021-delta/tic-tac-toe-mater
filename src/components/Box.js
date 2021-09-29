import React, { Component } from 'react'

class Box extends Component{
    handleClick = () => {
      this.props.handleGamePlay(this.props.index)
    }
    nextValue = () => {
      this.props.calculateNextValue(this.props.squares)
    }

    winner = () => {
      this.props.calculateWinner(this.props.squares)
    }

    status = () => {
      this.props.calculateStatus(this.winner, this.props.squares, this.nextValue)
    }

  render(){
    return(
      <>
        <div
        className="square"
        onClick={this.handleClick}
        >
        {this.props.value}
        </div>
      </>
    )
  }
}
export default Box
