import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Games from './Components/Games'
import GameInfo from './Components/GameInfo'
import NotFound from './Components/NotFound'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Game Review Page:</h1>
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to ="/games">Games</Link></li>
        </ul>
      </nav>
      </header>

      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/about" element={<About />}/>
          <Route path ="/games">
            <Route index element = {<Games />}/>
            <Route path = ":gameId" element = {<GameInfo />}/>
          </Route>
        <Route path = "*" element ={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
