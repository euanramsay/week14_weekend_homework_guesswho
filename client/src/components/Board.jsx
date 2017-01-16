import React from 'react'
import Person from './Person.jsx'

const Board = (props) => {
  return (
    <div>
      <button onClick={activateLasers}>
        Activate Lasers
      </button>
    </div>
  )
}

export default Board
