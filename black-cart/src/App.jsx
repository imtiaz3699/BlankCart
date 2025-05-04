import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Layout from './Layout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
