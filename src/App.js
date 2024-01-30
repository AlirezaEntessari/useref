import React, { useEffect, useState, useRef } from "react";

function App() {
  const [name, setName] = useState("")
  // const renderCount = useRef(1)
  // const inputRef = useRef()
  const prevName = useRef('')

  // function focus() {
  //   // console.log(inputRef.current)
  //   inputRef.current.focus()
  //   inputRef.current.value = 'Some value'
  // }

  // useEffect(() => {
  //   // setRenderCount(prevRenderCount => prevRenderCount + 1)
  //   renderCount.current = renderCount.current + 1
  // })

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
      {/* <div>I rendered {renderCount.current} times</div> */}
      {/* <button onClick={focus}>Focus</button> */}
    </>
  );
}

export default App;

// ref is very similar to state in that you can store a previous value in it, and it persists between different renders, 
// but it does not cause you to re-render like state does.