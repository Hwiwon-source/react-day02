import React, { useState } from 'react'
import PlayerBox from './PlayerBox'
import ComBox from './ComBox'
import "./RockScissorsPaperGame.css"

const playerChoiceList = {
  scissors: {
    name: "Scissors",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/player_scissors.png"
  },
  rock: {
    name: "Rock",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/player_rock.png"
  },
  paper: {
    name: "Paper",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/player_paper.png"
  },
}

function RockScissorsPaperGame({ playerName }) {
  const [playerSelect, setPlayerSelect] = useState(null);
  const playGame = (PlayerChoice) => {
    setPlayerSelect(playerChoiceList[PlayerChoice])
  };
  return (
    <div className='RockScissorsPaperGame'>
      <div className='play-area'>
        {/* PlayerBox에게 넘겨줄 item이 변화하며 UI가 리렌더링 되어야 한다. */}
        <PlayerBox name={playerName} item={playerSelect} />
        <ComBox />
      </div>
      <div className='choice-area'>
        <button onClick={() => playGame("scissors")}>가위</button>
        <button onClick={() => playGame("rock")}>바위</button>
        <button onClick={() => playGame("paper")}>보</button>
      </div>
    </div>
  )
}

export default RockScissorsPaperGame
