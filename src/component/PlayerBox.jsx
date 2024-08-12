import React from 'react'
import "./PlayerBox.css"

function PlayerBox(props) {
  console.log(props)
  return (
    <div className='PlayerBox'>
      <h2>YOU</h2>
      <div className='img-wrap'>
        {/** 첫 UI 렌더링 시, null이 리턴될 경우 가드 역할 */}
        <img src={props.item && props.item.img} alt="playerChoice" />
      </div>
    </div>
  )
}

export default PlayerBox
