import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChannelLIst from './components/ChannelLIst'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChannelLIst/>
    </>
  )
}

export default App
