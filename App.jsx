import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Registration</h1>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder='Enter Username' />

      <br />

      <label htmlFor="pass">Password</label>
      <input type="password" placeholder='Enter Password'/>

      <br />
      
      <Button label ="Login"/>
      <Button label ="Register"/>
    </>
  )
}

export default App
