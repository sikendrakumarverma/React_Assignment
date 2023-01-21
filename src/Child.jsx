import React from 'react'

const Child = (props) => {
  return (
    <button onClick={props.resetInput}>RESET </button>
  )
}

export default Child