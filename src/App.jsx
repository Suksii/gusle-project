import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-900 via-teal-600 to-teal-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galerija" element={<GalleryPage />} />
      </Routes>
      <GalleryPage />
    </div>
  )
}

export default App
