import React from 'react'
import Board from '../components/Board.jsx'

class BigBangGuessWhoContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Board />
      </div>
    )
  }
}


export default BigBangGuessWhoContainer
