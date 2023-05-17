import React from 'react'

const Floatingtext = (props) => {
  return (
    <div>
    <span className='first'>{props.text}</span>
    <br/>
    <span className='second'>{props.text2}</span>
    <br/>
    <span className='third'>{props.text3}</span>
    </div>
  )
}

export default Floatingtext
