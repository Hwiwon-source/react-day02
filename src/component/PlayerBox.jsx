import React from 'react'
import "./PlayerBox.css"

function PlayerBox(props) {
  console.log(props)

  return (
    <div className='PlayerBox'>
      <h2>{props.name}</h2>
      <div className='img-wrap'>
        {/** 첫 UI 렌더링 시, null이 리턴될 경우 가드 역할 */}
        <img src={props.item ? props.item.img : "https://play-lh.googleusercontent.com/0wrJrG6Baz22NfndkMCw8ESisWC57BMmtEK7ZOEuaqkpCQuPPS7v_BBLRLj1uGdKfR5Q"} alt="playerChoice" />
      </div>
    </div>
  )
}

export default PlayerBox
