import React, {useState} from 'react'
import './index.css'




const App = () => {
  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false)

  //Create Working Constructors

  const reset = () => {
    setCount(0)
  }

  const decrement = () => {
    setCount(count-1)
  }

  const increment = () => {
    setCount(count+1)
  }

  const double = () => {
    setCount(count*2)
  }

  const divide = () => {
    setCount(count/2)
  }

  const toggleDark = () => {
    setDark(!dark)
  }

  const blockStyles ={
    background: dark ? 'black':'white',
    width:'120px',
    height:'120px',
    position:'absolute',
    top:'20%',
    left:'5%',
    transform:'translate(-50%,-50%)'
  }

  return (
    <div className='App'>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Minus 1</button>
      <button onClick={increment}>Add 1</button>
      <button onClick={double}>Double It</button>
      <button onClick={divide}>Split It</button>
      <button onClick={toggleDark}>Toggle Dark</button>
      <br/>

      <span>Dark mode is {dark? 'ON':'OFF'}</span>
      <div style = {blockStyles}>Count is at {count}</div>

    </div>

  )

  
}


export default App;
