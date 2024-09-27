import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import CounterImprove from './CounterImprove'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
      <CounterImprove />
      <Footer />
    </>
  )
}

export default App
