import { useState } from 'react'
import './App.css'
import AudioUploader from './assets/AudioUploader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AudioUploader/>
    </>
  )
}

export default App
