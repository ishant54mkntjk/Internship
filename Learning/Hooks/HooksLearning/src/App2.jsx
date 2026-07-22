import React, {useRef} from 'react'

const App2 = () => {
    let ref =useRef(0);
    let inputRef =useRef(null);
    console.log(ref)
    console.log(inputRef)

  return (
    <>
      <h2>learning useRef hooks</h2>
      <input ref={inputRef}></input>
    </>
  )
}

export default App2