import { AppWrapper } from '@/App.styles'
import Topbar from '@/components/Topbar/Topbar'
import Favorites from '@/pages/Favorites/Favorites'
import MainPage from '@/pages/Main/MainPage'
import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App: FC = () => {
  return (
    <AppWrapper>
      <Router>
        <Topbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/fav' element={<Favorites />} />
        </Routes>
      </Router>
    </AppWrapper>
  )
}

export default App
