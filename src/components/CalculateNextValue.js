import React, { Component } from 'react'
import Board from './Board'

class CalculateNextValue extends Component{
    
        calculateNextValue = (squares) => {
            return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
          }

        render(){
           
        return(
            <>
            <Board nextValue={this.calculateNextValue} />
            <div>{this.calculateNextValue}</div>
            </>
        )
    }
}

export default CalculateNextValue