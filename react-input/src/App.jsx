import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/child/child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='input-fields'>
          <Form/>
      </div>
    </>
  )
}

export default App
