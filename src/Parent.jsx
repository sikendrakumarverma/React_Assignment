import React, {useState} from 'react'
import Child from './Child'

const Parent = () => {
  const [userInput, setUserInput] = useState('')

  function handleChange(e){
    setUserInput(e.target.value)
  }

  function resetInput() {
    setUserInput("")
  }

  return (
    <>
      <div>
        <input type="text" onChange={handleChange} value={userInput}/>
      </div>
      <Child resetInput={resetInput}/>
      <div>{userInput}</div>
    </>
  )
}

export default Parent
