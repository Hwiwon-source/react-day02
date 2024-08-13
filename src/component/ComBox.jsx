import React from 'react'
import "./ComBox.css"

function ComBox(props) {
  return (
    <div className='ComBox'>
      <h2>{props.name}</h2>
      <div className='img-wrap'>
        <img src={props.item ? props.item.img : "https://github.com/Hwiwon-source/react-day02/raw/main/public/defuat_img2.png"} alt="comChoice" />
      </div>
    </div>
  )
}

export default ComBox
