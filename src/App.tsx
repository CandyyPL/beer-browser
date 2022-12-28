import MainPage from '@/pages/Main/MainPage'
import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/fav' element={<div />} />
      </Routes>
    </Router>
  )
}

export default App
