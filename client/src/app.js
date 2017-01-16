import React from 'react'
import ReactDOM from 'react-dom'
import TicTacToeContainer from './containers/BigBangGuessWhoContainer.jsx'

window.onload = function(){
  ReactDOM.render(
    <BigBangGuessWhoContainer />,
    document.getElementById('app')
  );
}
