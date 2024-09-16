import { useState } from 'react'
import JokeFetcher from './JokeFetcher';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <JokeFetcher />
      
    </div>
  )
}

export default App
